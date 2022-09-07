import React from 'react';
import './TodoItems.css';
import TodoItem from './TodoItem';

import {useSelector} from 'react-redux';

function TodoItems() {
  const todoList = useSelector(state => state.todoList);
  return (
    <div className="todo__items">
      {todoList.map(todo => {
        return <TodoItem key={todo.id} id={todo.id} />;
      })}
    </div>
  );
}

export default TodoItems;
