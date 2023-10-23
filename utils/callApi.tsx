import axios from 'axios';

export default function callApi(endpoint: any, q: any, method: any, url: any) {
    return axios({
        method: method,
        url: url,
        params: {
            q: q,
        },
    });
}
