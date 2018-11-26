import React, { Component } from 'react';
import DetallesEvento from './detallesEvento';
import { Button, Grid, IconButton } from '@material-ui/core';
import { comprarEntrada } from '../services/eventoService';
import LoadingIndicator from './LoadingIndicator';
import ErrorBar from './errorBar';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


export class ComprarEntrada extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            cantidadDeseada: 0
        }
    }

    componentDidMount() {
        const { location: { evento }, history } = this.props;
        if (!evento) {
            history.push('/')
        }
    }

    incrementar() {
        this.cambiarContador(this.state.cantidadDeseada + 1)
    }

    decrementar() {
        this.cambiarContador(this.state.cantidadDeseada - 1)
    }

    cambiarContador(n) {
        this.setState({ loading: false, cantidadDeseada: n })
    }

    async compraEntrada(evento) {
        if (!this.state.loading) {
            this.setState({ loading: true })
            try {
                await comprarEntrada(evento,this.state.cantidadDeseada)
            } catch (error) {
                this.setState({ error })
            }
            this.setState({ loading: false })
        }
    }

    render() {
        const { location: { evento }, history } = this.props;
        const { loading, error } = this.state
        return <Grid container spacing={24}>
            <Grid item xs={12}>
                {evento && <DetallesEvento evento={evento} />}
            </Grid>
            <Grid item xs={6}>
                <IconButton color="primary" onClick={() => this.decrementar()}>
                    <RemoveCircleIcon />
                </IconButton>
                {this.state.cantidadDeseada}
                <IconButton color="primary" onClick={() => this.incrementar(evento)}>
                    <AddCircleIcon />
                </IconButton>
            </Grid>
            <Grid item xs={6}>
                <IconButton>
                    <AttachMoneyIcon />
                    {this.state.cantidadDeseada * evento.precio}
                </IconButton>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" onClick={() => history.push('/')}>Volver</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="primary" onClick={() => this.compraEntrada(evento)}>Comprar</Button>
            </Grid>
            <LoadingIndicator loading={loading} />
            <ErrorBar error={error} />
        </Grid>
    }
}