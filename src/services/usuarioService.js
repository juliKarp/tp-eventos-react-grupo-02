import { Usuario } from '../domain/usuario';

    usuario = new Usuario("Juancito Fuentes", "juani2513@gmail.com", 1000)

export class UsuarioService {

    getUsuarioLogueado() { return usuario }

}