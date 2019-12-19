import React from 'react';
import './App.scss';
import CartCheckOut from './layout/CartCheckOut/CarkCheckOut'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {ProductContextProvider} from './contexts/ProductContext'

class App extends React.Component  {

  render() {
    return (
      <Router>
        <ProductContextProvider>
      <div className="App">
        <Route render={() => <CartCheckOut /> }/>
      </div>
      </ProductContextProvider>
    </Router>
    );
  }
}

export default App;
