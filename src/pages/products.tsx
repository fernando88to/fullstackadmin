import * as React from 'react';
import {useEffect, useState} from 'react';
import {Layout} from "../components/layout";
import {clientProducts} from "../clients/clientBackend";
import {Product} from "../types/Product";

interface IpropsListVideo {
    data?: Product[]
}

const ListVideo = ({data}: IpropsListVideo) => {
    {
        return (
            <>
                {data && data.map((item) => {
                    return (
                        <p key={item.name}>
                            {item.name}
                        </p>

                    );
                })}
            </>
        );

    }

}

export default function Page() {
    const [data, setData] = useState<Product[]>();
    // set loading to true initially
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const dataFetch = async () => {
            const videosList = await clientProducts.listAllProducts();

            // set state when the data received
            setData(videosList);
            setIsLoading(false)
        };

        dataFetch();
    }, [])


    return (
        <Layout>
            <p>
                {isLoading ? <p>carregando </p> : <ListVideo data={data}/>}
            </p>
        </Layout>
    );
}