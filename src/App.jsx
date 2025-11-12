import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodos, createTodo, deleteTodo } from './api';
import './styles.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos).catch(() => setTodos([]));
  }, []);

  const handleAdd = async (text) => {
    const todo = await createTodo(text);
    setTodos(prev => [todo, ...prev]);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="app-card">
      <div className="app-header">
        <div>
          <h1 className="app-title">Simple Todo App</h1>
          <div className="app-sub">
            A small MERN-style demo — keep things simple and focused.
            <span className="count" style={{ marginLeft: 10 }}>{todos.length} item{todos.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
        <div>
          <button className="btn-ghost" title="About">About</button>
        </div>
      </div>

      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}
