import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [show, setShow] = useState(true);

  const handleBtn = () => {
    setShow(false);
  };

  return (
    <>
      <Header showBtn="true" />

      <Outlet context={[show, setShow]} />

      <Footer />
    </>
  );
};

export default Layout;
