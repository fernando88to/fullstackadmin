import type {NextApiRequest, NextApiResponse} from 'next'
import {sleep} from "../../core/Sleep";
import {mongoService} from "../../databases/mongoService";
import {VideoType} from "../../types/VideoType";


export default async function handler(req: NextApiRequest, res: NextApiResponse<VideoType[]>) {
    sleep(2000);
    const videosList = await mongoService.getAllVideos()
    res.status(200).json(videosList);


}
