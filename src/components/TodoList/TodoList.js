import { Table } from "antd";
import React from "react";
import NewTodoForm from "../NewTodoForm/NewTodoForm";

const TodoList = ({ selectedTodo, setSelectedTodo }) => {
  const [list, setList] = React.useState([
    {
      name: "My plan for this TH",
      description: "Make this todolist working",
      done: false,
    },
    {
      name: "Lunch",
      description: "Don't forget to get food before the TH",
      done: true,
    },
  ]);
  return (
    <div>
      {list.map((todo, i) => {
        // TODO: Improve the list rendering https://www.w3schools.com/react/react_css.asp
        // TODO: Click on a todo should select it
        return <div key={i}>{todo.name}</div>;
      })}
      <NewTodoForm
        onSubmit={(newTodo) => {
          // TODO : add the new todo to the list
        }}
      />
    </div>
  );
};

export default TodoList;
