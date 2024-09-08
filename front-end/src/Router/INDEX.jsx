import { createBrowserRouter } from "react-router-dom";
import React from 'react';
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import Notfound from "../pages/Notfound";
import Layout from "../layouts/layout";


export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children :[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/Register',
                element: <Register/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '*',
                element: <Notfound/>
            }
        ]
    }
]);
