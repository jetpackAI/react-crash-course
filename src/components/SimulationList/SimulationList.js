import { Table } from "antd";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import axios from "axios";
import React from "react";

const SimulationList = ({ selectedSimulationId, setSelectedSimulationId }) => {
  const { data = [] } = useQuery(["list"], async () => {
    const response = await axios.get("http://localhost:3001/simulations");
    console.log(response);
    return response.data;
  });
  return (
    <div>
      <Table
        columns={[
          {
            title: "Name",
            dataIndex: "name",
          },
        ]}
        dataSource={data.map((d) => ({ ...d, key: d.id }))}
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
