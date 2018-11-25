export class EventoAbierto {

    constructor(descripcion, lugar, inicio, fin, precio){
        this.descripcion = descripcion
        this.lugar = lugar
        this.inicio = inicio
        this.fin = fin
        this.precio = precio
    }

    static fromJson(json) {
        if (!json) { return }
        var evento = new EventoAbierto()
        evento.tipo = json.tipo
        evento.id = json.id
        evento.descripcion = json.nombre
        evento.lugar = json.locacion.nombre
        evento.inicio = json.fechaDesde
        evento.fin = json.fechaHasta
        evento.precio = json.precio
        return evento
    }
}