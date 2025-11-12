import React, { useState, useRef, useEffect } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');
  const inputRef = useRef(null);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        ref={inputRef}
        className='todo-input'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='What do you want to do today?'
        aria-label='Todo input'
      />
      <button type='submit' className='btn'>Add</button>
    </form>
  );
}
