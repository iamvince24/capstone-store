import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Webtitle from "./webtitle";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Webtitle />
    <App />
  </StrictMode>
);
