import ErrorPage from "../error-page.tsx";
import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup.tsx";
import App from "../App.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
  {
    path: "login",
    element: <Signup />,
  },
  {
    path: "sign",
    element: <Signup />,
  },
]);

export default route;
