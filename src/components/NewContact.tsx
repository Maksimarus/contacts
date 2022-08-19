import React, { useState } from "react";
import { useActions } from "../hooks/redux";
import MyInput from "./UI/MyInput";
import PlusButton from "./UI/PlusButton";

const NewContact = () => {
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const { addContact } = useActions();

  const addNewContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (contactName && contactPhone) {
      addContact({ name: contactName, phone: contactPhone });
      setContactName("");
      setContactPhone("");
    }
  };

  return (
    <div className="mb-10 w-full">
      <form
        className="flex bg-gray-800 rounded-xl mb-3"
        onSubmit={addNewContact}
      >
        <PlusButton />
        <MyInput
          type="text"
          placeholder="Имя контакта"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          required
        />
        <MyInput
          type="text"
          placeholder="Номер телефона"
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default NewContact;
