"use client";

import React from "react";
import { useRouter } from "next/navigation";

const WriteButton = () => {
  const router = useRouter();

  return (
    <div>
      <button
        className="p-2"
        onClick={() => {
          router.push("/write");
        }}
      >
        글쓰기
      </button>
    </div>
  );
};

export default WriteButton;
