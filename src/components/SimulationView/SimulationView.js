import { line } from "@observablehq/plot";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PlotFigure } from "plot-react";
import React from "react";

const fakedata = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 4, y: 4 },
  { x: 5, y: 5 },
];

const SimulationView = ({ simulationId }) => {
  // TODO : get the simulation from the API
  // TODO : display the simulation name and description
  // TODO : display the simulation data in a chart

  const { data } = useQuery(["simulation", simulationId], async () => {
    const response = await axios.get(
      `http://localhost:3001/simulation/${simulationId}`
    );
    return response.data;
  });
  if (!data) return null;
  console.log(data);
  return (
    <div>
      <h2>{data.name}</h2>
      <p>
        <strong>description:</strong> {data.description}
      </p>
      <PlotFigure
        options={{
          marks: [
            line(
              data.data.map((d) => ({ ...d, time: new Date(d.time) })),
              {
                x: "time",
                y: "value",
                stroke: "dodgerblue",
              }
            ),
          ],
        }}
      />
    </div>
  );
};

export default SimulationView;
