import {VideoType} from "../types/VideoType";
import connectToDatabase from "./mongodbConnection";
import {Product} from "../types/Product";
import {Segmento} from "../types/Segmento";
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
const segmentoCollection = 'segmentos';
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


export const mongoServiceSegmentos = {
    getAll: async (): Promise<Segmento[]> => {
        const {db} = await connectToDatabase();
        const segmentoColle = await db.collection<Segmento>(segmentoCollection);
        const segmentosList = await segmentoColle.find({}).toArray();
        return segmentosList;


    },
    getSegmentoByCodigo: async (codigo:number): Promise<Segmento | null> => {
        const {db} = await connectToDatabase();
        const segmentoColle = await db.collection<Segmento>(segmentoCollection);
        const segmentoInstance = await segmentoColle.findOne({codigo:codigo});
        return segmentoInstance;


    }
}






