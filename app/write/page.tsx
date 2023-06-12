import React from "react";
import WriteForm from "./write";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

const Write = async () => {
  let session = await getServerSession(authOptions);

  return (
    <div className="mx-10 mt-10">
      <WriteForm session={session} />
    </div>
  );
};

export default Write;
