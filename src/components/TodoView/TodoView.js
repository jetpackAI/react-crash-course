import { PlotFigure } from "plot-react";
import * as Plot from "@observablehq/plot";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fakedata = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 4, y: 4 },
  { x: 5, y: 5 },
];

const TodoView = ({ todo }) => {
  // TODO : get the simulation from the API
  // TODO : display the simulation name and description
  // TODO : display the simulation data in a chart

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
    <div>
      <h2>Todo View</h2>
      <div>show here informations you can show about the todo</div>
      <div>API call returned : {helloWorldData?.data}</div>
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

export default TodoView;
