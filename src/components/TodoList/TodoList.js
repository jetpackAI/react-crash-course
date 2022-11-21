import { Table } from "antd";
import React from "react";

const TodoList = ({ selectedTodo, setSelectedTodo }) => {
  const [list, setList] = React.useState([
    {
      id: 1,
      name: "My plan for this TH",
      description: "Make this todolist working",
    },
  ]);
  return (
    <div>
      {list.map((todo) => {
        return (
          <div
            style={{
              cursor: "pointer",
              padding: 10,
              border: "solid black 1px",
            }}
            onClick={() => setSelectedTodo(todo)}
          >
            {todo.name}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
