import type {NextPage} from "next";
import Head from "next/head";
import {FirstSection} from "../components/1";
import {SecondSection} from "../components/2";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Laurentino - Full Stack Developer</title>
      </Head>
      {/* <Header /> */}
      <FirstSection />
      <SecondSection />
    </>
  );
};

export default Home;
