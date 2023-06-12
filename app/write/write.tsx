"use client";

type WriteProps = {
  session: any;
};

const WriteForm = ({ session }: WriteProps) => {
  const date = new Date();

  const dateToString =
    String(date.getFullYear()) +
    "." +
    String(date.getMonth() + 1) +
    "." +
    String(date.getDate());

  const uniTime = date.getTime();

  let author = session?.user.userName;
  let authorEmail = session?.user.userEmail;

  return (
    <div>
      <form action="/api/post/write" method="POST" autoComplete="on">
        <input
          type="text"
          placeholder="제목"
          required
          name="title"
          className="w-full p-2 text-xl border-2 outline-transparent"
        />
        <textarea
          required
          name="content"
          placeholder="내용"
          className="w-full p-2 mt-1 border-2 h-60 outline-transparent"
        />
        <input type="hidden" name="date" value={dateToString} />
        <input type="hidden" name="unitime" value={uniTime} />
        <input type="hidden" name="author" value={author} />
        <input type="hidden" name="email" value={authorEmail} />
        <input type="hidden" name="views" value={0} />
        <button type="submit">게시</button>
      </form>
    </div>
  );
};

export default WriteForm;
