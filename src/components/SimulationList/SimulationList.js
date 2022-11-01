import { Table } from "antd";
import React from "react";

const SimulationList = ({ selectedSimulationId, setSelectedSimulationId }) => {
  return (
    <div>
      <Table
        columns={[
          {
            title: "Name",
            dataIndex: "name",
          },
        ]}
        dataSource={[
          // TODO : get the simulation list from the API (notice the api is not returning `key` attribute)
          {
            name: "Simulation 1",
            description: "This is a simulation",
            id: 1,
            key: 1,
          },
          {
            name: "Simulation 2",
            description: "This is a simulation",
            id: 2,
            key: 2,
          },
          {
            name: "Simulation 3",
            description: "This is a simulation",
            id: 3,
            key: 3,
          },
        ]}
        rowSelection={{
          type: "radio",
          selectedRowKeys: [selectedSimulationId],
          onChange: (selectedRowKeys) => {
            setSelectedSimulationId(selectedRowKeys[0]); // selectedRowKeys[0] is the key of the selected item provided in dataSource
          },
        }}
      />
    </div>
  );
};

export default SimulationList;
