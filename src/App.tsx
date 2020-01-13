import React from 'react';
import './App.scss';
import CartPage from './layout/CartPage/CartPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {ProductContextProvider} from './contexts/ProductContext'
import {CartContextProvider} from './contexts/CartComponentContext'

class App extends React.Component  {

  render() {
    return (
      <Router>
        <CartContextProvider>
        <ProductContextProvider>
          <div className="App">
            <Route render={() => <CartPage /> }/>
          </div>
        </ProductContextProvider>
        </CartContextProvider>
      </Router>
    );
  }
}

export default App;
