import { Entrada } from "./entrada"

export class Usuario {
    
    entradas = []

    constructor(nombreUsuario, nombreApellido, email, saldo) {
        this.nombreUsuario = nombreUsuario
        this.nombreApellido = nombreApellido
        this.email = email
        this.saldo = saldo
    }

    comprarEntrada(evento) {
        this.entradas.add(new Entrada(evento))
    }

    static fromJson(json){
        if (!json) {return}
        const usuario = new Usuario()
        usuario.nombreUsuario = json.nombreUsuario
        usuario.nombreApellido = json.nombreApellido
        usuario.email = json.email
        usuario.saldo = json.saldo
        return usuario
    }
}
