import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from '../src/alayout.jsx'
import Login from './components/login.jsx'
import Calculator from './components/calculator.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}> 
    <Route path='/calculator' element={<Calculator/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
