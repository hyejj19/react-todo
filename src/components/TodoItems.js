import React, {useState} from 'react';
import './TodoItems.css';

function TodoItem({todo}) {
  const [isCheck, SetIsChecked] = useState(todo.checked);

  let classNameCheck = isCheck === true ? 'checked' : 'unchecked';

  function checkHandler() {
    SetIsChecked(!isCheck);
  }

  return (
    <div className="todo__item">
      <input className={'todo__checkbox'} type="checkbox" checked={isCheck} onChange={checkHandler} />
      <span className={classNameCheck}>{todo.contents}</span>
    </div>
  );
}

function TodoItems({todos}) {
  return (
    <div className="todo__items">
      {todos.map(todo => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoItems;
