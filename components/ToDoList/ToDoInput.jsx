import React, { useState, useRef } from 'react';
import { GlobalStyle } from '../layout/global-style';
import { connect } from "react-redux";
import { addTodos } from "../Redux/reducer";
import { List, Segment, Button, Input, TextArea } from 'semantic-ui-react'
import { ProjectsSectionContainer, UL } from "./index";
import { AiFillEdit } from "react-icons/ai";
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
  console.log("state", props);
  const [todo, setTodo] = useState("");
  const { updateTodo, item } = props;
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
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
      <GlobalStyle />
      <div>
        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          label='To Do'
          placeholder='Write your to do here'
        />
        <Button onClick={() => add()}>Submit</Button>
      </div>

      <div>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return <Segment inverted key={item.id}>
              <List divided inverted relaxed>
                <List.Item>
                  <List.Content>
                    {item.item}
                  </List.Content>
                </List.Item>
              </List>

              <UL>
                <li key={item.id} style={{ listStyle: "none !important" }}>
                  <TextArea
                    ref={inputRef}
                    disabled={inputRef}
                    defaultValue={item.item}
                    onChange={(e) => setTodo(e.target.value)}
                  />
                  <div>
                    <Button onClick={() => changeFocus()}>
                      <AiFillEdit />
                    </Button>
                    <Button onClick={() => add()}>Submit</Button>
                  </div>
                </li>
              </UL>
            </Segment>

          })}

      </div>
    </ProjectsSectionContainer>

  );
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
