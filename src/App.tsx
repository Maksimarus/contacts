import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useActions } from "./hooks/redux";
import Layout from "./layout/Layout";

const App = () => {
  const { setIsAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      setUser({ username: localStorage.getItem("username") });
    }
  }, []);

  return (
    <Layout>
      <NavBar />
      <AppRouter />
    </Layout>
  );
};

export default App;
