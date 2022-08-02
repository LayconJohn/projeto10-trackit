import axios from 'axios';

function cadastrarUser(body) {
    const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
    return promisse
}

export {cadastrarUser}