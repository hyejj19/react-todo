import React, {useRef} from 'react';
import styled from 'styled-components';
import {FaTrash} from 'react-icons/fa';
import {useState} from 'react';
import {useEffect} from 'react';

const url = process.env.REACT_APP_BASE_URL;

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

const InputEdit = styled.input`
  display: inline-block;
  width: 80%;
  height: 40px;
  color: black;
`;

function MyInput({onBlur, todoContents, setTodoContents}) {
  const [inputValue, setInputValue] = useState(todoContents);

  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const onchangeValue = e => {
    setInputValue(e.target.value);
  };

  // inputValue 변경시마다 TodoContents 상태값 변경
  useEffect(() => {
    setTodoContents(inputValue);
  }, [inputValue, setTodoContents]);

  return (
    <InputEdit
      value={inputValue}
      ref={inputEl}
      onBlur={onBlur}
      onChange={onchangeValue}
      onKeyUp={e => (e.key === 'Enter' ? inputEl.current.blur() : null)}
    />
  );
}

function TodoItem({todo, setTodoList, todoList}) {
  const [todoContents, setTodoContents] = useState(todo.contents);

  const [isChecked, setIsChecked] = useState(todo.isChecked);
  // 체크박스 체크 여부
  let classNameCheck = isChecked === true ? 'checked' : 'unchecked';

  // 체크박스 제어
  const onChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // 체크박스 변경시 fetch 요청
  useEffect(() => {
    fetch(`${url}/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: todo.contents,
        isChecked: isChecked,
      }),
    });
  }, [isChecked]);

  // 투두 삭제
  const deleteTodoHandler = () => {
    const newTodoList = todoList.slice().filter(el => el.id !== todo.id);
    fetch(`${url}/${todo.id}`, {
      method: 'DELETE',
    }).then(setTodoList(newTodoList));
  };

  // Edit 모드 제어 상태
  const [isEditMode, setIsEditMode] = useState(false);

  // 클릭시 EditMode 진입
  const handleClickEditMode = () => {
    setIsEditMode(true);
  };

  // Blur시 EditMode 해제
  const handleBlurEditMode = () => {
    setIsEditMode(false);

    const newTodoList = todoList.slice().map(el => {
      return el.id === todo.id ? {...el, contents: todoContents} : el;
    });
    fetch(`${url}/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: todoContents,
      }),
    })
      .then(res => res.json())
      .then(res => setTodoList(newTodoList));
  };

  return (
    <TodoItemContainer>
      {isEditMode ? (
        <MyInput
          onBlur={handleBlurEditMode}
          todoContents={todoContents}
          setTodoContents={setTodoContents}
        />
      ) : (
        <>
          <input
            className={'todo__checkbox'}
            type="checkbox"
            checked={isChecked}
            onChange={onChangeCheckbox}
          />
          <span onClick={handleClickEditMode} className={classNameCheck}>
            {todo.contents}
          </span>
          <Remove onClick={deleteTodoHandler}>
            <FaTrash style={{fill: '#ff6b6b'}} />
          </Remove>
        </>
      )}
    </TodoItemContainer>
  );
}

export default TodoItem;
