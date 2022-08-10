import React, {useEffect, useState} from 'react';
import uuid from 'react-uuid';
import './TodoContainer.css';
import TodoItems from '../components/TodoItems';

import dummyData from '../static/dummyData';

function TodoContainer() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState(dummyData);

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  const onKeyUpEnter = e => {
    if (e.key === 'Enter') {
      const todo = {
        id: uuid(),
        contents: inputValue,
        checked: false,
      };
      setTodoList([...todoList, todo]);
      setInputValue('');
    }
  };

  return (
    <div className="todo__background">
      <div className="todo__container">
        <h1>To Do</h1>
        <input className="todo__input" type="text" name="todo__input" onChange={onChangeInput} value={inputValue} onKeyUp={onKeyUpEnter} />
        <label htmlFor="todo__input">Notes...</label>
        <TodoItems todos={todoList} />
      </div>
    </div>
  );
}

export default TodoContainer;
