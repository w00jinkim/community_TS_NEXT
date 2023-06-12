import { MongoClient, MongoClientOptions, Db } from "mongodb";

const url =
  "mongodb+srv://admin:qwer1234@cluster0.vizozms.mongodb.net/?retryWrites=true&w=majority";
const options: MongoClientOptions = {};
let client: MongoClient;

export async function connectDB(): Promise<Db> {
  if (!client) {
    client = await new MongoClient(url, options).connect();
  }
  return client.db("forum");
}
