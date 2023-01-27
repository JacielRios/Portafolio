import React from "react";
import Header from "@components/Header";
import AboutMe from "@components/AboutMe";
const Projects = React.lazy(() => import('@components/Projects'));
const Technologies = React.lazy(() => import( '@components/Technologies'));
const Certificates = React.lazy(() => import( '@components/Certificates'));
const Form = React.lazy(() => import( '@components/Form'));
const Footer = React.lazy(() => import( '@components/Footer'));
import { SnackbarProvider } from "notistack";

import "@styles/styles.css";

const Home = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Header />
      <div className="main-container">
      <AboutMe />
      <Projects />
      <Technologies />
      <Certificates />
      <Form />
      </div>
      <Footer />
    </SnackbarProvider>
  );
};

export default Home;
