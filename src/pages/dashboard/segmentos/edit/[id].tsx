import React from "react";
import {LayoutDashboard} from "@/components/layout";
import {Header} from "@/components/Header";
import {Segmento} from "@/types/Segmento";
import {useGetSegmentoByCodigo} from "@/hooks/segmentoHooks";
import {Container} from "@/components/Container";
import {useRouter} from "next/router";
import {CircularIndeterminate} from "@/components/Progress";
import {TextField} from "@mui/material";
import {BotaoVoltar} from "@/components/navegation/BotaoVoltar";
import Grid2 from "@mui/material/Unstable_Grid2";
import {BoxButtonRight} from "@/components/BoxButtonRight";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';


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
                           helperText="Código de referência, não é possível atualizar esse campo"/>


            </Grid2>
            <Grid2 xs={12} md={6}>
                <TextField variant="outlined" id="codigo" aria-describedby="my-helper-text"
                           label="Nome"
                           value={segmento.nome}
                           fullWidth
                           autoFocus
                           helperText="Nome do segmento "/>

            </Grid2>
            <Grid2 xs={12} md={12} >
                <TextField variant="outlined" id="codigo" aria-describedby="my-helper-text"
                           label="Resumo"
                           value={segmento.resumo}
                           fullWidth
                           multiline
                           rows={10}
                           helperText="Resumo breve sobre o segmento"/>
            </Grid2>
            <BoxButtonRight>
                <Button variant="contained"
                        startIcon={<SaveIcon />}>atualizar</Button>
            </BoxButtonRight>


        </>



    );
}

export default function Page() {

    const router = useRouter();
    const {id} = router.query;
    const {data, error} = useGetSegmentoByCodigo(Number(id));



    return (
        <LayoutDashboard itemMenuSelected={9}>
            <Header title="Segmentos" subTitle="Segue abaixo os segmentos dos cartórios extra judiciais juntamente
            com um resumo"/>
            <Container>
                {/*<Grid2 xs={12} container justifyContent="flex-end">
                    <BotaoVoltar url="/dashboard/segmentos/segmentosSwr"/>
                </Grid2>*/}
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