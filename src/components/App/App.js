import { useState } from "react";
import { Col, Empty, Row } from "antd";
import SimulationList from "../SimulationList/SimulationList";
import NewSimulationForm from "../NewSimulationForm/NewSimulationForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SimulationView from "../SimulationView/SimulationView";

function App() {
  const [selectedSimulationId, setSelectedSimulationId] = useState();

  /**
   * this is an example of api call
   */
  const {
    data: helloWorldData,
    isLoading,
    error,
    refetch,
  } = useQuery(["hello world"], async () => {
    // the first argument is the key of the query, this is used for caching. You should list the parameters if you use it
    const response = await axios.get("http://localhost:3001/");
    return response.data; // should be { message: "Hello World!" }
  });

  return (
    <div style={{ padding: 20 }}>
      <header>
        <h1>Jetpack React Workshop</h1>
      </header>
      <div>API returned : {helloWorldData?.message}</div>
      <Row gutter={15}>
        <Col span={12}>
          <SimulationList
            selectedSimulationId={selectedSimulationId}
            setSelectedSimulationId={setSelectedSimulationId}
          />
          <NewSimulationForm />
        </Col>
        <Col span={12}>
          {selectedSimulationId ? (
            <SimulationView simulationId={selectedSimulationId} />
          ) : (
            <Empty description="No simulation selected" />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default App;
