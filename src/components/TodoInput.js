import React, {useState} from 'react';
import styled from 'styled-components';

import {useDispatch} from 'react-redux';
import {create} from '../slice/todoSlice';

const InputEl = styled.input`
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
function TodoInput() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  const onKeyUpEnter = e => {
    if (e.key === 'Enter' && inputValue) {
      dispatch(create(inputValue));
      setInputValue('');
    } else if (!inputValue) {
      alert('내용을 입력해 주세요!');
    }
  };

  return (
    <>
      <InputEl
        type="text"
        name="inputValue"
        onChange={onChangeInput}
        value={inputValue}
        onKeyUp={onKeyUpEnter}
      />
      <Label htmlFor="inputValue">Notes...</Label>
    </>
  );
}

export default TodoInput;
