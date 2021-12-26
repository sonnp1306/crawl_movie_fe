import axiosClient from './axiosClient';

// http://localhost:4000/api
const movieApi = {
    getDataByUrl: (data) => {
        console.log(data)
        const url = "/movies/url";
        return axiosClient.post(url, data)
    },
}

export default movieApi;