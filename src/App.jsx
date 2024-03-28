import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blog/Blogs";
import JobDetails from "./components/JobDetails/JobDetails";
import NotFound from "./pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import Login from './pages/Login/Login';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/appliedjobs",
          element: <AppliedJobs />,
          loader: () => fetch("/jobs.json"),
        },
        {
          path: "/job/:id",
          loader: () => fetch(`jobs.json`),
          element: <JobDetails />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: '/sign-up',
          element: <Login/>
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
