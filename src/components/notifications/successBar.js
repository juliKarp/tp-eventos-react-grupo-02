import { Snackbar } from '@material-ui/core';
import React, { Component } from 'react';
import MySnackbarContent from './MySnackbarContent';

export default class SuccessBar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            if (this.props.success) {
                this.setState({ open: true })
            } else {
                this.setState({ open: false })
            }
        }
    }

    handleClose = (event, reason) => {
        if (reason !== 'clickaway') {
            this.setState({ open: false })
        }
    }

    render() {
        const { open } = this.state;
        return <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
            open={open} autoHideDuration={6000} onClose={this.handleClose}
        >
            <MySnackbarContent
                variant="success" onClose={this.handleClose} message={this.props.success}
            />
        </Snackbar>
    }
}