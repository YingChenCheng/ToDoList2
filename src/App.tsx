import React from 'react';
import { TodoHeader } from './components/TodoHeader';
import { TodoFooter } from './components/TodoFooter';
import { TodoList } from './components/TodoList';
import { Todos, FilterTypes } from './TodoApp.types';

let index = 0;

export class App extends React.Component<{}, { todos: Todos; filter: FilterTypes }> {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      filter: 'all'
    };
  }

  render() {
    const { filter, todos } = this.state;
    return (
      <div>
        <TodoHeader
          addTodo = { this._addTodo }
          setFilter = { this._setFilter }
          filter = { filter }
        />
        <TodoList
          complete = { this._complete }
          todos = { todos }
          filter = { filter }
        />
        <TodoFooter
          clear = { this._clear }
          todos = { todos }
        />
      </div>
    );
  }

  private _addTodo = (label: any) => {
    const { todos } = this.state;
    const id = index++;

    this.setState({
      todos: { ...todos, [id]: { label, completed: false } }
    });
  };

  private _complete = (id: any) => {
    const { todos } = this.state;
    const todo = todos[id];
    const newTodos = { ...todos, [id]: { ...todo, completed: !todo.completed } };

    this.setState({
      todos: newTodos
    });
  };

  private _clear = () => {
    const { todos } = this.state;
    const newTodos = {};

    Object.keys(this.state.todos).forEach(id => {
      if (!todos[id].completed) {
        newTodos[id] = todos[id];
      }
    });

    this.setState({
      todos: newTodos
    });
  };

  private _setFilter = (filter: any) => {
    this.setState({
      filter: filter
    });
  };
}
