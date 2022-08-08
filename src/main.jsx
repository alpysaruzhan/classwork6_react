import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ColorState from "./contexts/colorContext";
import ShopState from "./contexts/shopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopState>
      <ColorState>
        <App />
      </ColorState>
    </ShopState>
  </React.StrictMode>
);
