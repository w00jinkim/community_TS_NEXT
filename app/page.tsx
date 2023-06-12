import { connectDB } from "../util/database";
import { Db } from "mongodb";

export default async function Home() {
  const db: Db = await connectDB();
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      <div>안녕하세요</div>
    </div>
  );
}
