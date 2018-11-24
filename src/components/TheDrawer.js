import React, { Component } from 'react';
import { getUsuarioLogueado } from '../services/usuarioService';
import { MenuList } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EventIcon from '@material-ui/icons/Event';
import DrawerItemLink from './DrawerItemLink';
import { withStyles } from '@material-ui/core/styles';
import DrawerInfo from './DrawerInfo';

const styles = theme => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
});

class TheDrawer extends Component {
    constructor(props) {
        super(props)

        this.state = { usuarioLogueado: null }

        DrawerItemLink.defaultProps = {
            onClick: this.props.closeDrawer
        }
    }

    async componentDidMount() {
        const usuarioLogueado = await getUsuarioLogueado()
        this.setState({ usuarioLogueado })
    }

    render() {
        const { classes, toggleDrawer, closeDrawer, isOpen } = this.props
        const { usuarioLogueado } = this.state;
        return <Drawer open={isOpen} onClose={toggleDrawer}>
            <div className={classes.toolbar}>
                <IconButton onClick={closeDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            {usuarioLogueado && <DrawerInfo usuario={usuarioLogueado} />}
            <Divider />
            <MenuList>
                <DrawerItemLink to="/" primary="Eventos Interesantes" icon={<EventIcon />} />
                <DrawerItemLink to="/entradas" primary="Mis Entradas" icon={<CreditCardIcon />} />
            </MenuList>
        </Drawer>
    }
}
export default withStyles(styles, { withTheme: true })(TheDrawer);
