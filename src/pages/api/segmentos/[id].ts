import type {NextApiRequest, NextApiResponse} from 'next'
import {mongoServiceSegmentos} from "@/databases/mongoService";
import {getSession} from "next-auth/react"
import {withAuthenticatedSession} from '@/core/withAuthenticatedSession'
import {Segmento} from "@/types/Segmento";
import {useGetSegmentoByCodigo} from "@/hooks/segmentoHooks";
import {sleep} from "@/core/Sleep";

export default withAuthenticatedSession(handler)


export async function handler(req: NextApiRequest, res: NextApiResponse<Segmento | {}>) {
    const {method} = req;
    const {id} = req.query;
    switch (method) {
        case 'GET':
            const segmentoInstance = await mongoServiceSegmentos.getSegmentoByCodigo(Number(id));
            if (segmentoInstance) {
                res.status(200).json(segmentoInstance);
                return;
            }
            res.status(404).json({});
            break;
        case 'PUT':
            const segmentoByUser: Segmento = req.body as Segmento;
            console.log(segmentoByUser);
            res.status(204).json(segmentoByUser);
            break;

        default:
            res.setHeader('Allow', ['GET','PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}
