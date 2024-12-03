import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Blogs from './Blogs.jsx'
import CreateBlog from './CreateBlog'
import DisplayBlog from './DisplayBlog'
import Home from './Home'
import './index.css'

const rout = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:'/create',
        element:<CreateBlog />
      },
      {
        path:'/blogs',
        element:<Blogs />
      },
      {
        path:'/display/:id',
        element:<DisplayBlog />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rout}/>
  </StrictMode>,
)
