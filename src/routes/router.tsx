import ErrorPage from "@/error-page.tsx";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "@/pages/Signup";
import Login from "@/pages/Login";
import App from "@/App.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign",
    element: <SignUp />,
  },
]);

export default route;
