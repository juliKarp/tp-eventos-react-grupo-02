import './App.css';

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ResponsiveDrawer from './components/ResponsiveDrawer';
import { EventosRoutes } from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ResponsiveDrawer>
            <EventosRoutes />
          </ResponsiveDrawer>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
