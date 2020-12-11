import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

// AddTodo is the component that allows a user to input a todo item and add to the list upon clicking its "Add Todo" button
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputContent: "" };
  }
  updateInput = (inputContent) => {
    this.setState({ inputContent });
  };

  handleAddTodo = () => {
    // dispatch action to add todo
    this.props.addTodo(this.state.inputContent);
    // reset the inputContent value
    this.setState({ inputContent: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.inputContent}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

// <AddTodo /> is wrapped with a parent componen called <Connect(AddTodo) />
// <AddTodo /> gains one prop: the addTodo action
export default connect(null, { addTodo })(AddTodo);
