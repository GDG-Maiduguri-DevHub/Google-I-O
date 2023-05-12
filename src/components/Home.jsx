import { useOutletContext } from "react-router-dom";
import Connect from "./Connect";
import Counter from "./Counter";
import Headline from "./Headline";
import MainFooter from "./MainFooter";
import SponsorForm from "./SponsorForm";
import { useState } from "react";
import Success from "./Success";

const Home = () => {
  const [openForm, closeSuccess, notify] = useOutletContext();
  const [sponsor, setSponsor] = useState(false);
  const openSponForm = () => {
    setSponsor(true);
    document.body.classList.add("hidden");
  }

  const closeSponForm = () => {
    setSponsor(false);
    document.body.classList.remove("hidden");
  }

  return (
    <>
    <main>
      <Headline openForm={openForm} />
      <Counter openSponForm={openSponForm} />
      <Connect />
      <MainFooter />
    </main>
    {notify.success && <Success closeSuccess={closeSuccess} />}
    {sponsor && <SponsorForm closeSponForm={closeSponForm} />}
    </>
  );
};

export default Home;
