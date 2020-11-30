import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'
import './App.css';
import LocateTestCenter from './props/LocateTestCenter'
import AboutCovid19 from './props/AboutCovid19';
import Home from './props/Home';
import World from './props/World';
import EmptyPage from './props/EmptyPage';
import VaccineNews from './props/VaccineNews';
import TopNav from './props/TopNav';
// import {
//   HashRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams
// } from "react-router-dom";


function App() {
  return (    
      <Router>
        <TopNav></TopNav>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/world" exact component={World}/>
            <Route path="/locations" exact component={LocateTestCenter} />
            <Route path="/local-data" exact component={EmptyPage} />
            <Route path="/vaccine" exact component={VaccineNews} />
            <Route path="/about-covid19" exact component={AboutCovid19} />
        </div>       
      </Router>    
  )
}

export default App;
