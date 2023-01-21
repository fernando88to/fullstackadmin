//https://codesandbox.io/s/swr-axios-forked-r4loo6?file=/src/App.tsx
import {chamarAxios} from "./clientBackend";
import useSWR from "swr";
import {METHOD} from "../types/MethodHTTP";


function useFetch<Data = any, Error = any>(url: string) {
    const {data, error} = useSWR<Data, Error>(url, async url => {
        const response = await chamarAxios(url, METHOD.GET, {},);
        return response.data;
    })

    return {data, error}
}

export const useGetAllSegmentos = () => {
    const {data, error} = useFetch('/segmentos');

    return {data, error};
};