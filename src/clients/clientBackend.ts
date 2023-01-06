import axios, {AxiosInstance} from "axios";
import {Product} from "../types/Product";


// const ENDERECO_BACKEND = process.env.NEXT_PUBLIC_ENDERECO_BACKEND;
const ENDERECO_BACKEND = "/api/";
const APPLICATION_JSON = 'application/json';
const instance: AxiosInstance = axios.create({
    baseURL: ENDERECO_BACKEND,
    timeout: 1000,
    withCredentials: true

});

const METHOD = {
    GET: 'GET',
    POST: 'POST'
}

async function chamarAxios(url: string, metodo_utilizado: string, dados: any): Promise<any> {
    let config = {
        headers: {
            ACCEPT: APPLICATION_JSON
        }
    };
    if (metodo_utilizado === METHOD.GET) {
        return await instance.get(url, config);
    }
    if (metodo_utilizado === METHOD.POST) {
        return await instance.post(url, config, dados);
    }

}


export const clientBackend = {
    listAllProducts: async (): Promise<Product[]> => {
        const retornoApi = await chamarAxios('/products', METHOD.GET, {}, );
        if(retornoApi.data == undefined){
            return [];
        }
        return retornoApi.data as Product[];
    }
}