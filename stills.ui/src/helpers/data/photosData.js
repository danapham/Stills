/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { baseUrl } from '../config.json';

const photosUrl = `${baseUrl}/photos`;

const addPhoto = (photo) => axios
    .post(`${photosUrl}`)
    .catch((err) => console.warn(err));

const getAllPhotos = () => new Promise((resolve, reject) => axios
    .get(`${photosUrl}`)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err))
);

const getById = (id) => new Promise((resolve, reject) => axios
.get(`${photosUrl}/${id}`)
.then((res) => resolve(res.data))
.catch((err) => reject(err))
);

const getByFbId = (fbId) => new Promise((resolve, reject) => axios
.get(`${photosUrl}/${fbId}`)
.then((res) => resolve(res.data))
.catch((err) => reject(err))
);

const getTopVoted = () => new Promise((resolve, reject) => axios
.get(`${photosUrl}/topVoted`)
.then((res) => resolve(res.data))
.catch((err) => reject(err))
);

const updatePhoto = (id) => axios
    .put(`${photosUrl}/${id}`)
    .catch(err => console.warn(err))

export default { addPhoto, getAllPhotos, getById, getByFbId, getTopVoted, updatePhoto }