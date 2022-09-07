import React, {useEffect} from 'react';
import styled from 'styled-components';

import TodoInput from '../components/TodoInput';
import TodoItems from '../components/TodoItems';

import {useSelector, useDispatch} from 'react-redux';

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
  const dispatch = useDispatch();

  // store에서 가져온 todoList state
  const todoList = useSelector(state => state.todoList);

  // 로컬스토리지 저장 함수
  const updateLocalStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  };

  // 초기 마운트 될 때, todoList가 업데이트 될 때 로컬스토리지에 todoList 저장
  useEffect(() => {
    updateLocalStorage();
  }, [todoList]);

  return (
    <TodoBackground>
      <TodoContainer>
        <h1>To Do</h1>
        <TodoInput />
        <TodoItems />
      </TodoContainer>
    </TodoBackground>
  );
}

export default TodoApp;
