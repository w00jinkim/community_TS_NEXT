"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { change, booleaner } from "./GlobalRedux/Features/counter/counterSlice";
import { RootState } from "./GlobalRedux/store";

type TopNavProps = {
  session: any;
};

const TopNav = ({ session }: TopNavProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.value);
  const second = useSelector((state: RootState) => state.counter.second);

  useEffect(() => {
    dispatch(booleaner(second)); // 초기 값 설정
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  const handleBooleanChange = () => {
    dispatch(booleaner(!second)); // 값을 반전시키고 액션 디스패치
  };

  return (
    <div>
      <div className="flex flex-row items-end justify-around">
        <Link href="/" className="p-3 text-5xl font-advent">
          WillForum
        </Link>
        <div className="flex items-center m-3 border-4 border-black">
          <input
            className="w-64 ml-2 text-xl outline-transparent"
            type="text"
            placeholder="검색"
            value={value}
            onChange={(e) => {
              dispatch(change(e.target.value));
            }}
          ></input>
          <button
            className="p-1 text-xl font-bold text-white bg-black"
            onClick={() => {
              router.push("/filter");
              handleBooleanChange();
            }}
          >
            검색
          </button>
        </div>
        <button
          className="p-2 m-3 bg-gray-300 "
          onClick={() => {
            !session ? signIn() : signOut();
          }}
        >
          {!session ? "로그인" : "로그아웃"}
        </button>
      </div>
      <div className="flex flex-row justify-around p-2 text-white bg-black">
        <div className="border-r-4">
          <button
            className="mx-3"
            onClick={() => {
              router.push("/list");
            }}
          >
            게시판
          </button>
          <button className="mx-3">인기 게시물</button>
          <button className="mx-3">공지사항</button>
          <button className="mx-3">문의사항</button>
        </div>
        <div></div>
        <div>
          <button
            onClick={() => {
              router.push("/signup");
            }}
            disabled={session ? true : false}
            className="text-sm"
          >
            {!session ? "회원가입" : `안녕하세요 ${session.user.userName}님!`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
