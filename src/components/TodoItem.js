import React, {useState} from 'react';
import './TodoItems.css';

function TodoItem({todos, todo, todoHandler, id}) {
  const [isCheck, SetIsChecked] = useState(todo.isChecked);

  let classNameCheck = isCheck === true ? 'checked' : 'unchecked';

  function onChangeCheckbox(e) {
    // todos 에서 현재 todo를 찾아 그 checked 값을 변경한 todos를 만들고 새롭게 업데이트.
    const targetId = e.target.id;
    SetIsChecked(!isCheck);
    let targetTodo;
    let idx = 0;

    todos.forEach((todo, i) => {
      if (todo.id === targetId) {
        targetTodo = todo;
        idx = i;
      }
    });

    targetTodo = {
      ...todo,
      isChecked: true,
    };

    todos.splice(idx, 1, targetTodo);
    todoHandler(todos);
    console.log(todos, targetTodo);
  }

  return (
    <div className="todo__item">
      <input className={'todo__checkbox'} type="checkbox" checked={todo.isChecked} onChange={onChangeCheckbox} id={id} />
      <span className={classNameCheck}>{todo.contents}</span>
    </div>
  );
}

export default TodoItem;
