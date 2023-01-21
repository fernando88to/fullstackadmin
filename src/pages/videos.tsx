import * as React from 'react';
import {useEffect, useState} from 'react';
import {LayoutDashboard} from "../components/layout";
import {clientBackend} from "../clients/clientBackend";
import {Product} from "../types/Product";
import {VideoType} from "../types/VideoType";

interface IpropsListVideo {
    data?: VideoType[]
}

const ListVideo = ({data}: IpropsListVideo) => {
    {
        return (
            <>
                {data && data.map((item) => {
                    return (
                        <p key={item.title}>
                            {item.title}
                        </p>

                    );
                })}
            </>
        );

    }

}

export default function Page() {
    const [data, setData] = useState<VideoType[]>();
    // set loading to true initially
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const dataFetch = async () => {
            const videosList = await clientBackend.listAllVideo();

            // set state when the data received
            setData(videosList);
            setIsLoading(false)
        };

        dataFetch();
    }, [])


    return (
        <LayoutDashboard>
            <p>
                {isLoading ? <p>carregando </p> : <ListVideo data={data}/>}
            </p>
        </LayoutDashboard>
    );
}