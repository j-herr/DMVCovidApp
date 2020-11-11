import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import LocateTestCenter from './props/LocateTestCenter'
import AboutCovid19 from './props/AboutCovid19';
import Home from './props/Home';
import EmptyPage from './props/EmptyPage';
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
            <Route path="/DMVCovidApp" exact component={Home} />
            <Route path="/DMVCovidApp/home" exact component={Home} />
            <Route path="/DMVCovidApp/world" exact component={EmptyPage}/>
            <Route path="/DMVCovidApp/locations" exact component={LocateTestCenter} />
            <Route path="/DMVCovidApp/local-data" exact component={EmptyPage} />
            <Route path="/DMVCovidApp/vaccine" exact component={EmptyPage} />
            <Route path="/DMVCovidApp/about-covid19" exact component={AboutCovid19} />
        </div>       
      </Router>    
  )
}

export default App;
