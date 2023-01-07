import {VideoType} from "../types/VideoType";
import connectToDatabase from "./mongodbConnection";
import {Product} from "../types/Product";
// import moment from "moment/moment";


export const mongoService = {

    getAllVideos: async (): Promise<VideoType[]> => {
        const {db} = await connectToDatabase();
        const videos = await db.collection<VideoType>('video');
        const videosList = await videos.find({}).toArray();
        return videosList;
    },
    insert: async (documento: any): Promise<VideoType> => {
        //const updateAtDate = moment(updateAt, "DD/MM/YYYY").toDate();
        const {db} = await connectToDatabase();
        const collection = db.collection('video');
        await collection.insertOne(documento);
        return documento
    }

}


const productCollection = 'product';
export const mongoServiceProducts = {

    getAll: async (): Promise<Product[]> => {
        const {db} = await connectToDatabase();
        const prodocuts = await db.collection<Product>(productCollection);
        const productsList = await prodocuts.find({}).toArray();
        return productsList;
    },
    insert: async (documento: any): Promise<Product> => {
        const {db} = await connectToDatabase();
        const collection = db.collection(productCollection);
        await collection.insertOne(documento);
        return documento
    }

}





