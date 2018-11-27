import React, { Component } from 'react';
import { getUsuarioLogueado } from '../../services/usuarioService';
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
import LoadingIndicator from '../notifications/LoadingIndicator';
import ErrorBar from '../notifications/errorBar';
import { Usuario } from '../../domain/usuario';

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

        this.state = { loading: true, usuarioLogueado: new Usuario() }
        
        DrawerItemLink.defaultProps = {
            onClick: this.props.closeDrawer
        }
    }

    async componentDidMount() {
        try {
            const usuarioLogueado = await getUsuarioLogueado()
            this.setState({ usuarioLogueado, error: null })
        } catch (error) {
            this.setState({ error })
        }
        this.setState({ loading: false })
    }

    render() {
        const { classes, toggleDrawer, closeDrawer, isOpen } = this.props
        const { loading, error } = this.state
        return <Drawer open={isOpen} onClose={toggleDrawer}>
            <div className={classes.toolbar}>
                <IconButton onClick={closeDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <DrawerInfo usuario={this.state.usuarioLogueado} />
            <Divider />
            <MenuList>
                <DrawerItemLink to="/" primary="Eventos Interesantes" icon={<EventIcon />} />
                <DrawerItemLink to="/entradas" primary="Mis Entradas" icon={<CreditCardIcon />} />
            </MenuList>
            <LoadingIndicator loading={loading} />
            <ErrorBar error={error}/>
        </Drawer>
    }
}
export default withStyles(styles, { withTheme: true })(TheDrawer);
