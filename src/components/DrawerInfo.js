import React from 'react';
import { Avatar, ListItemText } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

const styles = theme => ({
    avatar: {
        color: '#fff',
        backgroundColor: indigo[800],
    },
});

function DrawerInfo(props) {
    const { classes, usuario: { nombre, mail } } = props
    return <Toolbar>
        <Avatar alt="Victor Stone" className={classes.avatar}>
            <AccountCircleIcon fontSize="large" />
        </Avatar>
        <ListItemText primary={nombre} secondary={mail} />
    </Toolbar>;
}

export default withStyles(styles, { withTheme: true })(DrawerInfo);
