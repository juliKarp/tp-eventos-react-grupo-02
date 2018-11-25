import { EventoAbierto } from '../domain/eventoAbierto';
import { Entrada } from '../domain/entrada';
import { REST_SERVER_URL } from './constants';

const eventosInteresantes = [
    new EventoAbierto("Holabalooza", "Elefantodromo San Isidro", "05/06/2019 12:00", "07/06/2019 23:59", 10000),
    new EventoAbierto("El bailongo", "Teatro Colon", "05/12/2018 23:00", "06/12/2018 06:00", 100),
    new EventoAbierto("Fiesta clandestina", "Groove", "05/06/2019 12:00", "07/06/2019 23:59", 500),
    new EventoAbierto("Miranda!", "Niceto Club", "10/12/2018 21:00", "11/12/2018 00:00", 600),
]


const entradas = [
    new Entrada(eventosInteresantes[0], 2),
    new Entrada(eventosInteresantes[1], 3),
    new Entrada(eventosInteresantes[2], 1),
]

export async function getEventos(usuarioId) {
    const respuesta = await await fetch(REST_SERVER_URL + "/eventosDeInteres/1")
    const eventosJson = await respuesta.json()
    return eventosJson.map(evento =>
        EventoAbierto.fromJson(evento)
    );
}

export async function getEntradas() { return entradas }

export async function devolverEntrada(entrada) {  }

export async function comprarEntrada(evento) {
    const entrada = entradas.find(entrada => entrada.evento === evento)
    if (entrada) {
        entrada.cantidad++
    } else {
        entradas.push(new Entrada(evento, 1))
    }
}
