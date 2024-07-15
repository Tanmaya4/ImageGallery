import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Uploader from "./Components/Uploader.jsx";
import Gallery from "./Components/Gallery.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Uploader />
    <Gallery />
  </React.StrictMode>
);
