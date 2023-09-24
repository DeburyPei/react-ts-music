import React from "react";
import {Navigate, RouteObject} from "react-router-dom";
import Discover from "@/views/discover";
import Download from "@/views/download";
import Focus from "@/views/focus";
import Mine from "@/views/mine";
const routes:RouteObject[] = [
    {
        path:'/',
        element:<Navigate to="/discover" />
    },
    {
        path:'/discover',
        element:<Discover />
    },
    {
        path:'/mine',
        element:<Mine />
    },
    {
        path:'/fouces',
        element:<Focus />
    },
    {
        path:'/download',
        element:<Download />
    }
]

export default routes