import {useFetch} from "@/clients/clientBackendSWR";

export const useGetAllSegmentos = () => {
    const {data, error} = useFetch('/segmentos');
    return {data, error};
};



