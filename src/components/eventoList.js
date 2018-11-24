import React, { Component } from 'react';
import { List } from '@material-ui/core';
import { getEventos } from '../services/eventoService';
import EventoRow from './eventoRow';

export class EventoList extends Component {

    constructor(props) {
        super(props)
        this.state = {eventos: []}
    }

    async componentDidMount() {
        const eventos = await getEventos()
        this.setState({eventos})
    }

    render() {
        return (
            <List dense={true}>
                {this.state.eventos.map(evento =>
                    <EventoRow evento={evento} />
                )}
            </List>
        )
    }
}