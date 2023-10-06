import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,

        children:[
            {
                path: '/',
                element: <Home></Home>,
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/blog',
                element: <Blog></Blog>,
            },

            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            
        ] 
       
    }
])

export default router;