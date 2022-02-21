import React, { useState } from 'react';
import { GlobalStyle } from '../layout/global-style';
import { connect } from "react-redux";
import { addTodos } from "../Redux/reducer";
import {
  Card,
  Fieldset,
  CardBody,
  NameFieldset,

} from "../Card";
import { CardDiv } from "./index";
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdn.jsdelivrnet/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
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
    <div>
      <GlobalStyle />
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        label='To Do'
        placeholder='Write your to do here'
      />
      <button onClick={() => add()}>Submit</button>

      <ul>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return <CardDiv key={item.id}>
              <Card>
                <CardBody
                  onClick={() => flipCard(false)}
                  role="contentInfo"
                  aria-pressed="false"
                  aria-label="Card for todo item."
                >
                  <main
                    role="contentInfo"
                    aria-pressed="true"
                    aria-label="Product Card with a Image and a Description of product, Effects and Type Data."
                  >
                    <Fieldset aria-label="description">
                      {item.item}
                    </Fieldset>
                    <NameFieldset aria-label="title">
                      Completed: {item.completed}
                    </NameFieldset>
                  </main>
                </CardBody>
              </Card>
            </CardDiv>
          })}
      </ul>
    </div >
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
