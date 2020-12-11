# Todo App built with React Redux

> This is Part 2 of a series of mini React TodoApp projects.

## Overview

This is a mini Frontend-only React app to track daily todo list. The purpose of the app is to learn React Redux. The idea and the code about how to build from scratch actually come from the official [React Redux website](https://codesandbox.io/s/9on71rvnyo). There are some changes made due to the personal preferences.

Please notice that Redux and React Redux are two different things. If you want to know how to build a Todo App with Redux only, please check out my other project [here](https://github.com/92fueler/react-todo-app-part3).

## Tech Stack

| Tech        | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| React       | a JavaScript library for building user interfaces                  |
| React Redux | the offical Redux UI binding library for React                     |
| classnames  | a JavaScript utility for conditionally joining classNames together |

## The React UI Components

The React UI components are implemented in this project as follows:

- `TodoApp` is the entry component for our app. It renders the header, the AddTodo, TodoList, and VisibilityFilters components.
- AddTodo is the component that allows a user to input a todo item and add to the list upon clicking its “Add Todo” button:
  - It uses a controlled input that sets state upon onChange.
  - When the user clicks on the “Add Todo” button, it dispatches the action (that we will provide using React Redux) to add the todo to the store.
    TodoList is the component that renders the list of todos:
    It renders the filtered list of todos when one of the VisibilityFilters is selected.
    Todo is the component that renders a single todo item:
    It renders the todo content, and shows that a todo is completed by crossing it out.
    It dispatches the action to toggle the todo's complete status upon onClick.
    VisibilityFilters renders a simple set of filters: all, completed, and incomplete. Clicking on each one of them filters the todos:
    It accepts an activeFilter prop from the parent that indicates which filter is currently selected by the user. An active filter is rendered with an underscore.
    It dispatches the setFilter action to update the selected filter.
    constants holds the constants data for our app.
    And finally index renders our app to the DOM.
