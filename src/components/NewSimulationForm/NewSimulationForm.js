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
        width="80%"
      >
        <h2>New Simulation</h2>
        <a href="https://ant.design/components/input/">
          https://ant.design/components/input/
        </a>
        <br />
        <a href="https://ant.design/components/modal/">
          https://ant.design/components/modal/
        </a>
      </Modal>
    </Row>
  );
};

export default NewSimulationForm;
