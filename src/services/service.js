export const REST_SERVER_URL = 'http://localhost:9000'

export async function jsonFromEndpoint(urlPath) {
    const respuesta = await fetch(REST_SERVER_URL + urlPath)
    if (respuesta.status !== 200) {
        throw new Error(await respuesta.text())
    }
    return await respuesta.json()
}

export async function jsonFromDelete(urlPath, json) {
    const respuesta = await fetch(REST_SERVER_URL + urlPath, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(json)
    })
    if (respuesta.status !== 200) {
        throw new Error(await respuesta.text())
    }
    return await respuesta.json()
}

export async function jsonFromPut(urlPath, json) {
    const respuesta = await fetch(REST_SERVER_URL + urlPath, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(json)
    })
    if (respuesta.status !== 200) {
        throw new Error(await respuesta.text())
    }
    return await respuesta.json()
}