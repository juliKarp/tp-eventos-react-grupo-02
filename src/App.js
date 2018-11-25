import './App.css';

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Topbar from './components/Topbar';
import { EventosRoutes } from './routes';

class App extends Component {
  render() {
    return <BrowserRouter>
      <div className="App">
        <Topbar>
          <EventosRoutes />
        </Topbar>
      </div>
    </BrowserRouter>
  }
}

export default App;
