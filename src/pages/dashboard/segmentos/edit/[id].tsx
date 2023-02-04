import React, {useRef, useState} from "react";
import {LayoutDashboard} from "@/components/layout";
import {Header} from "@/components/Header";
import {Segmento} from "@/types/Segmento";
import {useGetSegmentoByCodigo} from "@/hooks/segmentoHooks";
import {Container} from "@/components/Container";
import {useRouter} from "next/router";
import {CircularIndeterminate} from "@/components/Progress";
import {Alert, Stack, TextField} from "@mui/material";
import {BotaoVoltar} from "@/components/navegation/BotaoVoltar";
import Grid2 from "@mui/material/Unstable_Grid2";
import {BoxButtonRight} from "@/components/BoxButtonRight";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import {width} from "@mui/system";


type Props = {
    data: Segmento[]
};

const FormularioEdicaoSegmento: React.FC<{ segmento: Segmento }> = ({segmento}) => {
    const codigoInput = useRef<HTMLInputElement>(null);
    const nomeInput = useRef<HTMLInputElement>(null);
    const resumoInput = useRef<HTMLInputElement>(null);
    const [errosList, setErrosList] = useState<string[]>([]);

    const validarCampos = (segmento: Segmento) => {
        let erros: string[] = [];
        if (!segmento.codigo) {
            erros.push('Informe o campo codigo');
        }
        if (!segmento.nome) {
            erros.push('Informe o campo nome');
        }
        if (!segmento.resumo) {
            erros.push('Informe o campo resumo');
        }
        setErrosList(erros);
    }
    const handleSubmitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const codigo = Number(codigoInput.current?.value);
        const nome = nomeInput.current?.value || '';
        const resumo = resumoInput.current?.value || '';
        let segmento = {codigo: codigo, nome: nome, resumo: resumo} as Segmento;
        validarCampos(segmento);
    }

    return (
        <>
            <Grid2 xs={12} md={12}>
                <Stack sx={{width: '100%'}} spacing={2}>
                    {errosList.map((erro) => {
                        return (<Alert key={erro} severity="error">{erro}</Alert>);
                    })}
                </Stack>
            </Grid2>

            <Grid2 xs={12} md={6}>
                <TextField variant="outlined" id="codigo" aria-describedby="my-helper-text"
                           label="Código"
                           name="codigo"
                           inputRef={codigoInput}
                           value={segmento.codigo}
                           InputProps={{
                               readOnly: true,
                           }}
                           fullWidth
                           helperText="Código de referência, não é possível atualizar esse campo"/>


            </Grid2>
            <Grid2 xs={12} md={6}>
                <TextField variant="outlined" id="nome" name="nome" aria-describedby="my-helper-text"
                           label="Nome"
                           inputRef={nomeInput}
                           defaultValue={segmento.nome}
                           fullWidth
                           autoFocus
                           helperText="Nome do segmento "/>

            </Grid2>
            <Grid2 xs={12} md={12}>
                <TextField variant="outlined" id="resumo" name="resumo" aria-describedby="my-helper-text"
                           label="Resumo"
                           defaultValue={segmento.resumo}
                           fullWidth
                           multiline
                           rows={10}
                           helperText="Resumo breve sobre o segmento"/>
            </Grid2>
            <BoxButtonRight>
                <Button variant="contained"
                        onClick={handleSubmitForm}
                        startIcon={<SaveIcon/>}>atualizar</Button>
            </BoxButtonRight>
        </>


    );
}

export default function Page() {

    const router = useRouter();
    const {id} = router.query;
    const {data, error} = useGetSegmentoByCodigo(Number(id));


    return (
        <LayoutDashboard itemMenuSelected={11}>
            <Header title="Segmentos" subTitle="Segue abaixo os segmentos dos cartórios extra judiciais juntamente
            com um resumo"/>
            <Container>

                <BoxButtonRight>
                    <BotaoVoltar url="/dashboard/segmentos/segmentosSwr"/>
                </BoxButtonRight>

                {error && <div>Failed to load </div>}
                {!data && <CircularIndeterminate/>}
                {data && <FormularioEdicaoSegmento segmento={data}/>}

            </Container>


        </LayoutDashboard>
    );
}