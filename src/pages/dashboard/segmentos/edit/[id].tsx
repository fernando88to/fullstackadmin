import React, {useEffect, useState} from "react";
import {LayoutDashboard} from "@/components/layout";
import {Header} from "@/components/Header";
import {Segmento} from "@/types/Segmento";
import {useGetAllSegmentos} from "@/hooks/segmentoHooks";
import {Container} from "@/components/Container";
import {useRouter} from "next/router";
import {clientBackend} from "@/clients/clientBackend";
import {CircularIndeterminate} from "@/components/Progress";


type Props = {
    data: Segmento[]
};


export default function Page() {

    const router = useRouter();
    const { id } = router.query;



    const {data, error} = useGetAllSegmentos();



    return (
        <LayoutDashboard>
            <Header title="Segmentos" subTitle="Segue abaixo os segmentos dos cartórios extra judiciais juntamente
            com um resumo"/>
            <Container>
                {error && <div>Failed to load </div>}
                {!data && <CircularIndeterminate/>}
                {data && <p>carregou {id}</p>}

            </Container>


        </LayoutDashboard>
    );
}