import React from 'react';
import './App.scss';
import Header from './layout/header/header'
import Summary from './layout/summary/summary'
import Products from './layout/products/products'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {CodeProvider} from './hooks/CodeContext'
import {TaxProvider} from './hooks/TaxContext'

class App extends React.Component  {

  render(){
    return (
      <TaxProvider>
      <CodeProvider>
        <Router>
        <div className="App">
          <div className="vertical">
            <Header />
            <Products />
          </div>
          <Summary />
        </div>
        </Router>
      </CodeProvider>
      </TaxProvider>
    );
  }
}

export default App;
