import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocateTestCenter from './props/LocateTestCenter'
import TopNav from './props/TopNav'
import { Button } from '@material-ui/core';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <TopNav />
      <Router>
        <Switch>
        <Route path="/home" children={<Child name='home'/>} />
        <Route path="/world" children={<Child name='world'/>} />
        <Route path="/locations" children={<LocateTestCenter />} />
        <Route path="/local-data" children={<Child  name='Local DMV Data'/>} />
        <Route path="/vaccine" children={<Child name='Vaccine'/>} />
        </Switch>
      </Router>
        {/* <h2>Accounts</h2>
      <LocateTestCenter message='testing'/>
    <h1>{test}</h1> */}
    </div>
    
  )
}

class Child extends Component {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  

  render(){
    return (
      <div className='testing'>
        <h3>Place Holder PROP: '{this.props.name}'</h3>
      </div>
    );
  }
}
export default App;
