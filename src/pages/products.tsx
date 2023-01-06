import * as React from 'react';
import {Layout} from "../components/layout";
import {GetServerSideProps} from "next";
import {mongoService} from "../databases/mongoService";
import {VideoType} from "../types/VideoType";
import {useEffect, useState} from "react";
import {clientBackend} from "../clients/clientBackend";
import {Product} from "../types/Product";


export default function Page() {
    const [data, setData] = useState<Product[]>();

    useEffect(() => {
        const dataFetch = async () => {
            const products = await clientBackend.listAllProducts();

            // set state when the data received
            setData(products);
        };

        dataFetch();
    }, [])


    return (
        <Layout>
            <p>
                {data ? <p>carregando </p> : <ResultsTable results={data} />}
            </p>
        </Layout>
    );
}