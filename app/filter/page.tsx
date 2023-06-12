import { connectDB } from "../../util/database";
import { Db } from "mongodb";
import React from "react";
import WriteButton from "../list/WriteButton";
import Filtered from "./Filtered";

export default async function Filter() {
  const db: Db = await connectDB();
  let result = await db.collection("post").find().toArray();

  return (
    <div className="mx-20 mt-3">
      <WriteButton />
      <div className="flex flex-row justify-around p-3 border-black border-y-4">
        <div className="w-1/2">제목</div>
        <div>글쓴이</div>
        <div>작성일</div>
        <div>조회수</div>
      </div>
      <Filtered result={result} />
    </div>
  );
}
