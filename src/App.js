import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import TopNav from './props/TopNav'
import LocateTestCenter from './props/LocateTestCenter'
import AboutCovid19 from './props/AboutCovid19';
import Home from './props/Home';
import EmptyPage from './props/EmptyPage';


function App() {
  return (    
      <Router>
        <TopNav></TopNav>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/world" exact component={EmptyPage}/>
            <Route path="/locations" exact component={LocateTestCenter} />
            <Route path="/local-data" exact component={EmptyPage} />
            <Route path="/vaccine" exact component={EmptyPage} />
            <Route path="/about-covid19" exact component={AboutCovid19} />
        </div>       
      </Router>    
  )
}

export default App;
