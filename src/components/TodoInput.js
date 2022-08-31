import React, {useState} from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 0.1px solid var(--check-box);
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--point-color);
    height: 1.4rem;
    padding-bottom: 5px;
  }

  &:focus + Label {
    top: -60px;
    font-size: 0.9rem;
    color: var(--font-color);
    font-weight: 400;
  }
`;

const Label = styled.label`
  position: relative;
  top: -40px;
  transition: all 0.2s ease-in-out;
  color: var(--point-color);
  font-weight: 500;
`;

// TodoInput 컴포넌트
function TodoInput({setTodoList, todoList}) {
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  // TodoContainer 의 todoList state에 새로 생성한 todo 추가하여 상태 업데이트
  const onKeyUpEnter = e => {
    if (e.key === 'Enter') {
      const todo = {
        id: uuid(),
        contents: inputValue,
        isChecked: false,
      };
      setTodoList([...todoList, todo]);
      setInputValue('');
    }
  };

  return (
    <>
      <Input className="todo__input" type="text" name="inputValue" onChange={onChangeInput} value={inputValue} onKeyUp={onKeyUpEnter} />
      <Label htmlFor="inputValue">Notes...</Label>
    </>
  );
}

export default TodoInput;
