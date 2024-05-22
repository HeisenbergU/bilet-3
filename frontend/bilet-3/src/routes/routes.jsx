import Layout from "../pages/Layout";
import Home from "../pages/Home";

import Basket from "../pages/basket";




const routes =[
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/home",
          element: <Home/>,
        },
        {
          path: "/basket",
          element: <Basket/>,
        },
      ]
     
    },
    
  ];


  export default routes