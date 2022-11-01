import { useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal, Row } from "antd";
import axios from "axios";
import React from "react";

const NewSimulationForm = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const queryClient = useQueryClient();
  return (
    <Row justify="end">
      <Button
        type="primary"
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        Create new simulation
      </Button>
      <Modal
        visible={isModalVisible}
        onOk={async () => {
          await axios.post("http://localhost:3001/simulation", {
            name,
            description,
          });
          setIsModalVisible(false);
          setDescription("");
          setName("");
          queryClient.fetchQuery(["list"]);
        }}
        onCancel={() => {
          setIsModalVisible(false);
          setDescription("");
          setName("");
        }}
        width="80%"
      >
        <h2>New Simulation</h2>
        <Form.Item label="Name">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>
      </Modal>
    </Row>
  );
};

export default NewSimulationForm;
