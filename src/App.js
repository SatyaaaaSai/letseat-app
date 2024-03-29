import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
import About from "./components/About";
import BodyContainer from "./components/BodyContainer";
import Menu from "./components/Menu";
import KitchensPage from "./components/KitchensPage";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path:"/",
        element:<BodyContainer/>
      },
      {
        path: "/signin",
        element: <Form />,
      },
      {
        path: "/signup",
        element: <Form />,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/kitchen",
        element:<KitchensPage/>
      },
      {
        path:"/menu",
        element:<Menu/>
      }
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={AppRouter}/>
    </div>
  );
}

export default App;
