import axios, {AxiosInstance} from "axios";
import {Product} from "../types/Product";
import {VideoType} from "../types/VideoType";
import {Segmento} from "../types/Segmento";
import {METHOD} from "../types/MethodHTTP";
import {MenuItemJSON} from "@/types/MenuItemTypes";


// const ENDERECO_BACKEND = process.env.NEXT_PUBLIC_ENDERECO_BACKEND;
const ENDERECO_BACKEND = "/api/";
const APPLICATION_JSON = 'application/json';
const instance: AxiosInstance = axios.create({
    baseURL: ENDERECO_BACKEND,
    // timeout: 1000,
    withCredentials: true

});


export async function chamarAxios(url: string, metodo_utilizado: string, dados: any): Promise<any> {
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
        const retornoApi = await chamarAxios('/products', METHOD.GET, {},);
        if (retornoApi.data == undefined) {
            return [];
        }
        return retornoApi.data as Product[];
    },
    listAllVideo: async (): Promise<VideoType[]> => {
        const retornoApi = await chamarAxios('/videos', METHOD.GET, {},);
        if (retornoApi.data == undefined) {
            return [];
        }
        return retornoApi.data as VideoType[];
    },
    listAllSegmentos: async (): Promise<Segmento[]> => {
        const retornoApi = await chamarAxios('/segmentos', METHOD.GET, {},);
        if (retornoApi.data == undefined) {
            return [];
        }
        return retornoApi.data as Segmento[];
    }

}


export const clientProducts = {
    listAllProducts: async (): Promise<Product[]> => {
        const retornoApi = await chamarAxios('/products', METHOD.GET, {},);
        if (retornoApi.data == undefined) {
            return [];
        }
        return retornoApi.data as Product[];
    }
}


export const clientMenu = {
    getAllMenuItemByUser: async (): Promise<MenuItemJSON[]> => {
        const retornoApi = await chamarAxios('/menu', METHOD.GET, {});
        if (retornoApi.data == undefined) {
            return [];
        }
        return retornoApi.data as MenuItemJSON[];
    }
}


