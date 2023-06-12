"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Result } from "./page";

const List: React.FC<{ timed: Result[] | null }> = ({ timed }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const total = timed?.length;
  const numPages = total ? Math.ceil(total / limit) : 0;

  return (
    <div>
      {timed &&
        timed.slice(offset, offset + limit).map((el: Result, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-around px-3 py-2 border-b-2 border-dotted"
            >
              <Link
                href={`/detail/${el?._id}`}
                className="flex justify-start w-2/3 font-bold truncate"
              >
                <h4>{el?.title}</h4>
              </Link>
              <div className="flex flex-row w-1/3">
                <div className="w-1/3 mx-1 text-sm truncate">{el?.author}</div>
                <div className="flex justify-center w-1/3 mx-1 text-sm">
                  {el?.date}
                </div>
                <div className="flex justify-center w-1/3 mx-1 text-sm">
                  {el?.views}
                </div>
              </div>
            </div>
          );
        })}
      {/* <label>
        <select
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="12">12</option>
        </select>
      </label> */}
      <div className="flex flex-row items-center justify-center">
        <button
          className="w-4 text-sm font-bold"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>
        {Array.from(Array(numPages)).map((_: undefined, i: number) => (
          <button
            className={
              page === i + 1 ? "w-4 text-sm bg-black text-white" : "w-4 text-sm"
            }
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : undefined}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="w-4 text-sm font-bold"
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default List;
