import { EventoAbierto } from "./eventoAbierto";

export class Entrada {

    evento = new EventoAbierto() //para que quede tipado
    cantidad = 1
    constructor(evento, cantidad){
        this.evento = evento
        this.cantidad = cantidad
    }

    devolverUna(cantidad) {
        return new Entrada(this.evento, this.cantidad-1)
    }
    
    static fromJson(json) {
        if (!json) { return }
        var evento = EventoAbierto.fromJson(json.evento)
        return new Entrada(evento,json.cantidad)
    }
}