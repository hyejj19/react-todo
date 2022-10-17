import {createSlice} from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import {GetTodo} from '../libs/useActions';

// todoList 초기값 : localStorage에 저장된 내용이 없을 경우 빈 배열을 초기값으로 한다.

const initialState = JSON.parse(localStorage.getItem('todoList')) || [];

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    create: (state, action) => {
      state.push({
        id: uuid(),
        contents: action.payload,
        isCheck: false,
      });
    },
    remove: (state, action) =>
      state.filter(todo => {
        return todo.id !== action.payload;
      }),
    toggleCheck: (state, action) =>
      state.map(todo => {
        return todo.id === action.payload.id
          ? {...todo, isCheck: action.payload.isCheck}
          : todo;
      }),
  },
});

export const {create, remove, toggleCheck} = todoSlice.actions;

export default todoSlice.reducer;
