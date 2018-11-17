import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { EventoList } from './components/eventoList';

export const EventosRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={EventoList} />
        </Switch>
    </Router>
)