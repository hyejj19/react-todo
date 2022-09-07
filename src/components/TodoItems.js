import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

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
  const todoList = useSelector(state => state.todoList);
  return (
    <TodoItemsContainer>
      {todoList.map(todo => {
        return <TodoItem key={todo.id} id={todo.id} />;
      })}
    </TodoItemsContainer>
  );
}

export default TodoItems;
