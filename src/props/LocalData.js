import React, { useState, useEffect } from 'react'
import './LocalData.css'
import Chart from "react-apexcharts"

function LocalData() {
    
    const [dataVirginia, setDataVirginia] = useState("");
    const [dataMaryland, setDataMaryland] = useState("");
    const [dataDC, setDataDC] = useState("");

    useEffect(()=> {
        const getDataVirginia = async() => {
            const data = await fetch("https://disease.sh/v3/covid-19/states/virginia")
                .then((response) => response.json());
            setDataVirginia(data);
            setVA_cases(data.todayCases);
            setVA_deaths(data.todayDeaths);
            
        }

        const getDataMaryland = async() => {
            const data = await fetch("https://disease.sh/v3/covid-19/states/maryland")
                .then((response) => response.json());
            setDataMaryland(data);
            setMD_cases(data.todayCases);
            setMD_deaths(data.todayDeaths);
        }

        const getDataDC = async() => {
            const data = await fetch("https://disease.sh/v3/covid-19/states/District%20Of%20Columbia")
                .then((response) => response.json());
            setDataDC(data);
            setDC_cases(data.todayCases);
            setDC_deaths(data.todayDeaths);
        }

        getDataVirginia();
        getDataMaryland();
        getDataDC();
    }, [])

    const [DC_cases, setDC_cases] = useState(0);
    const [MD_cases, setMD_cases] = useState(0);
    const [VA_cases, setVA_cases] = useState(0);
    const [DC_deaths, setDC_deaths] = useState(0);
    const [MD_deaths, setMD_deaths] = useState(0);
    const [VA_deaths, setVA_deaths] = useState(0);
    
    const series = [{
        name: 'Cases Today',
        data: [DC_cases, MD_cases, VA_cases]
    }, {
        name: 'Deaths Today',
        data: [DC_deaths, MD_deaths, VA_deaths]
    }];

    const options = {
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -17,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['#fff']
        },
        xaxis: {
          categories: ['Washington D.C.', 'Maryland', 'Virginia'],
        },
    }

    return (
        <div className="LocalDataMain">
            <img className="dmv" src={require("./images/dmv-graphic.png")} alt="dmv"/>
            <div className="data">
                <div>
                    <h1>{dataDC.state}</h1>
                    <p>Population: {dataDC.population}</p>
                    <p>Today's cases: {dataDC.todayCases}</p>
                    <p>Today's deaths: {dataDC.todayDeaths}</p>
                    <p style={{color: "red"}}>Active cases: {dataDC.active}</p>
                </div>             
                <div>
                    <h1>{dataMaryland.state}</h1>
                    <p>Population: {dataMaryland.population}</p>
                    <p>Today's cases: {dataMaryland.todayCases}</p>
                    <p>Today's deaths: {dataMaryland.todayDeaths}</p>
                    <p style={{color: "red"}}>Active cases: {dataMaryland.active}</p>
                </div>
                <div>
                    <h1>{dataVirginia.state}</h1>
                    <p>Population: {dataVirginia.population}</p>
                    <p>Today's cases: {dataVirginia.todayCases}</p>
                    <p>Today's deaths: {dataVirginia.todayDeaths}</p>
                    <p style={{color: "red"}}>Active cases: {dataVirginia.active}</p>
                </div>
            </div>
            <div>
              <Chart
                options={options}
                series={series}
                type="bar"
                height={400}
              />
            </div>
        </div>       
    )
}

export default LocalData
