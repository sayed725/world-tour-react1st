import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries , setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags]= useState([])

  const handleVisitedCountry=(country)=>{
    const visitedNewCountries = [...visitedCountries,country]
    setVisitedCountries(visitedNewCountries)

  }

  const handleVisitedFlags = (flag)=>{
    const newVisitedFlags = [...visitedFlags,flag]
    setVisitedFlags(newVisitedFlags)

  }





  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>Countries: {countries.length} </h2>

      <div>
        <h5>Visited Countries : {visitedCountries.length} </h5>
        <ul>
            {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }

        </ul>
      </div>
      <div className="flag-container"> 
        {
            visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
        }

      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3}
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlags={handleVisitedFlags}
           country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
