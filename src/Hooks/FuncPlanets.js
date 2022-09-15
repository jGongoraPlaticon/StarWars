import axios from "axios";

const globalPlanets = async (state) => {
    const peticion = await axios.get(`https://swapi.dev/api/planets`)
    state(peticion.data.results)
}

const unicoPlanet = async (id) => {
    const peticion = await fetch(`https://swapi.dev/api/planets/${id}/`)
    const dato = peticion.json()
    return dato
}

export {
    globalPlanets,
    unicoPlanet
}