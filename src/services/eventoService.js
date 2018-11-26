import { EventoAbierto } from '../domain/eventoAbierto';
import { Entrada } from '../domain/entrada';
import { jsonFromEndpoint, jsonFromDelete, jsonFromPut } from './service';

export async function getEventos(usuarioId) {
    const eventosJson = await jsonFromEndpoint("/eventosDeInteres/1")
    return eventosJson.map(eventoJson =>
        EventoAbierto.fromJson(eventoJson)
    )
}

export async function getEntradas(usuarioId) {
    const entradasJson = await jsonFromEndpoint("/entradas/1")
    return entradasJson.map(entradaJson =>
        Entrada.fromJson(entradaJson)
    )
}

export async function devolverEntrada(entrada) {
    const deleteJson = await jsonFromDelete("/devolverEntrada", { usuarioId: 1, eventoId: entrada.evento.id })
    return deleteJson
}

export async function comprarEntrada(evento,cantidad) {
    const comprarEntradaJson = await jsonFromPut("/comprarEntrada", { usuarioId: 1, eventoId: evento.id, cantidad: cantidad })
    return comprarEntradaJson
}