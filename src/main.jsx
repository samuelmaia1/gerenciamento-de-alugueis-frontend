import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import { MaterialRegister } from './routes/MaterialRegister.jsx'
import { MaterialsPage } from './routes/MaterialsPage.jsx'
import { ErrorPage } from './routes/ErrorPage.jsx'
import { Material } from './routes/Material.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/materiais',
    element: <MaterialsPage/>
  },
  {
    path: '/materiais/adicionar',
    element: <MaterialRegister/>
  },
  {
    path: '/materiais/:id',
    element: <Material/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  ,
)
