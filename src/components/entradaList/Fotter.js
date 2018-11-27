import { withStyles } from '@material-ui/core';
import React from 'react';

const styles = theme => ({
    fotter: {
        backgroundColor: '#fff',
        height: 56,
        display: 'flex',
        justifyContent: 'center',
        ...theme.typography.h5,
        'line-height': '56px',
        'text-align': 'center',
    } ,
});

function Fotter(props) {
    const { classes, saldo } = props;
    return <div className={classes.fotter}>Saldo: ${saldo}</div>;
}
export default withStyles(styles, { withTheme: true })(Fotter)