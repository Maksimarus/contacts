import React, { useEffect } from "react";
import { Watch } from "react-loader-spinner";
import ContactItem from "../components/ContactItem";
import NewContact from "../components/NewContact";
import Search from "../components/Search";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getContacts } from "../store/slices/contactsSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { contacts, isLoading, error } = useAppSelector(
    (state) => state.contacts
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <Watch
          height="200"
          width="200"
          // radius = "9"
          color="white"
          ariaLabel="three-dots-loading"
        />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-3xl text-red-500 flex justify-center">{error}</div>
    );
  }
  return (
    <div>
      <Search />
      <NewContact />
      {contacts.length ? (
        contacts.map((item) => (
          <ContactItem
            key={item.id}
            name={item.name}
            phone={item.phone}
            id={item.id}
          />
        ))
      ) : (
        <div className="text-3xl text-green-500 text-center">
          Список контактов пуст
        </div>
      )}
    </div>
  );
};

export default HomePage;
