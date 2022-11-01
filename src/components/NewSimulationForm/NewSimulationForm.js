import { useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal, Row } from "antd";
import React from "react";

const NewSimulationForm = () => {
  const queryClient = useQueryClient();

  const [name, setName] = React.useState("");
  return (
    <Row justify="end">
      <Button
        type="primary"
        onClick={async () => {
          // TODO : Open the modal with the form
        }}
      >
        Create new simulation
      </Button>
      <Modal
        visible={false} // TODO : set the visibility of the modal
        onOk={async () => {
          // TODO : create the simulation with the API
          // TODO : Reset the form
          // TODO : Close the modal
          // TODO : Refetch the simulation list
          // queryClient.fetchQuery(["list"]); // use the key of the list query
        }}
        onCancel={async () => {
          // TODO : Reset the form
          // TODO : Close the modal
        }}
        width="80%"
      >
        <h2>New Simulation</h2>
        <Form.Item label="Name">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        {
          // TODO : add a description field
          // Notice Input.TextArea might be more appropriate
        }
      </Modal>
    </Row>
  );
};

export default NewSimulationForm;
