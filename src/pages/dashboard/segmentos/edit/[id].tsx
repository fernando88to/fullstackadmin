import React from "react";
import {LayoutDashboard} from "@/components/layout";
import {Header} from "@/components/Header";
import {Segmento} from "@/types/Segmento";
import {useGetAllSegmentos, useGetSegmentoByCodigo} from "@/hooks/segmentoHooks";
import {Container} from "@/components/Container";
import {useRouter} from "next/router";
import {CircularIndeterminate} from "@/components/Progress";
import {TextField} from "@mui/material";
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
                           value={segmento.codigo}
                           InputProps={{
                               readOnly: true,
                           }}
                           fullWidth
                           helperText="Aqui é o código do Segmento, não é possível atualizar esse campo"/>


            </Grid2>
            <Grid2 xs={12} md={6} >
                <TextField variant="outlined" id="codigo" aria-describedby="my-helper-text"
                           label="Código"
                           value={segmento.nome}
                           fullWidth
                    /*inputRef={input => input && input.focus()}*/
                           autoFocus
                           helperText="Aqui é o código do Segmento, não é possível atualizar esse campo"/>

            </Grid2>
            <Grid2 xs={12} md={12} >
                <TextField variant="outlined" id="codigo" aria-describedby="my-helper-text"
                           label="Código"
                           value={segmento.resumo}
                           fullWidth
                           multiline
                           rows={10}
                           helperText="Aqui é o código do Segmento, não é possível atualizar esse campo"/>

            </Grid2>


        </>



    );
}

export default function Page() {

    const router = useRouter();
    const {id} = router.query;
    const {data, error} = useGetSegmentoByCodigo(Number(id));



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
                {data && <FormularioEdicaoSegmento segmento={data}/>}

            </Container>


        </LayoutDashboard>
    );
}