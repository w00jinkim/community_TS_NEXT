import { connectDB } from "../../../util/database";
import { ObjectId, Db } from "mongodb";
import Modify from "./modify";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import Comments from "./comment";
import Like from "./like";

type DetailProps = {
  params: {
    id: string;
  };
  searchParams: {};
};

type Result = {
  _id: ObjectId;
  title: string;
  content: string;
  date: string;
  unitime: string;
  author: string;
  email: string;
  views: string;
} | null;

export default async function Detail(props: DetailProps) {
  const db: Db = await connectDB();
  let result: Result = (await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) })) as Result;

  let session: any = await getServerSession(authOptions);

  return (
    <div className="mx-32 mt-10">
      <div className="flex flex-row">
        <h4 className="w-full p-2 text-xl">{result?.title}</h4>
        <Modify session={session} result={result} />
      </div>
      <div className="flex flex-row items-center mx-3">
        <div className="pr-2 text-sm border-r-4 border-black">
          작성자 : {result?.author}
        </div>
        <div className="px-2 text-sm ">{result?.date}</div>
        {/* <Like /> */}
      </div>
      <p className="w-full p-2 mt-1 whitespace-pre-wrap min-h-80">
        {result?.content}
      </p>
      <Comments session={session} result={result} />
    </div>
  );
}
