import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { GlobalStyle } from '../layout/global-style';
import { AiFillEdit } from 'react-icons/ai';
import { IoCheckmarkDoneSharp, IoClose } from 'react-icons/io5';
import {  TextArea } from './index';
import { Button, Progress } from 'semantic-ui-react';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../Redux/reducer';

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const ToDoItem = (props) => {
  <GlobalStyle />;
  const { item, updateTodo, removeTodo, completeTodo } = props;
  const inputRef = useRef(true);
  const [todo, setTodo] = useState('');

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    //here 13 is key code for enter key
    if (e.which === 13) {
      //13 is the Enter key code
      updateTodo({ id, item: value });
    }
  };

  return (
    <div>
      <TextArea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
      />

      <Button onClick={() => changeFocus()}>
        <AiFillEdit />
      </Button>
      {item.completed === false && (
        <Button style={{ color: 'green' }} onClick={() => completeTodo(item.id)}>
          <IoCheckmarkDoneSharp />
        </Button>
      )}
      <Button style={{ color: 'red' }} onClick={() => removeTodo(item.id)}>
        <IoClose />
      </Button>
      <div style={{ padding: '.5rem 0' }}>
        {item.completed && (
          <Progress percent={100} success>
            This Task Is Completed
          </Progress>
        )}
      </div>
      <div style={{ padding: '.5rem 0' }}>
        {!item.completed && (
          <Progress percent={50} error>
            This Task Is Not Completed
          </Progress>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
