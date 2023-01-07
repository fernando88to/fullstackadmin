import type {NextApiRequest, NextApiResponse} from 'next'
import moment from 'moment';
import {mongoServiceProducts} from "../../databases/mongoService";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const {method} = req;
    const {category, description, name, createdAt, rating} = req.body;

    switch (method) {

        case 'GET':
            const productsList = await mongoServiceProducts.getAll();
            res.status(200).json(productsList);
            break
        case 'PUT':
            try {
                const createAtDate = moment(createdAt, "DD/MM/YYYY").toDate();
                let documento: any = {
                    category,
                    description,
                    name,
                    rating,
                    createdAt: createAtDate
                }
                await mongoServiceProducts.insert(documento);
                res.status(200).json(documento);
                break
            } catch (e) {
                console.log(e);
                res.status(500).json({erro: 'Erro ao salvar'});
                break
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}
