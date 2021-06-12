import axios from 'axios';
import { baseUrl } from '../config.json';

const likedPhotosUrl = `${baseUrl}/likedPhotos`;

const addLikedPhoto = (likedPhoto) => axios
    .post(`${likedPhotosUrl}`, likedPhoto)
    .catch((err) => console.warn(err))

const getSingleLikedPhoto = (fbId, photoId) => new Promise((resolve, reject) => axios
    .get(`${likedPhotosUrl}/${fbId}&${photoId}`)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err))
);

const getByFbId = (fbId) => new Promise((resolve, reject) => axios
    .get(`${likedPhotosUrl}/${fbId}`)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err))
)

export default { addLikedPhoto, getSingleLikedPhoto, getByFbId }