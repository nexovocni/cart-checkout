import React from 'react';
import './App.scss';
import CartPage from './layout/cartPage/CartPage';
import {BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component  {

  render() {
    return (
      <Router>
        <div className="App">
          <CartPage />
        </div>
        </Router>
    );
  }
}

export default App;
