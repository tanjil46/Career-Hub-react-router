import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/Root';
import Hoom from './componets/Hoom';

import ErrorPage from './componets/ErrorPage';
import JobDetails from './componets/JobDetails';
import JobsCategory from './componets/JobsCategory';
import Fover from './componets/Fover';
import Login from './componets/Login';
import Resisterform from './componets/Resisterform';
import Provider from './componets/Provider';
import Private from './componets/Private';



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
  path:'/job/:id',
  loader:()=>fetch('jobs.json'),
 element:<Private><JobDetails></JobDetails></Private>
},
{
  path:'/jobs',
  loader:()=>fetch('categories.json'),
  element:<JobsCategory></JobsCategory>
},
{
  path:'/static',
  element:<Fover></Fover>
},
{
  path:'/login',
  element:<Login></Login>
},
{
  path:'/resis',
  element:<Resisterform></Resisterform>
}




]
  
}






]);

















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider>
<RouterProvider router={router}></RouterProvider>
</Provider>
  </React.StrictMode>,
)
