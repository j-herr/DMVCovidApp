import React, { useState, useEffect } from 'react'
import './LocalData.css'

function LocalData() {
    const [dataVirginia, setDataVirginia] = useState("");
    const [dataMaryland, setDataMaryland] = useState("");
    const [dataDC, setDataDC] = useState("");

    useEffect(()=> {
        const getDataVirginia = async() => {
            const data = await fetch("https://disease.sh/v3/covid-19/states/virginia")
                .then((response) => response.json());
            setDataVirginia(data);
        }

        const getDataMaryland = async() => {
            const data = await fetch("https://disease.sh/v3/covid-19/states/maryland")
                .then((response) => response.json());
            setDataMaryland(data);
        }

        const getDataDC = async() => {
            const data = await fetch("https://disease.sh/v3/covid-19/states/District%20Of%20Columbia")
                .then((response) => response.json());
            setDataDC(data);
        }

        getDataVirginia();
        getDataMaryland();
        getDataDC();
    }, [])

    return (
        <div class="LocalDataMain">
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
        </div>       
    )
}

export default LocalData
