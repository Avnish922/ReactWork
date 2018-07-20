import React from "react";
import "./todo.css";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], text: "" };
    this.removeItem = this.removeItem.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    this.setState({ todos: [this.state.text, ...this.state.todos], text: "" });
  }

  updateValue(e) {
    this.setState({ text: [e.target.value] });
  }
  removeItem(index) {
    const todos = this.state.todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    this.setState({ todos });
  }
  render() {
    return (
      <div className="App">
        <center>
          <h1>ToDo List</h1>
          <p className={"listHeading"}>Tasks</p>
          <hr />
          <TodoList
            todos={this.state.todos}
            removeItem={this.removeItem}
            update={e => this.updateValue(e)}
          />
          <hr />
          <form onSubmit={e => this.addTodo(e)}>
            <input
              placeholder="Enter Todo item"
              value={this.state.text}
              onChange={e => {
                this.updateValue(e);
              }}
            />
            <button className={"btn btn-primary"} type="submit">
              Add new task!
            </button>
          </form>
        </center>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ol>
        {this.props.todos.map((todo, index) => {
          return (
            <li>
              {todo}
              <button
                className={"mybtn"}
                onClick={e => {
                  this.props.removeItem(index);
                }}
                key={todo}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    );
  }
}
