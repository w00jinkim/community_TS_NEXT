"use client";

import { ObjectId } from "mongodb";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type SessionProps = {
  session: any;
  result: {
    _id: ObjectId;
    title: string;
    content: string;
    date: string;
    author: string;
    email: string;
    views: string;
  } | null;
};

type CommentList = {
  _id: string;
  comment: string;
  userName: string;
  userEmail: string;
  parent: string;
};

const Comments = ({ session, result }: SessionProps) => {
  const [reply, setReply] = useState("");
  const [commentlist, setCommentList] = useState<CommentList[]>([]);
  // const [viewCount, setViewCount] = useState(result?.views);

  useEffect(() => {
    fetch(`/api/post/commentlist?id=${result?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data);
      });
  }, []);

  // useEffect(() => {
  //   Number(viewCount) + 1;
  // }, []);

  return (
    <div>
      <p className="text-sm">댓글 목록</p>
      <div className="mt-2 border-t-2 border-b-2 border-black">
        {commentlist &&
          commentlist.map((el, index) => {
            return (
              <div
                className="flex flex-row py-2 text-sm border-b border-dashed"
                key={index}
              >
                <p className="flex items-start w-1/4 pl-2 mr-2 font-bold">
                  {commentlist[index].userName}
                </p>
                <p className="w-3/4 break-all">{commentlist[index].comment}</p>
              </div>
            );
          })}
      </div>
      <div className="flex flex-row my-2 text-sm">
        <p className="w-1/4 pl-2 mr-2 font-bold">{session.user.userName}</p>
        <div className="flex items-start w-3/4 ">
          <textarea
            cols={2}
            name="content"
            className="w-3/4 mr-2 border"
            onChange={(e) => setReply(e.target.value)}
          />
          <button
            className="p-2 font-bold text-white bg-black"
            onClick={() => {
              fetch("http://localhost:3000/api/post/comment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  comment: reply,
                  userEmail: session.user.userEmail,
                  userName: session.user.userName,
                  parent: result?._id,
                }),
              });
            }}
          >
            댓글 작성
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
