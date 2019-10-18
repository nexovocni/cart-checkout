import React from 'react';
import './App.scss';
import CartCheckOut from './layout/CartCheckOut/CarkCheckOut'

class App extends React.Component  {

  render() {
    return (
        <div className="App">
          <CartCheckOut />
        </div>
    );
  }
}

export default App;
