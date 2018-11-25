import { Avatar, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react';

const styles = theme => ({
    avatar: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default,
    },
    toolbar: {
        backgroundColor: theme.palette.primary.main,
    },
});

function DrawerInfo(props) {
    const { classes, usuario: { nombreApellido, email } } = props
    return <Toolbar className={classes.toolbar}>
        <Avatar className={classes.avatar}>
            <AccountCircleIcon fontSize="large" />
        </Avatar>
        <ListItemText primary={nombreApellido} secondary={email} />
    </Toolbar>
}

export default withStyles(styles, { withTheme: true })(DrawerInfo);
