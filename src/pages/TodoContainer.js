import React, {useState} from 'react';

import './TodoContainer.css';
import dummyData from '../static/dummyData';

import TodoInput from '../components/TodoInput';
import TodoItems from '../components/TodoItems';

function TodoContainer() {
  const [todoList, setTodoList] = useState(dummyData);

  return (
    <div className="todo__background">
      <div className="todo__container">
        <h1>To Do</h1>
        <TodoInput setTodoList={setTodoList} todoList={todoList} />
        <TodoItems todos={todoList} />
      </div>
    </div>
  );
}

export default TodoContainer;
