import React, {useState} from 'react';
import './TodoItems.css';
import TodoItem from './TodoItem';

function TodoItems({todoList, saveTodoList}) {
  return (
    <div className="todo__items">
      {todoList.map(todo => {
        return <TodoItem key={todo.id} todo={todo} id={todo.id} saveTodoList={saveTodoList} />;
      })}
    </div>
  );
}

export default TodoItems;
