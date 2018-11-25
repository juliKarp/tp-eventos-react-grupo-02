import React from 'react'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { withRouter } from 'react-router-dom'

function EventoRow(props) {
    const { evento, history } = props
    return <ListItem button divider onClick={() => history.push('/evento')}>
        <ListItemText primary={evento.descripcion} secondary={evento.lugar} />
        <ListItemSecondaryAction>
            <AccessAlarmIcon fontSize="small" />
            <ListItemText secondary={evento.inicio} />
        </ListItemSecondaryAction>
    </ListItem>
}

export default withRouter(EventoRow)