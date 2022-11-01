import { PlotFigure } from "plot-react";
import * as Plot from "@observablehq/plot";
import React from "react";
import {} from "@tanstack/react-query";

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

  return (
    <div>
      <h2>SimulationView</h2>
      <PlotFigure
        options={{
          marks: [
            Plot.line(fakedata, {
              x: "x",
              y: "y",
              stroke: "dodgerblue",
            }),
          ],
        }}
      />
    </div>
  );
};

export default SimulationView;
