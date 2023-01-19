import {Layout} from "../components/layout";
import {Header} from "../components/Header";
import {useEffect, useState} from "react";
import {Segmento} from "../types/Segmento";
import {clientBackend} from "../clients/clientBackend";

export default function Page() {
    const [data, setData] = useState<Segmento[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dataFetch = async () => {
            let allSegmentos: Segmento[] = await clientBackend.listAllSegmentos();
            console.log(allSegmentos);
            setData(allSegmentos);
            setLoading(false);
        }
        dataFetch();
    }, [])
    return (
        <Layout>
            <Header title="Segmentos" subTitle="Segue abaixo os segmentos dos cartórios extra judiciais juntamente
            com um resumo"/>
            {!loading && <ul>
                {data.map(segmento => {
                    return (<li key={segmento.codigo}>
                        {segmento.nome}
                    </li>);
                })}

            </ul>
            }

        </Layout>
    );
}