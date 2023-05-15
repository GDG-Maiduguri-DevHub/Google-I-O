import { useOutletContext } from "react-router-dom";
import Connect from "./Connect";
import Counter from "./Counter";
import Headline from "./Headline";
import MainFooter from "./MainFooter";
import Success from "./Success";
import Failure from "./Failure";

const Home = () => {
  const [openForm, openSponForm, closeSuccess, notify, closeFailure, closeForm] = useOutletContext();
  
  return (
    <>
    <main>
      <Headline openForm={openForm} />
      <Counter openSponForm={openSponForm} />
      <Connect />
      <MainFooter />
    </main>
    {notify.success && <Success closeSuccess={closeSuccess} />}
    {notify.failure && <Failure closeFailure={closeFailure} closeForm={closeForm} />}
    </>
  );
};

export default Home;
