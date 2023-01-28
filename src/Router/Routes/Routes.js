import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import SingleBlog from "../../Pages/Home/SingleBlog/SingleBlog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog/:id",
          element: <SingleBlog />,
        }
      ]
    }
  ]);

export default router;