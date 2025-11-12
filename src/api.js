let mock = [{ id: '1', text: 'Example Todo' }];

export async function getTodos() {
  return Promise.resolve(mock);
}

export async function createTodo(text) {
  const item = { id: String(Date.now()), text };
  mock = [item, ...mock];
  return Promise.resolve(item);
}

export async function deleteTodo(id) {
  mock = mock.filter(t => t.id !== id);
  return Promise.resolve({ message: 'deleted' });
}

