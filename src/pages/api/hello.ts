// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {tokensLight, tokensDark} from  '../../theme';

type Data = {
    name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const x = tokensDark;
    const y = tokensLight;
    res.status(200).json({name: 'John Doe'})
}
