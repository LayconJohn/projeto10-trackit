import axios from 'axios';

function cadastrarUser(body) {
    const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
    return promisse
}

function loginUser(body) {
    const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
    return promisse
}

function getHabitos(token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
    return promisse
}

function postHabito(token, body) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);
    return promisse
}

function deleteHabito(token, idHabito) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}`, config)
    return promisse
}

function getHabitosDia(token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
    return promisse
}

function checkHabito(token, idHabito) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}/check`, null, config);
    return promisse
}

function uncheckHabito(token, idHabito) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}/uncheck`, null, config);
    return promisse
}

export {cadastrarUser, loginUser, getHabitos, postHabito, deleteHabito, getHabitosDia, checkHabito, uncheckHabito}