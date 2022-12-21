import React from "react";
import Header from "@components/Header";
import AboutMe from "@components/AboutMe";
import Projects from "@components/Projects";
import Technologies from "@components/Technologies";
import Form from "@components/Form";
import Footer from "@components/Footer";
import { SnackbarProvider } from "notistack";

import "@styles/styles.css";

const Home = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Header />
      <AboutMe />
      <Projects />
      <Technologies />
      <Form />
      <Footer />
    </SnackbarProvider>
  );
};

export default Home;
