import '@testing-library/jest-dom'
import {segmentoService} from "@/services/SegmentoService";
import {Segmento} from "@/types/Segmento";

describe('Validacao', () => {
    it('Quando os campos são vazios deve retornar um objeto com os erros', () => {
        let segmento: Segmento = {nome: '', resumo: '', codigo: 1};
        segmentoService.validate(segmento);
        expect(2).toBe(segmento.errosList?.length);
        expect('Informe o campo nome').toBe(segmento.errosList && segmento.errosList[0].errorMessage);
        expect('Informe o campo resumo').toBe(segmento.errosList && segmento.errosList[1].errorMessage);
    });
})