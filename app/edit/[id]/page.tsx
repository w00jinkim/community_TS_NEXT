import { Db, ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

type DetailProps = {
  params: {
    id: string;
  };
  searchParams: {};
};

const Edit = async (props: DetailProps) => {
  const db: Db = await connectDB();
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <form action="/api/post/edit" method="POST" autoComplete="on">
        <input
          type="text"
          placeholder="제목"
          required
          name="title"
          className="w-full p-2 text-xl border-2 outline-transparent"
          defaultValue={result?.title}
        />
        <textarea
          required
          name="content"
          placeholder="내용"
          className="w-full p-2 mt-1 border-2 h-60 outline-transparent"
          defaultValue={result?.content}
        />
        <input type="hidden" name="_id" value={result?._id.toString()} />
        <button type="submit">수정</button>
      </form>
    </div>
  );
};

export default Edit;
