import '@testing-library/jest-dom'
import {mongoServiceSegmentos} from "@/databases/mongoService";
import {closeConnection} from "@/databases/mongodbConnection";


describe('Pesquisa', () => {
    afterEach(async () => {
        await closeConnection()
    });

    it('quando pesquisar por um registro qua não exite deve retonar nulo2', async () => {
        let retorno = await mongoServiceSegmentos.getSegmentoByCodigo(1);
        expect(retorno?.nome).toBe('Tabelionatos de Protesto');

    });

});
