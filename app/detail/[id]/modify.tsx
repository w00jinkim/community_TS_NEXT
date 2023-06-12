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
    unitime?: string;
    author: string;
    email: string;
    views: string;
  } | null;
};

const Modify = ({ session, result }: SessionProps) => {
  const [message, setMessage] = useState("");
  const [viewChanger, setViewChanger] = useState(result?.views || "");
  const router = useRouter();
  const validateModify = () => {
    if (session && session?.user?.userEmail === result?.email) {
      return false;
    } else return true;
  };

  const validateDelete = () => {
    if (
      session &&
      (session.user.userEmail === result?.email ||
        session.user.role === "admin")
    ) {
      return false;
    } else return true;
  };

  useEffect(() => {
    if (message) {
      router.push("/list");
    }
  }, [message]);

  useEffect(() => {
    if (viewChanger !== "") {
      doFunction();
    }
  }, []);

  console.log(viewChanger);

  async function doFunction() {
    setViewChanger((prev) => String(Number(prev) + 1));

    try {
      await fetch("/api/post/views", {
        method: "POST",
        body: JSON.stringify({
          _id: result?._id,
          views: viewChanger,
        }),
      });
    } catch (error) {
      // 오류 처리
    }
  }

  useEffect(() => {
    fetch("/api/post/views", {
      method: "POST",
      body: JSON.stringify({
        _id: result?._id,
        views: viewChanger,
      }),
    });
  }, [viewChanger]);

  const deleteButton = () => {
    const id = result?._id;
    fetch("/api/post/delete", {
      method: "POST",
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data));
  };

  return (
    <div className="flex flex-row">
      <button
        className="w-10 h-8 m-1 font-bold text-white bg-black disabled:bg-gray-300 "
        disabled={validateModify()}
        onClick={() => {
          router.push(`/edit/${result?._id}`);
        }}
      >
        수정
      </button>
      <button
        className="w-10 h-8 m-1 font-bold text-white bg-black disabled:bg-gray-300"
        disabled={validateDelete()}
        onClick={() => {
          deleteButton();
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Modify;
