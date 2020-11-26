import React,{useState} from 'react'
import './App.css';
import Row from './Row';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bookinfo from './BookInfo';



function App() {

  
  return (
    <div className="app">
      
      <Router>
        <Switch>
        <Route exact path="/">
        <Row />
        </Route>
        <Route exact path="/info">
        <Bookinfo />
        </Route>
        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
