import { useState } from "react";
import { Col, Empty, Row } from "antd";
import SimulationList from "../TodoList/TodoList";
import NewSimulationForm from "../NewTodoForm/NewTodoForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SimulationView from "../TodoView/TodoView";
import TodoList from "../TodoList/TodoList";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import TodoView from "../TodoView/TodoView";

function App() {
  const [selectedTodo, setSelectedTodo] = useState();

  return (
    <div style={{ padding: 20 }}>
      <header>
        <h1>Jetpack React Workshop</h1>
      </header>
      <Row gutter={15}>
        <Col span={12}>
          <TodoList
            selectedTodo={selectedTodo}
            setSelectedTodo={setSelectedTodo}
          />
          <NewTodoForm />
        </Col>
        <Col span={12}>
          {selectedTodo ? (
            <TodoView todo={selectedTodo} />
          ) : (
            <Empty description="No simulation selected" />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default App;
