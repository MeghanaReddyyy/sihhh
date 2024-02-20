import "./App.css"
import Router from '../src/components/Router'
import Consultation from "../src/components/Consultation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../src/components/Home";
import WellBeing from "./components/WellBeing";
import Userpage from "../src/components/Userpage";
import Lawyerpage from "../src/components/Lawyerpage";
import Procedure from "../src/components/Procedure";
import Register from "../src/components/Register";
import Email from "../src/components/Email";
import Video from "../src/components/Videocall"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Videocall from "../src/components/Videocall";
import Form1 from "../src/components/Form1";
import Admin from "./components/Admin";
function App() {
  const robj = createBrowserRouter([
    {
      path: "/",
      element: <Router/>,
      children: [
        {
          path:"/home",
          element:<Home/>
        },
        {
       
          path:'/form',
          element:<Form1/>
        },

        {

          path:"/video",
          element:<Video/>
        },
        {
          path:'/email',
          element:<Email/>
        },
      
       
        {
          path:'/register',
          element:<Register/>
        },
        
        {
          path: "/desc",
          element: <Consultation />
        },
        {
          path: "/procedure",
          element: <Procedure />
        },
        {
          path: "/wellbeing",
          element: <WellBeing />
        },
        {
          path: "/userpage",
          element: <Userpage />
        },
        {
          path: "/lawyerpage",
          element: <Lawyerpage />
        },{
          path:"/index",
          element:<index/>
        },
        {
          path:"/videocall",
          element:<Videocall/>
        },
        {
          path:"/admin",
          element: <Admin/>
        }
      ]
    }
  ]);

  
  return (
     <div className="m2">
      <RouterProvider router={robj} />

  </div>
  )
   
}
export default App;
