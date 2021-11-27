// Imports
import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../Providers/LocalStorage";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const storage = useLocalStorage();
  const [todos, setTodos] = useState([]);

  /**
   * Add a new To-Do item
   *
   * @param {object} todo
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-27T10:11:16-050
   */
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ... todos];

    setTodos(newTodos);
    storage.storeItems(newTodos);
  };
  /**
   * Remove a To-Do item
   *
   * @param {number} id
   * @return {void}
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-27T10:16:05-050
   */
  const removeTodo = (id) => {
    const removeArray = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArray);
    storage.storeItems(removeArray);
  }

  /**
   * Update a To-Do item
   *
   * @param {string} text
   * @return {void}
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-27T10:16:32-050
   */
  const submitUpdate = (value) => {
    // TBD
  };

  /**
   * Mark a To-Do as complete
   *
   * @param {number} id
   * @return {object} To-Do object
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-27T10:17:32-050
   */
  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
    storage.storeItems(updatedTodos);
  };

  /**
   * Update a To-Do value
   *
   * @param {number} todoId
   * @param {string} newValue
   * @return {undefined}
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-27T10:18:25-050
   */
  const updateTodo = (todoId, newValue) => {
    if (!todoId || !newValue) {
      return;
    }

    // TBD
  }

  useEffect(() => {
    setTodos(storage.getItems());
  }, [storage]);

  return (
    <>
      <h1>To-Do List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </>
  );
}

export default TodoList;
