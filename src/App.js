import React from 'react';
import TodoList from './components/TodoList';
import { LocalStorageProvider } from './Providers/LocalStorage';
import './style.css';

function App() {
  return (
    <div className='todo-app'>
      <LocalStorageProvider>
        <TodoList />
      </LocalStorageProvider>
    </div>
  );
}

export default App;
