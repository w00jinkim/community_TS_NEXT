import { connectDB } from "../../../util/database";
import { ObjectId, Db } from "mongodb";

type Request = {
  method: string;
  body: {
    title: string;
    content: string;
    body: string;
    _id: string;
    views: string;
  };
};

type Response = {
  status(number: number): void;
  json(string: string): void;
};

export default async function handler(request: Request, response: any) {
  let parser = JSON.parse(request.body);
  let rebody = parser.views;
  let reid = parser._id;
  if (request.method === "POST") {
    let modifier = { views: rebody };
    const db: Db = await connectDB();
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(reid) }, { $set: modifier });
    console.log(result);
    response.status(200).json("삭제완료");
  }
}
