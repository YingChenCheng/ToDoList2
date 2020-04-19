import React from 'react';
import { Todos } from '../TodoApp.types';

interface TodoFooterProps {
  clear: () => void;
  todos: Todos;
}

export const TodoFooter = (props: TodoFooterProps) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;
  const _onClick = () => {
    props.clear();
  };

  return (
    <footer className = "footer">
      <span className = "left">
        { itemCount } item{ itemCount <= 1 ? ' ' : 's ' } left
      </span>
      <button onClick = { _onClick } className = "submitClear">
        Clear Completed
      </button>
    </footer>
  );
};
