import axios from "axios";

const globalPerson = async (state) => {
    const peticion = await axios.get(`https://swapi.dev/api/people`)
    state(peticion.data.results)
}

const unicoPerson = async (name, state) =>{
    const peticion = await axios.get(`https://swapi.dev/api/people/${name}`)
    state(peticion.data)
}

export {
    globalPerson,
    unicoPerson
}