import App from "./App.tsx";
import "./index.css";
import MainContainer from "./components/MainContainer.tsx";

import * as React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Link to={"/HomePage"} className="nav-link">
        {" "}
        Home <App />
      </Link>
      <MainContainer />
      <Outlet />
    </div>
  );
};

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* <Route path="/Homepage" element={<HomePage />} /> */}
      {/* <Route path="/Seconpage" element={<SecondPage />} /> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
