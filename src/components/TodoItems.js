import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import {GetTodo} from '../libs/useActions';

const TodoItemsContainer = styled.div`
  margin-top: 20px;
  max-height: 75%;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: var(--main-color);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--point-color);
    border-radius: 10px;
  }
`;

function TodoItems() {
  const todoList = GetTodo();
  return (
    <TodoItemsContainer>
      {todoList?.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </TodoItemsContainer>
  );
}

export default TodoItems;
