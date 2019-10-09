import React from 'react';
import './App.scss';
import Header from './layout/header/header'
import Summary from './layout/summary/summary'
import Products from './layout/products/products'
import {BrowserRouter as Router} from 'react-router-dom'
import {CodeProvider} from './hooks/CodeContext'
import {TaxProvider} from './hooks/TaxContext'
import {CheckProvider} from './hooks/CheckContext'
import {ProductsProvider} from './hooks/ProductsContext'
import {ProductProvider} from './hooks/ProductContext'

class App extends React.Component  {

  render(){
    return (
      <ProductProvider>
      <ProductsProvider>
      <CheckProvider>
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
      </CheckProvider>
      </ProductsProvider>
      </ProductProvider>
    );
  }
}

export default App;
