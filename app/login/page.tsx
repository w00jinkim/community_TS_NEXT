import React from "react";
import Redirect from "./redirect";
import LoginButton from "./login";

const Login = () => {
  return (
    <div>
      <div>로그인 해주세요</div>
      <div>
        <form className="flex flex-col">
          <span>
            계정 : <input type="email" placeholder="email"></input>
          </span>
          <span>
            비밀번호 : <input type="password" placeholder="password"></input>
          </span>
          <LoginButton />
        </form>
        <div>-------------------</div>
        <Redirect />
      </div>
    </div>
  );
};

export default Login;
