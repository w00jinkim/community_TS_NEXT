"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../GlobalRedux/Features/counter/counterSlice";
import Link from "next/link";
import { RootState } from "../GlobalRedux/store";

type Result = {
  result: any;
};

function Filtered({ result }: Result) {
  const value = useSelector((state: RootState) => state.counter.value);
  const second = useSelector((state: RootState) => state.counter.second);
  const [filteredResult, setFilteredResult] = useState<any[]>([]);

  useEffect(() => {
    const letsFilter = (result: any, value: string) => {
      return result.filter((el: any[]) => el.title.includes(value));
    };
    setFilteredResult(letsFilter(result, value));
  }, [second]);

  return (
    <div>
      {filteredResult.map((el, index) => {
        return (
          <div
            key={index}
            className="flex flex-row justify-around py-2 border-b-2 border-dotted"
          >
            <Link
              href={`/detail/${result[index]._id}`}
              className="w-1/2 font-bold"
            >
              <h4>{el.title}</h4>
            </Link>
            <div>{el?.author}</div>
            <div>{el?.date}</div>
            <div>{el?.views}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Filtered;
