import { Db } from "mongodb";
import { connectDB } from "../../../util/database";
import bycrypt from "bcrypt";

type Request = {
  method: string;
  body: {
    userEmail: string;
    userPassword: string;
    userSecondPassword: string;
    userName: string;
  };
};

type Response = {
  status(code: number): Response;
  redirect(number: number, url: string): void;
};

export default async function handler(request: Request, response: Response) {
  if (request.method === "POST") {
    let hash = await bycrypt.hash(request.body.userPassword, 10);
    let secondhash = await bycrypt.hash(request.body.userSecondPassword, 10);
    request.body.userPassword = hash;
    request.body.userSecondPassword = secondhash;
    const db: Db = await connectDB();
    let result = await db.collection("user_info").insertOne(request.body);
    return response.redirect(302, "/list");
  }
}
