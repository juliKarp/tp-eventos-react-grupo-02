import './App.css';

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { EventosRoutes } from './routes';

class App extends Component {
  render() {
    return <BrowserRouter>
      <div className="App">
        <EventosRoutes />
      </div>
    </BrowserRouter>
  }
}

export default App;
