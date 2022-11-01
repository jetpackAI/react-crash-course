import { Button, Form, Input, Modal, Row } from "antd";
import React from "react";

const NewSimulationForm = () => {
  const [name, setName] = React.useState("");
  return (
    <Row justify="end">
      <Button
        type="primary"
        onClick={() => {
          // TODO : Open the modal with the form
        }}
      >
        Create new simulation
      </Button>
      <Modal
        visible={false} // TODO : set the visibility of the modal
        onOk={() => {
          // TODO : create the simulation with the API
          // TODO : Reset the form
          // TODO : Close the modal
        }}
        onCancel={() => {
          // TODO : Reset the form
          // TODO : Close the modal
        }}
        style={{ width: "80%" }}
      >
        <h2>New Simulation</h2>
        <Form.Item label="Name">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          {
            // TODO : add a description field
          }
        </Form.Item>
      </Modal>
    </Row>
  );
};

export default NewSimulationForm;
