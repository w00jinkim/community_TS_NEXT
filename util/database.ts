import { MongoClient, MongoClientOptions, Db } from "mongodb";

const url = process.env.REACT_APP_MONGODB_URI || "";
const options: MongoClientOptions = {};
let client: MongoClient;

export async function connectDB(): Promise<Db> {
  if (!client) {
    client = await new MongoClient(url, options).connect();
  }
  return client.db("forum");
}
