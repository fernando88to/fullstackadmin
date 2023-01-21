import {Layout} from "../components/layout";
import {Header} from "../components/Header";
import React from "react";
import {Segmento} from "../types/Segmento";
import {useGetAllSegmentos} from "../clients/clientBackendSWR";
import {CircularProgress} from "@mui/material";


type Props = {
    data: Segmento[]
};

const ListSegmento: React.FC<Props> = (props) => {
    return (
        <ul>
            {props.data.map(segmento => {
                return (<li key={segmento.codigo}>
                    {segmento.nome}
                </li>);
            })}

        </ul>
    );
}


export default function Page() {

    const { data, error } = useGetAllSegmentos();


    return (
        <Layout>
            <Header title="Segmentos" subTitle="Segue abaixo os segmentos dos cartórios extra judiciais juntamente
            com um resumo"/>
            {error && <div>Failed to load </div>  }
            {!data && <CircularProgress /> }
            {data && <ListSegmento data={data}></ListSegmento>  }


        </Layout>
    );
}