import {Segmento} from "@/types/Segmento";
import {mongoServiceSegmentos} from "@/databases/mongoService";

export const segmentoService = {
    update: (segmento: Segmento): boolean => {
        segmentoService.validate(segmento);
        //check se o array não está vazio
        if (segmento.errosList?.length) {
            return false;
        }
        return true;
    },

    validate: (segmento: Segmento) => {
        segmento.errosList = []
        if (!segmento.nome) {
            segmento.errosList.push({attribute: 'nome', errorMessage: 'Informe o campo nome'});
        }
        if (!segmento.resumo) {
            segmento.errosList.push({attribute: 'nome', errorMessage: 'Informe o campo resumo'});
        }
    },
    list: async (): Promise<Segmento[]> => {
        return await mongoServiceSegmentos.getAll();
    },
    getSegmentoByCodigo: async (codigo: number): Promise<Segmento | null> => {
        return await mongoServiceSegmentos.getSegmentoByCodigo(codigo);
    }
}