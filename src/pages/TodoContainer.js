import React, {useEffect, useState} from 'react';

import './TodoContainer.css';

import TodoInput from '../components/TodoInput';
import TodoItems from '../components/TodoItems';

function TodoContainer() {
  // localTodoList 불러오기 : localStorage에 저장된 내용이 없을 경우 빈 배열을 초기값으로 한다.
  const localTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const [todoList, setTodoList] = useState(localTodoList);

  // 초기 마운트 될 때, todoList가 업데이트 될 때 로컬스토리지에 todoList 저장
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const saveTodoList = newTodo => {
    let targetTodo;
    let idx = 0;

    todoList.forEach((todo, i) => {
      if (todo.id === newTodo.id) {
        targetTodo = todo;
        idx = i;
      }
    });

    const copyTodoList = todoList.slice();
    const newTodoList = copyTodoList.splice(idx, 1, newTodo);

    // setTodoList(newTodoList);
  };

  return (
    <div className="todo__background">
      <div className="todo__container">
        <h1>To Do</h1>
        <TodoInput setTodoList={setTodoList} todoList={todoList} />
        <TodoItems todoList={todoList} saveTodoList={saveTodoList} />
      </div>
    </div>
  );
}

export default TodoContainer;
