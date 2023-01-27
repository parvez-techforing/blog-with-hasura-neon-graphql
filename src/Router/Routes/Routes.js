import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <h1>Home</h1>,
        },
      ]
    }
  ]);

export default router;