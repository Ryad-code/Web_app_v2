import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import App from "./App.tsx";
import NavBar from "./components/NavBar.tsx";

const Root = () => {
  return (
    <div>
      <NavBar />
      <App />
    </div>
    /*   <Link to={"/HomePage"} className="nav-link">
        {" "}
        Home <App />
      </Link>
      <Outlet /> */
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
