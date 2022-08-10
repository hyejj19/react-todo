import React, {useState} from 'react';
import uuid from 'react-uuid';
import './TodoInput.css';

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
      <input className="todo__input" type="text" name="inputValue" onChange={onChangeInput} value={inputValue} onKeyUp={onKeyUpEnter} />
      <label htmlFor="inputValue">Notes...</label>
    </>
  );
}

export default TodoInput;
