import React, { Component } from 'react';
import { List } from '@material-ui/core';
import { getEntradas } from '../services/eventoService';
import EventoRow from './eventoRow';

export class EntradaList extends Component {

    constructor(props) {
        super(props)
        this.state = {entradas: []}
    }

    async componentDidMount() {
        const entradas = await getEntradas()
        this.setState({entradas})
    }

    render() {
        return (
            <List dense={true}>
                {this.state.entradas.map(evento =>
                    <EventoRow evento={evento} />
                )}
            </List>
        )
    }
}