import type {NextApiRequest, NextApiResponse} from 'next'
import {mongoServiceSegmentos} from "@/databases/mongoService";
import {sleep} from "@/core/Sleep";
import {CheckAppEnvironmentDevelopemnt} from "@/core/AppEnvironment";
import {getSession} from "next-auth/react"
import {withAuthenticatedSession} from '@/core/withAuthenticatedSession'

export default withAuthenticatedSession(handler)


export  async function handler(req: NextApiRequest, res: NextApiResponse) {

    const {method} = req;

    switch (method) {
        case 'GET':
            const segmentosList = await mongoServiceSegmentos.getAll()
            res.status(200).json(segmentosList);
            break

        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}
