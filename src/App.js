import React, { Component } from 'react';
import './App.css';
import { EventosRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <EventosRoutes />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
