import React, { Fragment, Component } from 'react';
import { Grid, IconButton, Button } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { comprarEntrada } from '../../services/eventoService';
import LoadingIndicator from '../notifications/LoadingIndicator';
import ErrorBar from '../notifications/errorBar';
import SuccessBar from '../notifications/successBar';

export class SeleccionEntradas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            cantidadDeseada: 0,
            success: false,
        }
    }

    componentDidMount() {
        const { evento, history } = this.props;
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
            this.setState({ loading: true, error: false, success: false })
            if (this.state.cantidadDeseada > 0) {
                try {
                    await comprarEntrada(evento, this.state.cantidadDeseada)
                    this.setState({ success: "Entrada comprada con éxito" })
                } catch (error) {
                    this.setState({ error })
                }
                this.setState({ loading: false })
            } else {
                this.setState({ loading: false, error: 'Debe elegir la cantidad de entradas' })
            }
        }
    }

    render() {
        const { evento } = this.props;
        const { loading, error, success } = this.state

        return (<Fragment>
            <Grid item xs={4}>
                <IconButton
                    color="primary"
                    disabled={this.state.cantidadDeseada === 0}
                    onClick={() => this.decrementar()}>
                    <RemoveCircleIcon />
                </IconButton>
                {this.state.cantidadDeseada}
                <IconButton
                    color="primary"
                    onClick={() => this.incrementar()}>
                    <AddCircleIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4}>
                <IconButton>
                    <AttachMoneyIcon />
                    {this.state.cantidadDeseada * evento.precio}
                </IconButton>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" color="primary" onClick={() => this.compraEntrada(evento)}>Comprar</Button>
            </Grid>

            <LoadingIndicator loading={loading} />
            <ErrorBar error={error} />
            <SuccessBar success={success} />
        </Fragment>
        );
    }
}