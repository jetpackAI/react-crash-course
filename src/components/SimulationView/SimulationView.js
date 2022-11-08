import { PlotFigure } from "plot-react";
import { line } from "@observablehq/plot";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const SimulationView = ({ simulationId }) => {
  const { data } = useQuery(["simulation", simulationId], async () => {
    const response = await axios.get(`/simulation/${simulationId}`);
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
