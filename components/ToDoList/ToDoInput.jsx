import React, { useState, useRef } from 'react';
import { GlobalStyle } from '../layout/global-style';
import { connect } from 'react-redux';
import { addTodos, updateTodos, completeTodo, removeTodos } from '../Redux/reducer';
import { List, Segment, Button, Input } from 'semantic-ui-react';
import { ProjectsSectionContainer, UL, Form } from './index';
import { AiFillEdit } from 'react-icons/ai';
import ToDoItem from './ToDoItem';

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
const ToDoInput = (props) => {
  console.log('state', props);
  const [todo, setTodo] = useState('');
  const { updateTodo } = props;
  console.log('updateTodo:', updateTodo);
  const inputRef = useRef(true);

  const add = (e) => {
    if (todo === '') {
      alert('Input is Empty');
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo('');
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
        <Button color='green' onClick={() => add()}>
          Submit
        </Button>
      </div>

      <div>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return (
              <Segment inverted key={item.id} style={{ marginLeft: '3rem', width: '340px' }}>
                <List divided inverted relaxed>
                  <List.Item>
                    <List.Content>{item.item}</List.Content>
                  </List.Item>
                </List>

                <UL>
                  <li key={item.id} style={{ listStyle: 'none !important' }}>
                    <ToDoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  </li>
                </UL>
              </Segment>
            );
          })}
      </div>
    </ProjectsSectionContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoInput);
