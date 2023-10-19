import axios from 'axios';

const SKATER_BASE_API_URL = 'http://localhost:8083/api/v1/skaters';

export function getAllSkaters(){
    return axios.get(SKATER_BASE_API_URL);
}

export function createSkater(skater){
    return axios.post(SKATER_BASE_API_URL,skater);
}

export function getById(id){
    return axios.get(`${SKATER_BASE_API_URL}/${id}`);
}

export function getByTeam(team){
    return axios.get(`${SKATER_BASE_API_URL}/${team}`);
}

export function updateSkater(id, skater){
    return axios.put(`${SKATER_BASE_API_URL}/${id}`, skater);
}

export function deleteSkater(id){
    return axios.delete(`${SKATER_BASE_API_URL}/${id}`);
}