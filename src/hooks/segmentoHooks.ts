import {useFetch} from "@/clients/clientBackendSWR";

export const useGetAllSegmentos = () => {
    const {data, error} = useFetch('/segmentos');
    return {data, error};
};
export const useGetSegmentoByCodigo = (codigo:number) => {
    const {data, error} = useFetch(`/segmentos/${codigo}`);
    return {data, error};
}


