import React from 'react';
import './TodoItems.css';
import TodoItem from './TodoItem';

function TodoItems({todos, todoHandler}) {
  return (
    <div className="todo__items">
      {todos.map(todo => {
        return <TodoItem todo={todo} key={todo.id} todoHandler={todoHandler} todos={todos} id={todo.id} />;
      })}
    </div>
  );
}

export default TodoItems;
