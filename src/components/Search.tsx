import React from "react";
import { RiFindReplaceLine } from "react-icons/ri";
import { useActions } from "../hooks/redux";
import MyInput from "./UI/MyInput";

const Search = () => {
  const { filteredContacts } = useActions();

  return (
    <div className="mb-3 w-full flex relative">
      <RiFindReplaceLine
        size={25}
        className="absolute inset-y-2.5 left-2 text-gray-400"
      />
      <MyInput
        onChange={(e) => filteredContacts(e.target.value)}
        addClassName="mb-3 pl-10"
        placeholder="Поиск..."
      />
    </div>
  );
};

export default Search;
