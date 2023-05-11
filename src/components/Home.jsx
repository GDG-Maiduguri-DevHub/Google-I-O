import { useEffect } from "react";
import Connect from "./Connect";
import Counter from "./Counter";
import Headline from "./Headline";
import MainFooter from "./MainFooter";
import { useOutletContext } from "react-router-dom";
import Form from "./Forms";

const Home = () => (
  <main>
    <Headline />
    <Counter />
    <Connect />
    <MainFooter />
    <Form />
  </main>
);

export default Home;
