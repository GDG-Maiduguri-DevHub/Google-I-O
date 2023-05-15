import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NotifyForm from "./Forms";
import { useState } from "react";
import SponsorForm from "./SponsorForm";

const Layout = () => {
  const [notify, setNotify] = useState({
    form: false,
    success: false,
    failure: false,
  });
  const [sponsor, setSponsor] = useState(false);
  const openSponForm = () => {
    setSponsor(true);
    document.body.classList.add("hidden");
  }

  const closeSponForm = () => {
    setSponsor(false);
    document.body.classList.remove("hidden");
  }

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

      <Outlet context={[openForm, openSponForm, closeSuccess, notify, closeFailure, closeForm]} />

      {notify.form && <NotifyForm closeForm={closeForm} openSuccess={openSuccess} openFailure={openFailure} />}
      {sponsor && <SponsorForm closeSponForm={closeSponForm} openSuccess={openSuccess} openFailure={openFailure} />}

      <Footer />
    </>
  );
};

export default Layout;
