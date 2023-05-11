import { useEffect } from "react";
import Connect from "./Connect";
import Counter from "./Counter";
import Headline from "./Headline";
import MainFooter from "./MainFooter";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useOutletContext();
  useEffect(() => {
    setShow(true);
  })

  return (
    <main>
      <Headline />
      <Counter />
      <Connect />
      <MainFooter />
    </main>
  );
};

export default Home;
