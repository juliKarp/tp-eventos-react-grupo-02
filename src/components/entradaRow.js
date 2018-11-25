import React from 'react'
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import { ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { withRouter } from 'react-router-dom'


function EntradaRow(props) {
    const { entrada, devolucionEntrada } = props
    const { evento } = entrada
    return <ListItem divider>
        <ListItemText primary={evento.descripcion} secondary={`${evento.inicio} - [${entrada.cantidad} x $${evento.precio}]`} />
        <ListItemSecondaryAction onClick={() => devolucionEntrada(entrada)}>
            <SubdirectoryArrowLeftIcon fontSize="large" />
        </ListItemSecondaryAction>
    </ListItem>
}

export default withRouter(EntradaRow)