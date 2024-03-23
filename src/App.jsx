import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import Blogs from "./pages/Blog/Blogs";
import JobDetails from './components/JobDetails/JobDetails';
import NotFound from './pages/NotFound/NotFound';


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <NotFound/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/appliedjobs',
          element: <h2 className="flex justify-center items-center text-center px-4 h-[90vh] font-bold text-3xl text-gray-400">You have not applied any job yet!</h2>
        },
        {
          path: '/job/:id',
          loader: () => fetch(`jobs.json`),
          element: <JobDetails/>
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