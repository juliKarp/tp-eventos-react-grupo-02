import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { EventosRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <EventosRoutes />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
