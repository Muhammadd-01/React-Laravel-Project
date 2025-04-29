import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
import NotFound from './views/NotFound';
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