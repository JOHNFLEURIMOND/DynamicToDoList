import React, { useState } from 'react';
import Nav from '../Navbar/Nav.jsx';
import AboutHero from '../MainHero/AboutHero';
import { GlobalStyle, Container } from '../layout/global-style';
import { ProjectsSectionContainer, MenuItem, Menu } from './index';

const DisplayTodos = (props) => {
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);

  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);

  return (
    <Container>
      <Nav />
      <AboutHero />
      <ProjectsSectionContainer>
        <GlobalStyle />

        <Menu onClick={handleClick} click={click}>
          <MenuItem>
            <a onClick={handleClick} href='https://github.com/JOHNFLEURIMOND/ReactReduxToDoList/blob/main/README.md'>
              Read Me
            </a>
          </MenuItem>
        </Menu>
      </ProjectsSectionContainer>
    </Container>
  );
};

export default DisplayTodos;
