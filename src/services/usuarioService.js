import { Usuario } from '../domain/usuario';

const usuario = new Usuario("Juancito Fuentes", "juani2513@gmail.com", 1000)

export async function getUsuarioLogueado() {
    await timeout()
    return usuario
}

function timeout() {
    return new Promise(resolve => setTimeout(resolve, 300));
}