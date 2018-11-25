import { Usuario } from '../domain/usuario';
import { REST_SERVER_URL } from './constants';

export async function getUsuarioLogueado() {
    const respuesta = await fetch(REST_SERVER_URL + "/perfil/1")
    const usuarioJson = await respuesta.json()
    return Usuario.fromJson(usuarioJson)
}
