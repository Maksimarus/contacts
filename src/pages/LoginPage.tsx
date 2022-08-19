import React, { useState } from "react";
import MyInput from "../components/UI/MyInput";
import MyButton from "../components/UI/MyButton";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { login } from "../store/slices/authSlice";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading } = useAppSelector((state) => state.auth);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-center mb-8">Авторизация</h2>
      {error && <div className="text-red-500 mb-3">{error}</div>}
      <form className="max-w-lg text-center" onSubmit={submitForm}>
        <MyInput
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Введите логин"
          addClassName="mb-7"
          required
        />
        <MyInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Введите пароль"
          addClassName="mb-7"
        />
        <div className="text-red-500"></div>
        <MyButton type="submit" addClassName="bg-pink-400 min-w-[40%] mb-5">
          {isLoading ? "Загрузка..." : "Войти"}
        </MyButton>
      </form>
    </div>
  );
};

export default LoginPage;
