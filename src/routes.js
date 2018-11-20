import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { EventoList } from './components/eventoList';
import { EntradaList } from './components/entradaList';
import { EventoView } from './components/eventoView';

export const EventosRoutes = () => (
    <Switch>
        <Route exact path="/" component={EventoList} />
        <Route path="/entradas" component={EntradaList} />
        <Route path="/evento" component={EventoView} />
    </Switch>
)