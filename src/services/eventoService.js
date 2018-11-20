import { EventoAbierto } from '../domain/eventoAbierto';

const eventosInteresantes = [
    new EventoAbierto("Holabalooza", "Elefantodromo San Isidro", "05/06/2019 12:00", "07/06/2019 23:59", 10000),
    new EventoAbierto("El bailongo", "Teatro Colon", "05/12/2018 23:00", "06/12/2018 06:00", 100),
    new EventoAbierto("Fiesta clandestina", "Groove", "05/06/2019 12:00", "07/06/2019 23:59", 500),
    new EventoAbierto("Miranda!", "Niceto Club", "10/12/2018 21:00", "11/12/2018 00:00", 600),
]

var eventoSeleccionado

export class EventoService {

    getEventos() { return eventosInteresantes }

    getEventoSeleccionado() { return eventoSeleccionado }
}