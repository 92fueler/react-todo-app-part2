import React from "react";
import { connect } from "react-redux";
// import { getTodos } from '../redux/selectors';
import { getTodosByVisibilityFilter } from "../redux/selectors";
import Todo from "./Todo";

// TodoList component is responsible to render a list of todos
const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

// How to get the data from store: approach 1 without using selectors
// const mapStateToProps = state => {
//   // byIds, allIds are fetched and will be used in this component
//   const { byIds, allIds } = state.todos || {}
//   const todos = allIds && allIds.length ? allIds.map(id => (byId ? { ...byIds[id], id } : null)) : null;
//     return {todos}
// }
// export default connect(mapStateToProps)(TodoList)

// How to get the data from store: approach 2 using selectors
// approach 2 is recommended to use
// export default connect((state) => ({ todos: getTodos(state) }))(TodoList);

// get filter info
const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
