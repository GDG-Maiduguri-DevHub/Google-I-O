import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NotifyForm from "./Forms";
import { useState } from "react";

const Layout = () => {
  const [notify, setNotify] = useState(false);
  const openForm = () => {
    setNotify(true);
    document.body.classList.add("hidden");
  }

  const closeForm = () => {
    setNotify(false);
    document.body.classList.remove("hidden");
  }

  return (
    <>
      <Header openForm={openForm} />

      <Outlet context={[openForm]} />

      {notify && <NotifyForm closeForm={closeForm} />}

      <Footer />
    </>
  );
};

export default Layout;
