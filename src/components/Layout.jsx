import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NotifyForm from "./Forms";
import { useState } from "react";

const Layout = () => {
  const [notify, setNotify] = useState({
    form: false,
    success: false,
  });
  const openForm = () => {
    setNotify((state) => ({...state, form: true}));
    document.body.classList.add("hidden");
  }

  const closeSuccess = () => {
    setNotify((state) => ({...state, success: false}));
    document.body.classList.remove("hidden");
  }

  const closeForm = () => {
    setNotify((state) => ({...state, form: false}));
    document.body.classList.remove("hidden");
  }

  return (
    <>
      <Header openForm={openForm} />

      <Outlet context={[openForm, closeSuccess, notify]} />

      {notify.form && <NotifyForm closeForm={closeForm} />}

      <Footer />
    </>
  );
};

export default Layout;
