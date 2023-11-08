import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path: any) => {
    const reponse = await httpRequest.get(path);
    return reponse.data;
};
export default httpRequest;
