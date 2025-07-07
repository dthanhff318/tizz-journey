import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Dashboard";
import AuthCallback from "../AuthCallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/callback",
    element: <AuthCallback />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
