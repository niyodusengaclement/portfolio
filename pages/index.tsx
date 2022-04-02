import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import ContactMe from "../components/ContactMe";
import Contributions from "../components/Contributions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Clement | Portfolio</title>
        <meta
          name="description"
          content="Fullstack Software Developer Portfolio"
        />
        <meta name="keywords" content="Software Developer, Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <About />
      <Services />
      {/* <Contributions />
      <Contact />
      <ContactMe />
      <Footer /> */}
    </div>
  );
};

export default Home;
