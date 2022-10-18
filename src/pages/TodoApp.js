import React from 'react';
import styled from 'styled-components';

import TodoInput from '../components/TodoInput';
import TodoItems from '../components/TodoItems';
import GlobalStyle from '../Globalstyle';
import {GetTodo} from '../libs/useGetTodo';

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
  // 서버에서 todoList 가져오는 함수
  const [todoList, setTodoList] = GetTodo();
  return (
    <>
      <GlobalStyle />
      <TodoBackground>
        <TodoContainer>
          <h1>To Do</h1>
          <TodoInput todoList={todoList} setTodoList={setTodoList} />
          <TodoItems todoList={todoList} setTodoList={setTodoList} />
        </TodoContainer>
      </TodoBackground>
    </>
  );
}

export default TodoApp;
