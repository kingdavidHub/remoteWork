import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomaPage";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: {
      element: (
        <>
          <MainLayout />
          <NotFound />
        </>
      )
    },
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
]);



function App() {

  return <RouterProvider router={router} />
}

export default App
