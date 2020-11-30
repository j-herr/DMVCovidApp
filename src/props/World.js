import React, { useState, useEffect } from 'react'
import './Cerulean.css';
import './World.css';


function World() {

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("few...")
    async function fetchData() {
      try {
        console.log("hello...")
        const res = await fetch("https://api.covid19api.com/summary");
        if (res && res.ok) {
          const _data = await res.json();
          setData(_data);
          console.log(_data);
        }
        else {
          console.log("no....", res);
        }
      } catch (error) {
        console.log("err:", error)
      }
    };
    fetchData();
  }, [])
  const s = [];
  console.log("data", data);
  return (
    <div>
      <div className="coronavirus-img"/>
      <p id="totalCases"></p>
      { data && <div>
        <ul className="list">
          <li > Total Confirmed: {data.Global.TotalConfirmed.toLocaleString()} </li>
          <li> New Confirmed: {data.Global.NewConfirmed.toLocaleString()} </li>
          <li> Total Deaths: {data.Global.TotalDeaths.toLocaleString()} </li>
          <li> New Deaths: {data.Global.NewDeaths.toLocaleString()} </li>
          <li> Total Recovered: {data.Global.TotalRecovered.toLocaleString()} </li>
          <li> New Recovered: {data.Global.NewRecovered.toLocaleString()} </li>
        </ul>
        <div className="table-wrapper">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"> Country </th>
                <th scope="col"> Total Confirmed </th>
                <th scope="col"> New Confirmed </th>
                <th scope="col"> Total Deaths </th>
                <th scope="col"> New Deaths </th>
                <th scope="col"> Total Recovered </th>
                <th scope="col"> New Recovered </th>
              </tr>
            </thead>
            <tbody>
              {data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed).map((country, i) => {
                let rowStyle = (i % 2 == 0) ? "table-success" : "table-secondary";
                return (
                  <tr className={rowStyle} key={i}>
                    <th scope="row">{country.Country}</th>
                    <td>{country.TotalConfirmed.toLocaleString()}</td>
                    <td>{country.NewConfirmed.toLocaleString()}</td>
                    <td>{country.TotalDeaths.toLocaleString()}</td>
                    <td>{country.NewDeaths.toLocaleString()}</td>
                    <td>{country.TotalRecovered.toLocaleString()}</td>
                    <td>{country.NewRecovered.toLocaleString()}</td>
                  </tr>);
              })}
            </tbody>
          </table>

        </div>
      </div>}

    </div>
  );
}

export default World;
