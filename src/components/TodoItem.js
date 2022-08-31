import React, {useState, useEffect} from 'react';
import './TodoItems.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 8px 0px;
  display: flex;
`;

function TodoItem({todo, saveTodoList}) {
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

  return (
    <StyledDiv>
      <input className={'todo__checkbox'} type="checkbox" checked={isCheck} onChange={onChangeCheckbox} />
      <span className={classNameCheck}>{todo.contents}</span>
    </StyledDiv>
  );
}

export default TodoItem;
