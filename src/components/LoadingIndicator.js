import React, { Fragment } from 'react';
import { withStyles, CircularProgress } from '@material-ui/core';

const styles = theme => ({
    loading: {
        backgroundColor: '#00000033',
        height: '100%',
        widht: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        botton: 0,

    },
    progress: {
        margin: '50% auto',
    }
});

function LoadingIndicator(props) {
    const { classes, loading } = props;
    return <Fragment>
        {loading && <div className={classes.loading}>
            <CircularProgress className={classes.progress} />
        </div>}
    </Fragment>
}
export default withStyles(styles, { withTheme: true })(LoadingIndicator)