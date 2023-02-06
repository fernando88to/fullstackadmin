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
    it('Quando todos os campos estão preenchidos a propriedade de erros deve ser vazia', () => {
        let segmento: Segmento = {nome: 'Protesto', resumo: 'Resumo do resumo', codigo: 1};
        segmentoService.validate(segmento);
        expect(segmento.errosList?.length).toBe(0);
    });
})

describe('Atualização de um registro', () => {
    it('Quando tiver preenchidos todos os campos deve retornar true', () => {
        let segmento: Segmento = {codigo: 1, resumo: 'Resumo', nome: 'Fernando'};
        let retorno: boolean = segmentoService.update(segmento);
        expect(retorno).toBe(true);
    });
    it('Quando tiver erro na validação deve retonar faço', () => {
        let segmento: Segmento = {codigo: 1, resumo: '', nome: 'Fernando'};
        let retorno: boolean = segmentoService.update(segmento);
        expect(retorno).toBe(false);
    });
});

describe('Segmento', () => {
    it('quando tiver registros deve retornar todos os registros', async() => {
        let item1 = {codigo: 1, resumo: 'resumo', nome: 'nome'};
        let item2 = {codigo: 2, resumo: 'resumo2', nome: 'nome2'};
        segmentoService.list = jest.fn().mockImplementation(  () => {
            let segmentoList: Segmento[] = [];
            segmentoList.push(item1);
            segmentoList.push(item2);
            return segmentoList;
        });
        let retorno: Segmento[] = await segmentoService.list();
        expect(retorno.length).toBe(2);
        expect(retorno[0]).toBe(item1);
        expect(retorno[1]).toBe(item2);
    });

    it('quando tiver não tiver registros dever retonar um array vazio', async() => {
        segmentoService.list = jest.fn().mockImplementation(  () => {
            return [];
        });
        let retorno: Segmento[] = await segmentoService.list();
        expect(retorno.length).toBe(0);

    });

    it('quando pesquisar por um registro deve retonar um registro', async() => {
        let item1 = {codigo: 1, resumo: 'resumo', nome: 'nome'};
        segmentoService.getSegmentoByCodigo = jest.fn().mockImplementation(  () => {
            return item1;
        });
        let retorno = await segmentoService.getSegmentoByCodigo(1);
        expect(retorno).toBe(item1);

    });

    it('quando pesquisar por um registro qua não exite deve retonar nulo', async() => {
        // let item1 = {codigo: 1, resumo: 'resumo', nome: 'nome'};
        segmentoService.getSegmentoByCodigo = jest.fn().mockImplementation(  () => {
            return null;
        });
        let retorno = await segmentoService.getSegmentoByCodigo(1);
        expect(retorno).toBeNull();

    });

});
