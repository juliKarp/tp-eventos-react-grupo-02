import React, { Component } from 'react'
import { EventoRow } from './eventoRow'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { EventoService } from '../services/eventoService';

export class EventoList extends Component {

    constructor(props) {
        super(props)
        this.eventoService = new EventoService()
        this.state = {
            eventos: this.eventoService.getEventos()
        }
    }

    render() {
        return (
            this.state.eventos.map(evento =>
                <Card key={'card' + evento.descripcion}>
                    <CardContent key={'content' + evento.descripcion}>
                        <EventoRow evento={evento} key={evento.descripcion} />
                    </CardContent>
                </Card>
            )
        )
    }

}