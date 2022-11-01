import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "antd/dist/antd.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
      {/* This is a dev tool to help you debug your queries */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
