import React, { useState } from 'react';
import Nav from '../Navbar/Nav.jsx';
import AboutHero from '../MainHero/AboutHero';
import { useHistory } from "react-router-dom";
import { GlobalStyle, Container } from '../layout/global-style';
import { ProjectsSectionContainer, MenuItem, Menu } from './index';
import { Button } from 'semantic-ui-react';

const DisplayTodos = (props) => {
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);
  const history = useHistory();
  //Create a function to handle the click state of the menu icon.
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

      <Button onClick={() => history.push("/", { from: "CompletedItems" })} style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
        HomePage
      </Button>
    </Container>
  );
};

export default DisplayTodos;
