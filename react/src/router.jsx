import {createBrowserRouter, Navigate,  RouterProvider} from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
import NotFound from './views/NotFound';
import Dashboard from './views/Dashboard';
import GuestLayout from './components/GuestLayout';
import DefaultLayout from './components/DefaultLayout';

const router = createBrowserRouter( [

    {
        path : "/",
        element : <DefaultLayout />,
        children : [
            {
                path : "/Users",
                element : <Users/>,
              },
              {
                path : "/Dashboard",
                element : <Dashboard/>,
              },
              {
                path : "/",
                element : <Navigate to="/Users" />,
              }
        ]
    },
    {
        path : "/",
        elemnt : <GuestLayout/>,
        children : [
            {
            path : "/login",
            element : <Login/>,
          },
          {
            path : "/signup",
            element : <Signup/>,
    
          },
         
        ]
      
    },
      
     
      {
        path : "*",
        element : <NotFound/>,
      }
    
])

export default router;