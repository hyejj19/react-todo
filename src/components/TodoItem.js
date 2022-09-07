import React from 'react';
import './TodoItems.css';
import styled from 'styled-components';
import {FaTrash, FaTrashRestore} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import {toggleCheck, remove} from '../slice/todoSlice';

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
`;

const TodoItemContainer = styled.div`
  padding: 20px 0px 20px 10px;
  display: flex;
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
  }

  > span {
    font-size: 1.1rem;
    width: 100%;
  }
`;

function TodoItem({id}) {
  const dispatch = useDispatch();

  const todoItem = useSelector(state => state.todoList).find(todo => todo.id === id);

  let isCheck = todoItem.isCheck;
  let classNameCheck = isCheck === true ? 'checked' : 'unchecked';

  function onChangeCheckbox() {
    isCheck = !isCheck;
    dispatch(toggleCheck({id, isCheck}));
  }

  const deleteTodoHandler = () => {
    dispatch(remove(id));
  };

  return (
    <TodoItemContainer>
      <input className={'todo__checkbox'} type="checkbox" checked={isCheck} onChange={onChangeCheckbox} />
      <span className={classNameCheck}>{todoItem.contents}</span>
      <Remove onClick={deleteTodoHandler}>
        <FaTrash style={{fill: '#ff6b6b'}} />
      </Remove>
    </TodoItemContainer>
  );
}

export default TodoItem;
