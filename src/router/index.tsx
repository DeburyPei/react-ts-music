import React, {lazy} from "react";
import {Navigate, RouteObject} from "react-router-dom";

const Discover = lazy(()=>import('@/views/discover'))
const Mine = lazy(()=>import('@/views/mine'))
const Focus = lazy(()=>import('@/views/focus'))
const Download = lazy(()=>import('@/views/download'))


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