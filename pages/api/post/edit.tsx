import { connectDB } from "../../../util/database";
import { ObjectId, Db } from "mongodb";

type Request = {
  method: string;
  body: {
    title: string;
    content: string;
    body: string;
    _id: string;
  };
};

type Response = {
  redirect(number: number, url: string): void;
};

export default async function handler(request: Request, response: Response) {
  if (request.method === "POST") {
    let modifier = { title: request.body.title, content: request.body.content };
    const db: Db = await connectDB();
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(request.body._id) }, { $set: modifier });
    console.log(result);
    response.redirect(302, "/list");
  }
}
