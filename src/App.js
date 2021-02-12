import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todoList = [
  {
    task: "Granola",
    id: 1248,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: todoList,
    };
  }
  toggledCompleted = (todoId) => {
    console.log("toggling todo items");
    const newTodolist = this.state.todoList.map((todo) => {
      if (todoId === todo.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    this.setState({
      ...this.state,
      todoList: newTodolist,
    });
  };

  addTodo = (todoName, e) => {
    console.log("added todo item");
    e.preventDefault();
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTodo],
    });
  };

  clearCompleted = () => {
    console.log("cleared todo item");
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter((todo) => !todo.completed),
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm addTodo={this.addTodo} />
        <TodoList
          clearCompleted={this.clearCompleted}
          toggledCompleted={this.toggledCompleted}
          todoList={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
