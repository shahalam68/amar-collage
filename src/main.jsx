import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUS/ContactUs';
import HeaderTest from './components/HeaderTest/HeaderTest';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('/course.json')
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<ContactUs></ContactUs>
      },
      {
        path:'/headertest',
        element:<HeaderTest></HeaderTest>,
      },
      {
        path:'/courses',
        element:<Courses></Courses>,
        loader:() => fetch('/course.json'),
      },
      {
        path:'*',
        element:<NotFound></NotFound>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
