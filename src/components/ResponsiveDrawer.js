import { Avatar, ListItemText, MenuList } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import indigo from '@material-ui/core/colors/indigo';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EventIcon from '@material-ui/icons/Event';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MenuItemLink from './MenuItemLink';
import { UsuarioService } from '../services/usuarioService';



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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  avatar: {
    color: '#fff',
    backgroundColor: indigo[800],
  },
});

class ResponsiveDrawer extends Component {
  constructor(props) {
    super(props)
    this.usuarioService = new UsuarioService()
    this.state = {
      mobileOpen: false,
      usuarioLogueado: this.usuarioService.getUsuarioLogueado()
    }
    MenuItemLink.defaultProps = {
      onClick: this.handleDrawerClose
    }
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  render() {
    const { classes, children } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Toolbar>
          <Avatar alt="Victor Stone" className={classes.avatar}>
            <AccountCircleIcon fontSize="large"/>
          </Avatar>
          <ListItemText primary={this.state.usuarioLogueado.nombre} secondary={this.state.usuarioLogueado.mail} />
        </Toolbar>
        <Divider />
        <MenuList>
          <MenuItemLink to="/" primary="Eventos Interesantes" icon={<EventIcon />} />
          <MenuItemLink to="/entradas" primary="Mis Entradas" icon={<CreditCardIcon />} />
        </MenuList>
      </div>
    );

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
          <Drawer
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
