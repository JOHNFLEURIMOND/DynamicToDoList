import React, { useState } from 'react';
import Nav from '../Navbar/Nav.jsx';
import Footer from '../Footer/Footer.jsx';
import CompletedMainHero from '../MainHero/CompletedMainHero';
import { GlobalStyle, Container } from '../layout/global-style';
import { connect } from 'react-redux';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../Redux/reducer';
import CompletedItems from './CompletedItems';
import { ProjectsSectionContainer } from './index';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  return (
    <Container>
      <Nav />
      <CompletedMainHero />
      <ProjectsSectionContainer>
        <GlobalStyle />
        <CompletedItems />
      </ProjectsSectionContainer>
        <Footer />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
