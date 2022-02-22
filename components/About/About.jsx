import React, { useState } from "react";
import Nav from '../Navbar/Nav.jsx';
import Footer from '../Footer/Footer';
import AboutHero from '../MainHero/AboutHero';
import { GlobalStyle, Container } from '../layout/global-style';
import { ProjectsSectionContainer } from "./index";

const DisplayTodos = (props) => {
  return (
    <Container>
      <Nav />
      <AboutHero />
      <ProjectsSectionContainer>
        <GlobalStyle />
      </ProjectsSectionContainer>
      <Footer />
    </Container>

  );
};

export default DisplayTodos;