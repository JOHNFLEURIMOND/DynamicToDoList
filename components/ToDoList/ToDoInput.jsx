import React, { useState } from 'react';
import { GlobalStyle } from '../layout/global-style';
import { connect } from "react-redux";
import { addTodos } from "../Redux/reducer";
import { List, Segment } from 'semantic-ui-react'
import { CardDiv, ProjectsSectionContainer, CineDiv } from "./index";
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css';
document.head.appendChild(styleLink);

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
  };
};

const TodoInput = (props) => {
  console.log("props", props);

  const [todo, setTodo] = useState("");

  const add = (e) => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  return (

    <ProjectsSectionContainer>
      <div>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          label='To Do'
          placeholder='Write your to do here'
        />
        <button onClick={() => add()}>Submit</button>
      </div>

      <div>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return <Segment inverted key={item.id}>
              <List divided inverted relaxed>
                <List.Item>
                  <List.Content updateTodo={props.updateTodo}>
                    {item.item}
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          })}
      </div>
    </ProjectsSectionContainer>

  );
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
