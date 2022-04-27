import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "South America", "North America", "Asia", "Europe", "Oceania"];
  //   const [hello, setHello] = useState("hello les amis");
  //appel a une api
  //Le use effect se joue lorsuqe le composant est mis en place (montée)
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      {/* <h1>Countries</h1>
      <ul>{hello}</ul> */}
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent) => (
          <li>
            <input 
                type="radio" 
                id={continent} 
                name="continentRadio"
                checked={selectedRadio === continent}
                onChange={(e) => setSelectedRadio(e.target.id)} 
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {/* Lorsqu'un filtre de recherche est activé on fait apparaitre ce bouton */}
      {selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>
      )}
      <ul>
        {data
        .filter((country) =>country.continents.includes(selectedRadio))
        .sort((a, b) => b.population - a.population)
        .slice(0, rangeValue).map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
