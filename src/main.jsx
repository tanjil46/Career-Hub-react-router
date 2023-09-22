import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/Root';
import Hoom from './componets/Hoom';
import Appliedjob from './componets/Appliedjob';
import ErrorPage from './componets/ErrorPage';
import JobDetails from './componets/JobDetails';
import JobsCategory from './componets/JobsCategory';



const router=createBrowserRouter([

{
  path:'/',
  element:<Root></Root>,
  errorElement:<ErrorPage></ErrorPage>,
children:[
{
  path:'/',
  element:<Hoom></Hoom>
},
{
  path:'/apply',
  element:<Appliedjob></Appliedjob>,
  loader:()=>fetch('jobs.json')
},
{
  path:'/job/:id',
  loader:()=>fetch('jobs.json'),
 element:<JobDetails></JobDetails>
},
{
  path:'/jobs',
  loader:()=>fetch('categories.json'),
  element:<JobsCategory></JobsCategory>
}





]
  
}






]);

















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
