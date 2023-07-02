import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./routes.tsx";
import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
