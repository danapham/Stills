/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { baseUrl } from '../config.json';

const usersUrl = `${baseUrl}/users`;

const addUser = (user) => axios
    .post(`${usersUrl}`)
    .catch(err => console.warn(err));

const getByFbId = (fbId) => new Promise((resolve, reject) => axios
    .get(`${usersUrl}/${fbId}`)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err))
);

const updateUser = (fbId, newUser) => axios
    .put(`${usersUrl}/${fbId}`, newUser)
    .catch((err) => console.warn(err));

export default { addUser, getByFbId, updateUser }