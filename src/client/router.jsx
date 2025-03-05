import { createBrowserRouter } from "react-router";

//  Routes
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Home/Dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <Auth /> },
  { path: "/dashboard", element: <Dashboard /> },
]);
