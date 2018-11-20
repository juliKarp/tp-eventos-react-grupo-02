import { List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import React, { Component } from 'react';
import { EventoService } from '../services/eventoService';

export class EntradaList extends Component {

    constructor(props) {
        super(props)
        this.eventoService = new EventoService()
        this.state = {
            eventos: []
        }
    }

    render() {
        return (
            <List dense="true">
                {this.state.eventos.map(evento =>
                    <ListItem divider key={'card' + evento.descripcion}>
                        <ListItemText primary={evento.descripcion} secondary={evento.lugar}/>
                        <ListItemSecondaryAction>
                            <AccessAlarmIcon fontSize="small"/>
                            <ListItemText secondary={evento.inicio}/>
                        </ListItemSecondaryAction>
                    </ListItem>
                )}
            </List>
        )
    }

}