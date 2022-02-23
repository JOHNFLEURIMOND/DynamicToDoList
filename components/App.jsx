import React from "react";
import Nav from "../components/Navbar/Nav.jsx";
import MainHero from "../components/MainHero/MainHero";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import ToDoList from "./ToDoList/ToDoList";
import CompletedListPage from "./ToDoList/CompletedListPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { GlobalStyle, Container } from "./layout/global-style";

const Homepage = () => {
  return (
    <Container>
      <GlobalStyle />
      <Nav />
      <MainHero />
      <ToDoList />
      <Footer />
    </Container>
  );
};

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/CompletedListPage/" component={CompletedListPage} />
      <Route path="/About/" component={About} />
    </Switch>
  </Router>
);

export default App;
