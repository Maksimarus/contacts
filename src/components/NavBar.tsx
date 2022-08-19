import React from "react";
import { useActions, useAppSelector } from "../hooks/redux";
import MyButton from "./UI/MyButton";

const NavBar = () => {
  const { isAuth, user } = useAppSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <header className="flex justify-between items-center mb-8 pb-5 border-b">
      <h1 className="font-bold text-3xl">Contacts App</h1>
      {isAuth && (
        <>
          <h2 className="uppercase text-lg px-6 py-1 bg-gray-600 rounded">
            {user.username}
          </h2>
          <MyButton
            onClick={() => logout()}
            addClassName="min-w-[150px] bg-red-500 "
          >
            Выйти
          </MyButton>
        </>
      )}
    </header>
  );
};

export default NavBar;
