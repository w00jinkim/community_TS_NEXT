import { Db, ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

type Request = {
  method: string;
  body: {
    comment: string;
    userEmail: string;
    userName: string;
    parent: string;
  };
};

type Response = {
  status(code: number): Response;
  redirect(number: number, url: string): void;
};

export default async function handler(request: Request, response: Response) {
  if (request.method === "POST") {
    let saveInfo = {
      comment: request?.body?.comment,
      userEmail: request?.body?.userEmail,
      userName: request?.body?.userName,
      parent: new ObjectId(request?.body?.parent),
    };
    // request?.body?.parent = new ObjectId(request?.body?.parent);

    const db: Db = await connectDB();
    let result = await db.collection("comments").insertOne(saveInfo);
    return response.redirect(302, "/list");
  }
}
