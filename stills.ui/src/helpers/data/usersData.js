import axios from 'axios';
import { baseUrl } from '../config.json';

const usersUrl = `${baseUrl}/users`;

const addUser = (user) => axios
    .post(`${usersUrl}`, user)
    .catch(err => console.warn(err));

const getByFbId = (fbId) => new Promise((resolve, reject) => axios
    .get(`${usersUrl}/${fbId}`)
    .then((res) => resolve(res.data[0]))
    .catch((err) => reject(err))
);

const updateUser = (fbId, newUser) => axios
    .put(`${usersUrl}/${fbId}`, newUser)
    .catch((err) => console.warn(err));

export default { addUser, getByFbId, updateUser }