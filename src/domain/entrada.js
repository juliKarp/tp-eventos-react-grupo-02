import { EventoAbierto } from "./eventoAbierto";

export class Entrada {

    evento = new EventoAbierto //para que quede tipado

    constructor(evento){
        this.evento = evento
    }
}