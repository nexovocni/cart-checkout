import React from 'react';
import './App.scss';
import CartCheckOut from './layout/CartCheckOut/CarkCheckOut'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component  {

  render() {
    return (
      <Router>
      <div className="App">
        <Route render={(props) => <CartCheckOut {...props}/> }/>
      </div>
    </Router>
    );
  }
}

export default App;
