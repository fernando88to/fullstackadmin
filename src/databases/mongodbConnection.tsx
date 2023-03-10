import {Db, MongoClient, ServerApiVersion} from 'mongodb';

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || '';


const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.cmaefwn.mongodb.net/?retryWrites=true&w=majority`;


let cachedClient: MongoClient;
let cachedDb: Db;

interface RetornoClientMongo {
    client: MongoClient
    db: Db
}


export async function closeConnection(){
    await cachedClient.close();

}
export default async function connectToDatabase(): Promise<RetornoClientMongo> {
    if (!MONGO_USERNAME) {
        throw new Error('Please define the MONGO_USERNAME enviroment variable inside .env.local');
    }
    if (!MONGO_PASSWORD) {
        throw new Error('Please define the MONGO_PASSWORD enviroment variable inside .env.local');
    }

    if (!MONGO_DB_NAME) {
        throw new Error('Please define the MONGO_DB_NAME enviroment variable inside .env.local');
    }

    if (cachedDb != null && cachedClient != null) {
        return {client: cachedClient, db: cachedDb} as RetornoClientMongo

    }
    const client = new MongoClient(URI,
        {
            serverApi: ServerApiVersion.v1
        }
    );

    const db = await client.db(MONGO_DB_NAME);

    cachedClient = client;
    cachedDb = db;

    return {client, db} as RetornoClientMongo
}


//export default connectToDatabase();


