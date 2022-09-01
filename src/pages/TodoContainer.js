import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

// import './TodoContainer.css';

import TodoInput from '../components/TodoInput';
import TodoItems from '../components/TodoItems';

const TodoBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoContainer = styled.div`
  width: 500px;
  height: 800px;
  border-radius: 20px;
  background-color: var(--main-color);
  padding: 50px;
  transition: all 0.2s ease-in-out;

  > h1 {
    margin-top: 0;
    color: white;
    font-size: 3rem;
    margin-bottom: 45px;
  }
  @media screen and (max-width: 992px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
    transition: all 0.2s ease-in-out;
    padding: 50px 30px;
  }
`;

function TodoApp() {
  // localTodoList 불러오기 : localStorage에 저장된 내용이 없을 경우 빈 배열을 초기값으로 한다.
  const localTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const [todoList, setTodoList] = useState(localTodoList);
  let updatedTodoList = [];

  // 로컬스토리지 저장 함수
  const updateLocalStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  };

  // 초기 마운트 될 때, todoList가 업데이트 될 때 로컬스토리지에 todoList 저장
  useEffect(() => {
    updateLocalStorage();
  }, [todoList]);

  // checkbox가 수정되었을 때 새로 업데이트하는 함수
  const saveTodoList = newTodo => {
    let idx = 0;
    todoList.forEach((todo, i) => {
      if (todo.id === newTodo.id) {
        idx = i;
      }
    });
    updatedTodoList = todoList.slice();
    updatedTodoList[idx] = newTodo;
    setTodoList(updatedTodoList);
  };

  return (
    <TodoBackground>
      <TodoContainer>
        <h1>To Do</h1>
        <TodoInput setTodoList={setTodoList} todoList={todoList} />
        <TodoItems todoList={todoList} saveTodoList={saveTodoList} setTodoList={setTodoList} />
      </TodoContainer>
    </TodoBackground>
  );
}

export default TodoApp;
