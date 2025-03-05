import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import TableUser from "./components/TableUser.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <TableUser />
    <App />
  </StrictMode>
);
