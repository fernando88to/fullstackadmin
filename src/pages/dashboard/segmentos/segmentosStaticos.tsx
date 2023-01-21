import {LayoutDashboard} from "@/components/layout";
import {Header} from "@/components/Header";
import React from "react";
import {Segmento} from "@/types/Segmento";
import {GetStaticProps} from "next";
import {mongoServiceSegmentos} from "../../../databases/mongoService";


type Props = {
    data: Segmento[]
};
export const getStaticProps: GetStaticProps = async (context) => {

    let allSegmentos: Segmento[] = await mongoServiceSegmentos.getAll();
    return {
        props: {
            data:JSON.parse(JSON.stringify(allSegmentos))
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 30, // In seconds
    }
}
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


export default function Page(props:Props) {



    return (
        <LayoutDashboard>
            <Header title="Segmentos" subTitle="Segue abaixo os segmentos dos cartórios extra judiciais juntamente
            com um resumo"/>
             <ListSegmento data={props.data}></ListSegmento>

        </LayoutDashboard>
    );
}