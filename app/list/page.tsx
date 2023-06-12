import { connectDB } from "../../util/database";
import { Db, ObjectId, WithId } from "mongodb";
import Link from "next/link";
import React from "react";
import WriteButton from "./WriteButton";
import List from "./List";

export type Result = {
  _id?: ObjectId;
  title?: string;
  content?: string;
  date?: string;
  unitime?: string;
  author?: string;
  email?: string;
  views?: string;
} | null;

export default async function Home() {
  const db: Db = await connectDB();
  let result: Result[] | null = await db.collection("post").find().toArray();
  const timed = result?.reverse();

  return (
    <div className="mx-20 mt-3">
      <WriteButton />
      <div className="flex flex-row justify-around p-3 border-black border-y-4">
        <div className="flex justify-center w-2/3">제목</div>
        <div className="flex flex-row w-1/3">
          <div className="flex justify-center w-1/3">글쓴이</div>
          <div className="flex justify-center w-1/3">작성일</div>
          <div className="flex justify-center w-1/3">조회수</div>
        </div>
      </div>
      <List timed={timed} />
      {/* {result &&
        timed.map((el, index) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-around px-3 py-2 border-b-2 border-dotted"
            >
              <Link
                href={`/detail/${timed[index]._id}`}
                className="flex justify-start w-2/3 font-bold truncate"
              >
                <h4>{timed[index].title}</h4>
              </Link>
              <div className="flex flex-row w-1/3">
                <div className="w-1/3 mx-1 text-sm truncate">
                  {timed[index]?.author}
                </div>
                <div className="flex justify-center w-1/3 mx-1 text-sm">
                  {timed[index]?.date}
                </div>
                <div className="flex justify-center w-1/3 mx-1 text-sm">
                  {timed[index]?.views}
                </div>
              </div>
            </div>
          );
        })} */}
    </div>
  );
}
