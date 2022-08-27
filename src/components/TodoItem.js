import React, {useState, useEffect} from 'react';
import './TodoItems.css';

function TodoItem({todo, saveTodoList}) {
  const [todoItem, setTodoItemCheck] = useState(todo);
  const [isCheck, SetIsCheck] = useState(todo.isChecked);

  let classNameCheck = isCheck === true ? 'checked' : 'unchecked';

  function onChangeCheckbox() {
    SetIsCheck(!isCheck);
  }

  useEffect(() => {
    const newTodo = {...todo, isChecked: isCheck};
    setTodoItemCheck(newTodo);
  }, [isCheck]);

  useEffect(() => {
    saveTodoList(todoItem);
  }, [todoItem]);

  return (
    <div className="todo__item">
      <input className={'todo__checkbox'} type="checkbox" checked={isCheck} onChange={onChangeCheckbox} />
      <span className={classNameCheck}>{todo.contents}</span>
    </div>
  );
}

export default TodoItem;
