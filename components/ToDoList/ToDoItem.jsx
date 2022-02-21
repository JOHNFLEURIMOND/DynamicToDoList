import React, { useRef } from "react";
import { connect } from "react-redux";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { UL } from "./index";
import { Button, TextArea, Progress, Form } from 'semantic-ui-react'
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css';
document.head.appendChild(styleLink);

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
  const { item, removeTodo, completeTodo } = props;
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

  const keyPress = (e) => {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault()
      e => update(item.id, inputRef.current.value, e)
    }
  }


  return (
    <div>
      <UL>
        <li key={item.id} style={{ listStyle: "none !important" }}>
          <Form>
            <TextArea
              ref={inputRef}
              disabled={inputRef}
              defaultValue={item.item}
              onKeyPress={e => update(item.id, inputRef.current.value, e)}
            />
          </Form>

          <Button loading onClick={() => changeFocus()}>
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
          {item.completed && <Progress percent={100} success>
            This Task Is Completed
          </Progress>}
          {!item.completed && <Progress percent={50} error>
            This Task Is Not Compleled Yet.
          </Progress>}
        </li>
      </UL>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
