import { Snackbar } from '@material-ui/core';
import React, { Component } from 'react';
import MySnackbarContent from './MySnackbarContent';

export default class ErrorBar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    componentDidUpdate(prevProps) {
        if (this.props.error !== prevProps.error) {
            if (this.props.error) {
                this.setState({ open: true, message: this.obtenerMensaje(this.props.error) })
            } else {
                this.setState({ open: false })
            }
        }
    }

    obtenerMensaje(error) {
        var mensaje
        // eslint-disable-next-line
        if (error == 'TypeError: Failed to fetch') {
            mensaje = 'No se pudo comunicar con el servidor.'
        } else if (error.message) {
            mensaje = error.message
        } else if (error === 'Debe elegir la cantidad de entradas') {
            mensaje = error
        } else {
            mensaje = 'ERROR!'
        }
        return mensaje
    }

    handleClose = (event, reason) => {
        if (reason !== 'clickaway') {
            this.setState({ open: false })
        }
    }

    render() {
        const { open, message } = this.state;
        return <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
            open={open} autoHideDuration={6000} onClose={this.handleClose}
        >
            <MySnackbarContent
                variant="error" onClose={this.handleClose} message={message}
            />
        </Snackbar>
    }
}