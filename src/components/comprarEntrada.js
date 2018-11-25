import React, { Component } from 'react';
import EventoView from './eventoView';
import { Button } from '@material-ui/core';

export class ComprarEntrada extends Component {

    render() {
        return (
            <div>
                <EventoView evento={this.props.location.evento} />
                <Button variant="contained" onClick={() => this.props.history.push('/')}>Volver</Button>
                <Button variant="contained" color="primary" >Comprar</Button>
            </div>
        )
    }
}