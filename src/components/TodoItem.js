import React from 'react';
import styled from 'styled-components';
import {FaTrash} from 'react-icons/fa';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: none;
  padding-right: 10px;
  &:hover {
    color: black;
  }
  > i {
    font-size: 16px;
    color: white;
  }
`;

const TodoItemContainer = styled.div`
  padding: 20px 0px 20px 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &:hover {
    background-color: var(--hover-color);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    ${Remove} {
      display: initial;
    }
  }

  > .todo__checkbox {
    margin-right: 1rem;
    min-width: 1.1rem;
    min-height: 1.1rem;
  }

  > span {
    font-size: 1.1rem;
    width: 100%;
    &.checked {
      color: gray;
      text-decoration: line-through;
    }
  }
`;

function TodoItem({todo}) {
  let isCheck = todo.isChecked;
  const onChangeCheckbox = () => {
    isCheck = !isCheck;
    fetch('http://localhost:4000/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: todo.contents,
        isChecked: isCheck,
      }),
    });
    const deleteTodoHandler = () => {};

    return (
      <TodoItemContainer>
        <input
          className={'todo__checkbox'}
          type="checkbox"
          checked={isCheck}
          onChange={onChangeCheckbox}
        />
        <span>{todo.contents}</span>
        <Remove onClick={deleteTodoHandler}>
          <FaTrash style={{fill: '#ff6b6b'}} />
        </Remove>
      </TodoItemContainer>
    );
  };
}

export default TodoItem;
