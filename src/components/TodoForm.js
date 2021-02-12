import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  handelChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  submitTodo = (e) => {
    e.preventDefault();
    this.setState({ todo: "" });
    this.props.addTodo(this.state.todo, e);
  };
  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handelChange}
        />
        <button> add </button>
      </form>
    );
  }
}

export default TodoForm;
