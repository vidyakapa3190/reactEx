import React, { Component } from "react";

class AddTask extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <label>Add new task:</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <button onClick={this.handleSubmit}> Add</button>
      </div>
    );
  }
}

export default AddTask;
