import React, { Component } from 'react';
import { List } from '@material-ui/core';
import { getEventos } from '../services/eventoService';
import EventoRow from './eventoRow';
import LoadingIndicator from './LoadingIndicator';
import ErrorBar from './errorBar';
import Topbar from './Topbar';

export class EventoList extends Component {

    constructor(props) {
        super(props)
        this.state = { eventos: [], loading: true }
    }

    async componentDidMount() {
        try {
            const eventos = await getEventos()
            this.setState({ eventos, error: null })
        } catch (error) {
            this.setState({ error })
        }
        this.setState({ loading: false })
    }

    render() {
        const { loading, error } = this.state
        return <Topbar volver={false}>
            <List dense={true}>
                {this.state.eventos.map(evento =>
                    <EventoRow key={evento.descripcion} evento={evento} />
                )}
            </List>
            <LoadingIndicator loading={loading} />
            <ErrorBar error={error} />
        </Topbar>
    }
}