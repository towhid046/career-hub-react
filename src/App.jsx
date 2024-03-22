import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import Blogs from "./pages/Blog/Blogs";


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <div className="text-4xl font-bold">404 not found</div>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/appliedjobs',
          element: <AppliedJobs/>
        },
        {
          path: '/blogs',
          element: <Blogs/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;