import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import './App.css';

const initialTodos: Todo[] = [
  {
    text: 'Do the chores',
    complete: true,
  },
  {
    text: 'Read a book',
    complete: false,
  },
  {
    text: 'Create a project',
    complete: true,
  },
  {
    text: 'Do some yoga',
    complete: false,
  },
  {
    text: 'Go for a walk',
    complete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
            <h1> TO-DO-LIST</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );


}

export default App;