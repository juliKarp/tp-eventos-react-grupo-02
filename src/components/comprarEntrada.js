import React, { Component } from 'react';
import DetallesEvento from './detallesEvento';
import { SeleccionEntradas } from './seleccionEntradas';
import { Grid } from '@material-ui/core';

export class ComprarEntrada extends Component {
    componentDidMount() {
        const { location: { evento }, history } = this.props;
        if (!evento) {
            history.push('/')
        }
    }

    render() {
        const { location: { evento }, history } = this.props;
        return <Grid container spacing={24}>
            {evento && <DetallesEvento evento={evento} />}
            {evento && <SeleccionEntradas evento={evento} history={history} />}
        </Grid>
    }
}