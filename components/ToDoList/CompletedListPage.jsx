import React, { useState } from "react";
import Nav from '../Navbar/Nav.jsx';
import Footer from '../Footer/Footer';
import CompletedMainHero from '../MainHero/CompletedMainHero';
import { GlobalStyle, Container } from '../layout/global-style';
import { List, Segment, Button, Input, TextArea } from 'semantic-ui-react'
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../Redux/reducer";
import TodoItem from "./TodoItem";
import { CardDiv, ProjectsSectionContainer } from "./index";

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
  const [sort, setSort] = useState("active");
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <CompletedMainHero />
      <ProjectsSectionContainer className="buttons">
        <Button
          onClick={() => setSort("active")}
        >
          Active
        </Button>

        <Button
          onClick={() => setSort("completed")}
        >
          Completed
        </Button>

        <Button
          onClick={() => setSort("all")}
        >
          All
        </Button>


        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
            return (
              item.completed === false && (

                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}

                />

              )
            );
          })
          : null}
        {/* for completed items */}
        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
            return (
              item.completed === true && (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              )
            );
          })
          : null}
        {/* for all items */}
        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                removeTodo={props.removeTodo}
                updateTodo={props.updateTodo}
                completeTodo={props.completeTodo}
              />
            );
          })
          : null}

      </ProjectsSectionContainer>
      <Footer />
    </div>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);