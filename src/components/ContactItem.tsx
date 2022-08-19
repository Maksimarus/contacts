import React, { useState, useRef, useEffect } from "react";
import { MdModeEdit } from "react-icons/md";
import DeleteButton from "./UI/DeleteButton";
import DeletePopup from "./DeletePopup";
import MyInput from "./UI/MyInput";
import { useActions } from "../hooks/redux";

interface ContactItemProps {
  name: string;
  phone: string;
  id: string | number;
}

const ContactItem = ({ name, phone, id }: ContactItemProps) => {
  const [visibleDeletePopup, setVisibleDeletePopup] = useState(false);
  const [visiblePhoneInput, setVisiblePhoneInput] = useState(false);
  const [phoneValue, setPhoneValue] = useState(phone);
  const [visibleNameInput, setVisibleNameInput] = useState(false);
  const [nameValue, setNameValue] = useState(name);
  const { setPhone, setName } = useActions();
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const editPhoneHandler = () => {
    setPhone({ id, phone: phoneValue });
    setVisiblePhoneInput(false);
  };
  const editNameHandler = () => {
    setName({ id, name: nameValue });
    setVisibleNameInput(false);
  };

  const keyUpPhoneHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      editPhoneHandler();
    }
  };
  const keyUpNameHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      editNameHandler();
    }
  };

  useEffect(() => {
    nameInputRef.current?.focus();
  }, [visibleNameInput]);
  useEffect(() => {
    phoneInputRef.current?.focus();
  }, [visiblePhoneInput]);

  return (
    <>
      <div className="todo flex p-4 bg-gray-800 rounded-2xl mb-6">
        <div className="flex flex-col grow">
          <div className="mb-1 text-blue-600 text-xl flex">
            Имя:
            {!visibleNameInput ? (
              <div
                className="flex items-center rounded ml-1 hover:bg-gray-700 "
                onClick={() => setVisibleNameInput(true)}
              >
                <span className="text-white text-base">{name}</span>
                <MdModeEdit size={24} className="text-gray-500 ml-3" />
              </div>
            ) : (
              <MyInput
                ref={nameInputRef}
                addClassName="p-1 text-white text-base ml-2"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder={name + ""}
                onKeyUp={keyUpNameHandler}
                onBlur={editNameHandler}
              />
            )}
          </div>
          <div className="text-blue-600 text-xl flex">
            Телефон:
            {!visiblePhoneInput ? (
              <div
                className="flex items-center rounded ml-1 hover:bg-gray-700 "
                onClick={() => setVisiblePhoneInput(true)}
              >
                <span className="text-white text-base pl-1">{phone}</span>
                <MdModeEdit size={24} className="text-gray-500 ml-3" />
              </div>
            ) : (
              <MyInput
                ref={phoneInputRef}
                addClassName="p-1 text-white text-base ml-2"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                placeholder={phone + ""}
                onKeyUp={keyUpPhoneHandler}
                onBlur={editPhoneHandler}
              />
            )}
          </div>
        </div>

        <DeleteButton onClick={() => setVisibleDeletePopup(true)} />
      </div>
      {visibleDeletePopup && (
        <DeletePopup id={id} closePopup={() => setVisibleDeletePopup(false)} />
      )}
    </>
  );
};

export default ContactItem;
