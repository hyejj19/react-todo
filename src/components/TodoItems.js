import React from 'react';
import './TodoItems.css';
import TodoItem from './TodoItem';

function TodoItems({todoList, saveTodoList, setTodoList}) {
  return (
    <div className="todo__items">
      {todoList.map(todo => {
        return <TodoItem key={todo.id} todo={todo} id={todo.id} saveTodoList={saveTodoList} setTodoList={setTodoList} todoList={todoList} />;
      })}
    </div>
  );
}

export default TodoItems;
