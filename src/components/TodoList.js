import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ... todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArray = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArray);
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;
