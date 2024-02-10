import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "symbol-observable";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard.jsx";
import App from "./App.jsx";

// defining pages, using createBrowserRouter from React router dom, with routes:
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/profiles/:profileId",
        element: <Profile />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/SignUp",
        element: <SignUp />
      },
      {
        path: "/Dashboard",
        element: <Dashboard />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
