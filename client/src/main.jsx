import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "symbol-observable";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Page404 from "./pages/Page404.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LostItems from "./pages/lostitems.jsx";
import FoundItems from "./pages/founditems.jsx";
//import Profile from "./pages/profile.jsx";
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
      // {
      //   path: "/profile",
      //   element: <Profile />
      // },
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
      {
        path: "/lostitems",
        element: <LostItems />,
      },
      {
        path: "/founditems",
        element: <FoundItems />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
