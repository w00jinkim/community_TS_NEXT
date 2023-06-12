import { Db, ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

type Request = {
  query: { id: string };
};

type Response = {
  status(code: number): Response;
  redirect(number: number, url: string): void;
  json(result: string | object): Response;
};

export default async function handler(request: Request, response: Response) {
  const db: Db = await connectDB();
  let result = await db
    .collection("comments")
    .find({ parent: new ObjectId(request.query.id) })
    .toArray();
  response.status(302).json(result);
}
