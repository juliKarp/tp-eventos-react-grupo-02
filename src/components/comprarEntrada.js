import React, { Fragment } from 'react';
import DetallesEvento from './detallesEvento';
import { Button } from '@material-ui/core';
import { comprarEntrada } from '../services/eventoService';



export function ComprarEntrada(props) {

    const { location: { evento }, history } = props;
    if (!evento) {
        history.push('/')
    }
    return <Fragment>
        {evento && <DetallesEvento evento={evento} />}
        <Button variant="contained" onClick={() => history.push('/')}>Volver</Button>
        <Button variant="contained" color="primary" onClick={() => comprarEntrada(evento)}>Comprar</Button>
    </Fragment>
}