import { rootState } from "@/store";
import { setIsAuth, setUsername } from "@/store/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: rootState) => state.auth.isAuth);
  const username = useSelector((state: rootState) => state.auth.username);

  const setAuth = (value: boolean): void => {
    dispatch(setIsAuth(value));
  };

  const changeUser = (value: string): void => {
    dispatch(setUsername(value));
  };

  return (
    <section id="ao-login">
      <div className="test">
        <h1>Page Login {isAuth ? "true" : "false"}</h1>
        <p>user: {username}</p>
        <button onClick={() => setAuth(!isAuth)}>Change state</button>
        <button onClick={() => changeUser("duy")}>Change user</button>
      </div>
    </section>
  );
};

export default Login;
