import React, { useState } from 'react';
import { GlobalStyle } from '../layout/global-style';
import { connect } from 'react-redux';
import { addTodos, updateTodos, completeTodos, removeTodos } from '../Redux/reducer';
import { List, Segment, Button, Input } from 'semantic-ui-react';
import { ProjectsSectionContainer, UL, InputArea, CardContainer } from './index';
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
  const [todo, setTodo] = useState('');

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
      <InputArea>
        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          label='To Do'
          placeholder='Write your to do here'
        />
        <Button color='green' onClick={() => add()}>
          Submit
        </Button>
      </InputArea>

      <CardContainer>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return (
              <Segment key={item.id} style={{ margin: '5rem 5rem 0 3rem', width: '340px' }}>
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
      </CardContainer>
    </ProjectsSectionContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoInput);
