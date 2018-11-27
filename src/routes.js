import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { EventoList } from './components/eventoList/eventoList';
import { EntradaList } from './components/entradaList/entradaList';
import { ComprarEntrada } from './components/comprarEntrada/comprarEntrada';

export const EventosRoutes = () => (
    <Switch>
        <Route exact path="/" component={EventoList} />
        <Route path="/entradas" component={EntradaList} />
        <Route path="/evento" component={ComprarEntrada} />
    </Switch>
)