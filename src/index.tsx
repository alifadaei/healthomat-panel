import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Preloader from "./Components/UI/Preloader/Preloader";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <React.Suspense fallback={<Preloader isOpen={true} />}>
          <App />
        </React.Suspense>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
