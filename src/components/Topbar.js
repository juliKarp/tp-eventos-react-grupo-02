import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TheDrawer from './TheDrawer';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: 20,
  },
  content: {
    flexGrow: 1,
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
});

class Topbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDrawerOpen: false
    }

    TheDrawer.defaultProps = {
      toggleDrawer : this.handleDrawerToggle,
      closeDrawer : this.handleDrawerClose
    }
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ isDrawerOpen: !state.isDrawerOpen }));
  };

  handleDrawerClose = () => {
    this.setState({ isDrawerOpen: false });
  };

  render() {
    const { classes, children } = this.props;
    const { isDrawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Event OS
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <TheDrawer isOpen={isDrawerOpen}/>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

Topbar.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Topbar);
