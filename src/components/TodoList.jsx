import React from 'react';

export default function TodoList({ todos = [], onDelete }) {
  if (!todos.length) return <p>No todos yet.</p>;
  return (
    <ul className='todo-list' style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li key={todo.id} className='todo-item'>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <input type='checkbox' aria-label='mark done' style={{width:18, height:18}} onChange={() => {}} />
            <span className='todo-text'>{todo.text}</span>
          </div>
          <div className='todo-actions'>
            <button className='btn-ghost' onClick={() => alert('Edit not implemented')}>Edit</button>
            <button className='btn-danger' onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
