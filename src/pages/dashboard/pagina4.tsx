import * as React from 'react';
import {LayoutDashboard} from "@/components/layout";
import {GetServerSideProps} from "next";
import {mongoService} from "../../databases/mongoService";
import {VideoType} from "@/types/VideoType";

export const getServerSideProps: GetServerSideProps = async () => {

    const videosList: VideoType[] = await mongoService.getAllVideos();

    return {
        props: {
            videosList: JSON.parse(JSON.stringify(videosList))
        },
    }
};

interface Iprops {
    videosList: VideoType[]
}

export default function Page({videosList}: Iprops) {


    return (
        <LayoutDashboard itemMenuSelected={1}>
            <p>
                {videosList.length}
            </p>
        </LayoutDashboard>
    );
}