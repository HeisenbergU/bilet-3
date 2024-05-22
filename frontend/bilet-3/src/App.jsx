
import "./App.css";
// import { Counter } from "./redux/counter/counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {


  const router = createBrowserRouter(routes);


  return (
    <>
     <RouterProvider router={router} />
      {/* <Counter /> */}
    </>
  );
}

export default App;
