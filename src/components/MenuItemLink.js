import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React, { Component } from 'react';
import {Link,  withRouter } from 'react-router-dom'
import { MenuItem } from '@material-ui/core';

export class MenuItemLink extends Component {
  render() {
    const { icon, primary, onClick, location: {pathname}, to } = this.props;
    return (
      <MenuItem key={to} onClick={onClick} component={Link} to={to} selected={to === pathname}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </MenuItem>
    );
  }
}

export default withRouter(MenuItemLink)