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
        var evento = new EventoAbierto()
        console.log(json.evento.id)
        evento.id = json.evento.id
        evento.descripcion = json.evento.nombre
        evento.lugar = json.evento.locacion.nombre
        evento.inicio = json.evento.fechaDesde
        evento.fin = json.evento.fechaHasta
        evento.precio = json.evento.precio
        return new Entrada(evento,1)
    }
}