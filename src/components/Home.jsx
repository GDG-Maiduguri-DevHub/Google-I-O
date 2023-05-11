import { useOutletContext } from "react-router-dom";
import Connect from "./Connect";
import Counter from "./Counter";
import Headline from "./Headline";
import MainFooter from "./MainFooter";

const Home = () => {
  const [openForm] = useOutletContext();

  return (
    <main>
      <Headline openForm={openForm} />
      <Counter />
      <Connect />
      <MainFooter />
    </main>
  );
};

export default Home;
