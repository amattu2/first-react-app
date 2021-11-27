// Imports
import React, { useState } from 'react';
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  return todos.map((todo, index) => {
    return (
      <div key={index} className={todo.isComplete ? "todo-row complete" : "todo-row"}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
          <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className="edit-icon" />
        </div>
      </div>
    )
  });
}

export default Todo;
