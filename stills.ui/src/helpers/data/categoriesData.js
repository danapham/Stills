import axios from 'axios';
import { baseUrl } from '../config.json';

const categoriesUrl = `${baseUrl}/categories`;

const getAllCategories = () => new Promise((resolve, reject) => axios
    .get(`${categoriesUrl}`)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err))
);

export default { getAllCategories }