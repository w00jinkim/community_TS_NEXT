import { Db } from "mongodb";
import { connectDB } from "../../../util/database";

type Request = {
  method: string;
  body: {
    title: string;
    content: string;
    author: string;
    views: string;
    date: string;
  };
};

type Response = {
  status(code: number): Response;
  redirect(number: number, url: string): void;
};

export default async function handler(request: Request, response: Response) {
  if (request.method === "POST") {
    const db: Db = await connectDB();
    let result = await db.collection("post").insertOne(request.body);
    return response.redirect(302, "/list");
  }
}
