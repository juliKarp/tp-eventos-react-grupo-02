import React, { Component } from 'react';
import { List } from '@material-ui/core';
import { getEventos } from '../services/eventoService';
import EventoRow from './eventoRow';

export class EventoList extends Component {

    constructor(props) {
        super(props)
        this.state = { eventos: [], error: null }
    }

    async componentDidMount() {
        try {
            const eventos = await getEventos()
            this.setState({ eventos, error: null })
        } catch (error) {
            this.setState({ error })
        }
    }

    render() {
        return (
            <List dense={true}>
                {this.state.eventos.map(evento =>
                    <EventoRow key={'card' + evento.descripcion} evento={evento} />
                )}
            </List>
        )
    }
}