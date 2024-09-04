

import ReactDOM from 'react-dom/client'
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'


//Paginas importe 
import Contato from './Pages/Contato/Contato.jsx'
import Sobre from './Pages/Sobre/Sobre.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {index:true, element:<HomePage/>},
      {
        path: '/HomePage',
        element: <HomePage/>
      },
      {
        path:'/Sobre',
        element: <Sobre/>
      },
      {
        path:'/Contato',
        element:<Contato/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)