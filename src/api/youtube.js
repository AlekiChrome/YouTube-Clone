import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;

// const request = axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3/',
//     params: {
//         part: 'snippet',
//         maxResults: 10,
//         key:  KEY,
//     },

//     headers: {}

// })
const result = async (input) => {
    const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=${KEY}`)
    return data.items;
}

const resultApi = {
    result,
}


export default resultApi;
