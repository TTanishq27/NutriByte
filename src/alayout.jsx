import React from 'react'
import App from './App'
import Navbar from './components/navbar'
import Days from './components/days'
import Page1 from './components/page1'
import Login from './components/login'
import Scroll from './components/scroll'
import Count from './components/count'
import Test from './components/test'
import API from './components/API'
import Pop from './components/poplogin'
import Calculator from './components/calculator'
import MealForm from './components/mealForm'
import { Outlet } from 'react-router-dom'

function layout() {
    return (
        <div>
            <Navbar />
            <Page1 />
            <Count />
            <Scroll />
            <Login />
        </div>
    )
}

export default layout