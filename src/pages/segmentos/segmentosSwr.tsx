import React from "react";
import {LayoutDashboard} from "@/components/layout";
import {Header} from "@/components/Header";
import {Segmento} from "@/types/Segmento";
import {useGetAllSegmentos} from "@/hooks/segmentoHooks";
import {CircularIndeterminate} from "@/components/Progress";
import Grid2 from "@mui/material/Unstable_Grid2";
import {CardItem} from "@/components/CardItem";
import {Container} from "@/components/Container";


type Props = {
    data: Segmento[]
};

const ListSegmento: React.FC<Props> = (props) => {
    return (
        <>
            {props.data.map(segmento => {
            return (
                <Grid2 key={segmento.codigo} xs={12} sm={4}>
                    <CardItem title={segmento.nome} text={segmento.resumo}/>
                </Grid2>
            );
        })}
        </>
    );
}


export default function Page() {

    const {data, error} = useGetAllSegmentos();


    return (
        <LayoutDashboard>
            <Header title="Segmentos" subTitle="Segue abaixo os segmentos dos cartórios extra judiciais juntamente
            com um resumo"/>
            <Container>
                {error && <div>Failed to load </div>}
                {!data && <CircularIndeterminate/>}
                {data && <ListSegmento data={data}/>}
            </Container>


        </LayoutDashboard>
    );
}