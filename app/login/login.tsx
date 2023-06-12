"use client";

import React from "react";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/list");
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default LoginButton;
