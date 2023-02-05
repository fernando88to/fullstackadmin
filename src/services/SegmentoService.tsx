import {Segmento} from "@/types/Segmento";

export const SegmentoService = {
    update: (segmento: Segmento) => {

    },

    validate: (segmento: Segmento) => {
        segmento.errosList = []
        if (segmento.nome) {
            segmento.errosList.push({attribute: 'nome', errorMessage: 'Informe o campo nome'});
        }
        if (segmento.resumo) {
            segmento.errosList.push({attribute: 'nome', errorMessage: 'Informe o campo resumo'});
        }
    }
}