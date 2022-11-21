import { useState } from "react";
import { Col, Empty, Row } from "antd";
import axios from "axios";
import TodoList from "../TodoList/TodoList";
import TodoView from "../TodoView/TodoView";
import NewTodoForm from "../NewTodoForm/NewTodoForm";

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
            <Empty description="No Todo selected" />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default App;
