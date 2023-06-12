"use client";

import React, { useState, useEffect } from "react";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    userEmail: "",
    userPassword: "",
    userSecondPassword: "",
    userName: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      inputValue.userPassword === inputValue.userSecondPassword &&
      inputValue.userPassword.length > 7 &&
      inputValue.userEmail.includes("@" && ".") &&
      inputValue.userName
    ) {
      setDisable(false);
    } else if (
      inputValue.userPassword !== inputValue.userSecondPassword ||
      inputValue.userPassword.length <= 7 ||
      inputValue.userEmail.includes("@" && ".") ||
      !inputValue.userName
    ) {
      setDisable(true);
    }
  }, [inputValue]);

  return (
    <div className="mx-20 mt-10">
      <div className="flex justify-center text-3xl font-bold">
        회원가입 페이지
      </div>
      <div className="mt-10">
        <form
          className="flex flex-col"
          method="post"
          action="/api/post/register"
        >
          <span>
            이메일 :{" "}
            <input
              type="email"
              placeholder="이메일주소 기입"
              name="userEmail"
              onChange={handleInput}
            ></input>
          </span>
          <span>
            비밀번호 :{" "}
            <input
              type="password"
              placeholder="8자리 이상"
              name="userPassword"
              onChange={handleInput}
            ></input>
          </span>
          <span>
            비밀번호 재입력 :{" "}
            <input
              type="password"
              placeholder="비밀번호 재입력"
              name="userSecondPassword"
              onChange={handleInput}
            ></input>
          </span>
          <span>
            {" "}
            사용자 이름 :{" "}
            <input
              type="text"
              placeholder="사용자이름"
              name="userName"
              onChange={handleInput}
            ></input>
          </span>
          <input type="hidden" name="role" value="normal"></input>
          <button
            disabled={disable}
            className={disable === true ? "text-gray-400" : ""}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
