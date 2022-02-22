import React, { useRef } from "react";
import { connect } from "react-redux";
import { GlobalStyle } from '../layout/global-style';
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { UL } from "./index";
import { Button, TextArea, Progress, Form } from 'semantic-ui-react'

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const TodoItem = props => {
  <GlobalStyle />
  const { item, updateTodo, removeTodo, completeTodo } = props;
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    console.log("update: ", e.which)
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = false;
    }
  };

  const keyPress = (e, id, value,) => {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault()
      e => update(item.id, inputRef.current.value, e)
    }
  }


  return (
    <div>
      <UL style={{ listStyle: "none !important" }}>
        <li key={item.id} style={{ listStyle: "none !important" }}>
          <Form>
            <TextArea
              ref={inputRef}
              disabled={inputRef}
              defaultValue={item.item}
              onKeyPress={e => update(item.id, inputRef.current.value, e)}
            />
          </Form>

          <Button onClick={() => changeFocus()}>
            <AiFillEdit />
          </Button>
          {item.completed === false && (
            <Button
              style={{ color: "green" }}
              onClick={() => completeTodo(item.id)}
            >
              <IoCheckmarkDoneSharp />
            </Button>
          )}
          <Button style={{ color: "red" }} onClick={() => removeTodo(item.id)}>
            <IoClose />
          </Button>

        </li>
      </UL>

      <div style={{ padding: ".5rem" }}>
        {item.completed && <Progress percent={100} success>
          This Task Is Completed
        </Progress>}
      </div>
      <div style={{ padding: ".5rem" }}>
        {item.completed && <Progress percent={50} error>
          This Task Is Completed
        </Progress>}
      </div>

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
