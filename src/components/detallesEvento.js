import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Grid } from '@material-ui/core';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function DetallesEvento(props) {
    const { classes, evento } = props;

    return (<Grid item xs={12}>
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {evento.descripcion}
                </Typography>
                <Typography component="p" align="left">
                    <LocationOnIcon fontSize="small" />
                    {evento.lugar}
                </Typography>
                <Typography component="p" align="left">
                    <AccessAlarmIcon fontSize="small" />
                    {evento.inicio + " - " + evento.fin}
                </Typography>
                <Typography component="p" align="left">
                    <AttachMoneyIcon fontSize="small" />
                    {evento.precio}
                </Typography>
            </CardContent>
        </Card>
        </Grid>
    );
}

DetallesEvento.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetallesEvento);