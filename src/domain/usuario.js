import { Entrada } from "./entrada"

export class Usuario {
    
    entradas = []

    constructor(nombre, mail, saldo) {
        this.nombre = nombre
        this.mail = mail
        this.saldo = saldo
    }

    comprarEntrada(evento) {
        this.entradas.add(new Entrada(evento))
    }
}
