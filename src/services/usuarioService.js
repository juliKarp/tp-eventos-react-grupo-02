import { Usuario } from '../domain/usuario';
import { jsonFromEndpoint } from './service';

export async function getUsuarioLogueado() {
    const usuarioJson = await jsonFromEndpoint("/perfil/1")
    return Usuario.fromJson(usuarioJson)
}
