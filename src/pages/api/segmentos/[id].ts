import type {NextApiRequest, NextApiResponse} from 'next'
import {mongoServiceSegmentos} from "@/databases/mongoService";
import {getSession} from "next-auth/react"
import {withAuthenticatedSession} from '@/core/withAuthenticatedSession'
import {Segmento} from "@/types/Segmento";
import {useGetSegmentoByCodigo} from "@/hooks/segmentoHooks";
import {sleep} from "@/core/Sleep";

export default withAuthenticatedSession(handler)


export  async function handler(req: NextApiRequest, res: NextApiResponse<Segmento | {}>) {
    const {method} = req;
    const {id} = req.query;
    switch (method) {
        case 'GET':
            sleep(5000);
            const segmentoInstance = await mongoServiceSegmentos.getSegmentoByCodigo(Number(id));
            if(segmentoInstance){
                res.status(200).json(segmentoInstance);
                return;
            }
            res.status(404).json({});
            break;
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}
