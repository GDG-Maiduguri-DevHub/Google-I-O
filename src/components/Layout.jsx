import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NotifyForm from "./Forms";
import { useState } from "react";

const Layout = () => {
  const [notify, setNotify] = useState({
    form: false,
    success: false,
    failure: false,
  });
  const openForm = () => {
    setNotify((state) => ({...state, form: true}));
    document.body.classList.add("hidden");
  }

  const openSuccess = () => {
    setNotify((state) => ({...state, success: true}));
  }

  const closeSuccess = () => {
    setNotify((state) => ({...state, success: false}));
    document.body.classList.remove("hidden");
  }

  const openFailure = () => {
    setNotify((state) => ({...state, failure: true}));
  }

  const closeFailure = () => {
    setNotify((state) => ({...state, failure: false}));
    document.body.classList.remove("hidden");
  }

  const closeForm = () => {
    setNotify((state) => ({...state, form: false}));
    document.body.classList.remove("hidden");
  }

  return (
    <>
      <Header openForm={openForm} />

      <Outlet context={[openForm, closeSuccess, notify, closeFailure, closeForm]} />

      {notify.form && <NotifyForm closeForm={closeForm} openSuccess={openSuccess} openFailure={openFailure} />}

      <Footer />
    </>
  );
};

export default Layout;
