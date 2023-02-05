import {Segmento} from "@/types/Segmento";

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
    }
}