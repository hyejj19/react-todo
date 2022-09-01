import React, {useState, useEffect} from 'react';
import './TodoItems.css';
import styled from 'styled-components';
import {FaTrash, FaTrashRestore} from 'react-icons/fa';

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

function TodoItem({todo, saveTodoList, setTodoList, todoList}) {
  const [todoItem, setTodoItemCheck] = useState(todo);
  const [isCheck, SetIsCheck] = useState(todo.isChecked);

  let classNameCheck = isCheck === true ? 'checked' : 'unchecked';

  function onChangeCheckbox() {
    SetIsCheck(!isCheck);
  }

  // check 상태 업데이트하여 현재 todo 변경
  useEffect(() => {
    const newTodo = {...todo, isChecked: isCheck};
    setTodoItemCheck(newTodo);
  }, [isCheck]);

  // check 변경되어 todo 업데이트 되었을 때, 전체 리스트 로컬스토리지 저장 함수 호출
  useEffect(() => {
    saveTodoList(todoItem);
  }, [todoItem]);

  const deleteTodoHandler = () => {
    const newTodoList = todoList.filter(el => el.id !== todo.id);
    setTodoList(newTodoList);
  };

  return (
    <TodoItemContainer>
      <input className={'todo__checkbox'} type="checkbox" checked={isCheck} onChange={onChangeCheckbox} />
      <span className={classNameCheck}>{todo.contents}</span>
      <Remove onClick={deleteTodoHandler}>
        <FaTrash style={{fill: '#ff6b6b'}} />
      </Remove>
    </TodoItemContainer>
  );
}

export default TodoItem;
