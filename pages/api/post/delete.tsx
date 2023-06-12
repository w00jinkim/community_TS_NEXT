import { connectDB } from "../../../util/database";
import { Db, ObjectId } from "mongodb";

type Request = {
  method: string;
  body: string;
};

export default async function handler(request: Request, response: any) {
  console.log(JSON.parse(request.body));
  if (request.method === "POST") {
    try {
      const db: Db = await connectDB();
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(JSON.parse(request.body)) });

      if (result.deletedCount === 1) {
        response.status(200).json("삭제완료").redirect(302, "/list");
      } else {
        response
          .status(404)
          .json("게시물을 찾을 수 없거나 이미 삭제되었습니다.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).json("서버 에러");
    }
  }
}
