import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-a0438.firebaseio.com/'
})

export default instance;