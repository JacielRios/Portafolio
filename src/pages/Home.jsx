import React from 'react';
import Header from '@components/Header';
import AboutMe from '@components/AboutMe';
import Projects from '@components/Projects';
import Technologies from '@components/Technologies';
import Form from '@components/Form';
import Footer from '@components/Footer';

import '@styles/styles.css';

const Home = () => {
    return(
        <>
            <Header />
            <AboutMe />
            <Projects />
            <Technologies />
            <Form /> 
            <Footer />
        </>
    );
}

export default Home;