import React from 'react';
import './App.scss';
import Header from './layout/header/header'
import Summary from './layout/summary/summary'
import Products from './layout/products/products'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component  {

  render(){
    return (
      <Router>
      <div className="App">
        <Header />
        <Products />
        <Summary />
      </div>
      </Router>
    );
  }
}

export default App;
