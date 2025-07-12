import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

serviceWorkerRegistration.register();