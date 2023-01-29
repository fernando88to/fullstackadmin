import React, {useEffect, useRef} from "react";
import {LayoutDashboard} from "@/components/layout";
import {Header} from "@/components/Header";
import {Segmento} from "@/types/Segmento";
import {useGetAllSegmentos} from "@/hooks/segmentoHooks";
import {Container} from "@/components/Container";
import {useRouter} from "next/router";
import {CircularIndeterminate} from "@/components/Progress";
import FormControl from "@mui/material/FormControl";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {BotaoVoltar} from "@/components/navegation/BotaoVoltar";
import Grid2 from "@mui/material/Unstable_Grid2";


type Props = {
    data: Segmento[]
};

const FormularioEdicaoSegmento: React.FC<{ segmento: Segmento }> = ({segmento}) => {
    return (
        <>

            <Grid2 xs={12} md={6} >
                <TextField variant="outlined" id="codigo" aria-describedby="my-helper-text"
                           label="Código"
                           defaultValue={segmento.codigo}
                           InputProps={{
                               readOnly: true,
                           }}
                           fullWidth
                           helperText="Aqui é o código do Segmento, não é possível atualizar esse campo"/>


            </Grid2>
            <Grid2 xs={12} md={6} >
                <TextField variant="outlined" id="codigo" aria-describedby="my-helper-text"
                           label="Código"
                           defaultValue={segmento.nome}
                           fullWidth
                    /*inputRef={input => input && input.focus()}*/
                           autoFocus
                           helperText="Aqui é o código do Segmento, não é possível atualizar esse campo"/>

            </Grid2>
            <Grid2 xs={12} md={12} >
                <TextField variant="outlined" id="codigo" aria-describedby="my-helper-text"
                           label="Código"
                           defaultValue={segmento.nome}
                           fullWidth
                           multiline
                           rows={10}
                           maxRows={15}
                           helperText="Aqui é o código do Segmento, não é possível atualizar esse campo"/>

            </Grid2>


        </>



    );
}

export default function Page() {

    const router = useRouter();
    const {id} = router.query;
    const idNumber = Number(id);
    console.log(id, idNumber);


    const {data, error} = useGetAllSegmentos();
    const segmento = {
        codigo: 1,
        nome: 'segmento',
        resumo: 'sfsdfdf sadfadfa '
    } as Segmento;


    return (
        <LayoutDashboard>
            <Header title="Segmentos" subTitle="Segue abaixo os segmentos dos cartórios extra judiciais juntamente
            com um resumo"/>
            <Container>
                <Grid2 xs={12} container justifyContent="flex-end">
                    <BotaoVoltar url="/dashboard/segmentos/segmentosSwr"/>
                </Grid2>

                {error && <div>Failed to load </div>}
                {!data && <CircularIndeterminate/>}
                {data && <FormularioEdicaoSegmento segmento={segmento}/>}

            </Container>


        </LayoutDashboard>
    );
}