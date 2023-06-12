"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Redirect = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/signup");
        }}
      >
        아이디가 없으신가요?
      </button>
    </div>
  );
};

export default Redirect;
