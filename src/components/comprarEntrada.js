import React, { Fragment, Component } from 'react';
import DetallesEvento from './detallesEvento';
import { Button } from '@material-ui/core';
import { comprarEntrada } from '../services/eventoService';
import LoadingIndicator from './LoadingIndicator';
import ErrorBar from './errorBar';

export class ComprarEntrada extends Component {
    constructor(props) {
        super(props)
        this.state = { loading: false }
    }

    componentDidMount() {
        const { location: { evento }, history } = this.props;
        if (!evento) {
            history.push('/')
        }
    }

    async compraEntrada(evento) {
        if (!this.state.loading) {
            this.setState({ loading: true })
            try {
                await comprarEntrada(evento)
            } catch (error) {
                this.setState({ error })
            }
            this.setState({ loading: false })
        }
    }
    render() {
        const { location: { evento }, history } = this.props;
        const { loading, error } = this.state
        return <Fragment>
            {evento && <DetallesEvento evento={evento} />}
            <Button variant="contained" onClick={() => history.push('/')}>Volver</Button>
            <Button variant="contained" color="primary" onClick={() => this.compraEntrada(evento)}>Comprar</Button>
            <LoadingIndicator loading={loading} />
            <ErrorBar error={error}/>
        </Fragment>
    }
}