import type {NextApiRequest, NextApiResponse} from 'next'
import moment from 'moment';
import {mongoServiceProducts, mongoServiceSegmentos} from "../../databases/mongoService";
import {sleep} from "../../core/Sleep";
import {CheckAppEnvironmentDevelopemnt} from "../../core/AppEnvironment";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const {method} = req;


    switch (method) {

        case 'GET':
            if (CheckAppEnvironmentDevelopemnt()) {
                sleep(3000);
            }
            const segmentosList = await mongoServiceSegmentos.getAll()
            res.status(200).json(segmentosList);
            break


        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}
