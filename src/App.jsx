import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import jobsLoader from "./loaders/unit/jobsLoader";
import Job from "./pages/Job";
import jobLoader from "./loaders/unit/jobLoader";
import CreateJob from "./pages/CreateJob";

const routes = [
  {
    path: "/",
    element: <Home />,
    loader: jobsLoader,
    hydrateFallbackElement: <p>Loading...</p>
  },
  {
    path: "/job/:id",
    element: <Job />,
    loader: jobLoader,
    hydrateFallbackElement: <p>Loading...</p>
  },
  {
    path: "/job/create",
    element: <CreateJob />
  }
]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const App = () => {
  return <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
    }}
  />;
}

export default App;