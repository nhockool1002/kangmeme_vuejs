import axios from 'axios'

const axiosIntance = axios.create({
    baseURL: 'http://api-meme-zendvn-01.herokuapp.com/api/',
    headers: {
        'accept' : 'application/json'
    }
});

export default axiosIntance;