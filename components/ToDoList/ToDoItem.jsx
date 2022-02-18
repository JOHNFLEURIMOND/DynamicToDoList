import React from 'react';

const TodoItem = ({ item, index }) => {
  return (
    <div key={index} className='todo-list'>
      <li>{item}</li>
    </div>
  );
};
export default TodoItem;
