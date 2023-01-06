import type {NextApiRequest, NextApiResponse} from 'next'
import {Product} from "../../types/Product";
import {sleep} from "../../core/Sleep";


export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
    sleep(6000);
    const products: Product[] = [
        {name:'Port Beckley', category:"clothing", createdAt:new Date(), rating:1.5, description:"Revision of Nout"},
        {name:'Port Beckley', category:"clothing", createdAt:new Date(), rating:1.5, description:"Revision of Nout"},
        {name:'Port Beckley', category:"clothing", createdAt:new Date(), rating:1.5, description:"Revision of Nout"},
        {name:'Port Beckley', category:"clothing", createdAt:new Date(), rating:1.5, description:"Revision of Nout"},
        {name:'Port Beckley', category:"clothing", createdAt:new Date(), rating:1.5, description:"Revision of Nout"},
        {name:'Port Beckley', category:"clothing", createdAt:new Date(), rating:1.5, description:"Revision of Nout"},
        {name:'Port Beckley', category:"clothing", createdAt:new Date(), rating:1.5, description:"Revision of Nout"},
        {name:'Port Beckley', category:"clothing", createdAt:new Date(), rating:1.5, description:"Revision of Nout"},
    ]
    res.status(200).json(products)
}
