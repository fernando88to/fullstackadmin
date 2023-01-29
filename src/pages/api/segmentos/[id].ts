import type {NextApiRequest, NextApiResponse} from 'next'
import {mongoServiceSegmentos} from "@/databases/mongoService";
import {getSession} from "next-auth/react"
import {withAuthenticatedSession} from '@/core/withAuthenticatedSession'
import {Segmento} from "@/types/Segmento";
import {useGetSegmentoByCodigo} from "@/hooks/segmentoHooks";

export default withAuthenticatedSession(handler)


export  async function handler(req: NextApiRequest, res: NextApiResponse<Segmento>) {

    const {method} = req;
    // const session = await getSession({req});
    const {id} = req.query;
    switch (method) {

        case 'GET':
            // const segmentosList = await mongoServiceSegmentos.getAll()
            const segmentoInstance = {
                codigo:1,
                resumo:"resumo slkjseljfs",
                nome:"Segmento de alguma voisa"
            } as Segmento;
            res.status(200).json(segmentoInstance);
            break


        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}
