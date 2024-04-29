import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "../src/alayout.jsx";
import Login from "./components/login.jsx";
import Calculator from "./components/calculator.jsx";
import {
  BrowserRouter as BS,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Days from "./components/days.jsx";
import MealForm from "./components/mealForm.jsx";
import Recipe from "./components/Recipe.jsx";
import Navbar from "./components/navbar.jsx";
import Firstpage from './components/firstpage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Firstpage />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/mealForm" element={<MealForm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
