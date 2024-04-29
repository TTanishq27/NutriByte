import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import Logo from "../logo.png";
import Pop from "./poplogin";
import Calculator from "./calculator";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function navbar() {

  if(!localStorage.getItem("username")){
    localStorage.setItem("username", "Username")
  }
  const [form, setform] = useState(false);
  const [isCalculator, setCalculator] = useState(false);
  const [isClicked, setClicked] = React.useState(false);
  const [user, setUser] = React.useState("Username");

  React.useEffect(() => {
    if(localStorage.getItem("username") !== "Username") {
      setUser(localStorage.getItem("username"));
      setClicked(true);
    }
  }, [])

  React.useEffect(() => {
    if(isClicked) {
  setUser(localStorage.getItem("username"));

    }
  }, [isClicked, form, user])
  return (
    <React.Fragment>
      <div>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-20 fixed w-full h-20 flex items-center justify-center gap-24 py-1 bg-[#eef2e6]"
        >
          <NavLink to="/">
            <img src={Logo} alt="" className="h-[4.5rem] rounded-md" />
          </NavLink>
          <motion.ul className="md:flex hidden gap-24">
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NavLink
                to="/mealForm"
                className={({ isActive }) =>
                  `relative font-medium text-[1.2rem] cursor-pointer ${
                    isActive ? "text-orange-500" : ""
                  }`
                }
              >
                Meal Planner
                <div className="absolute bg-[#1c6758] h-1 w-0 rounded under"></div>
              </NavLink>
            </motion.li>
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <NavLink
                to="/recipe"
                className={({ isActive }) =>
                  `relative font-medium text-[1.2rem] cursor-pointer ${
                    isActive ? "text-orange-500" : ""
                  }`
                }
              >
                Get Recipes
                <div className="absolute bg-[#1c6758] h-1 w-0 rounded under"></div>
              </NavLink>
            </motion.li>
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => setCalculator(true)}
              className={"relative font-medium text-[1.2rem] cursor-pointer"}
            >
              Calculator
              <div className="absolute bg-[#1c6758] h-1 w-0 rounded under"></div>
            </motion.li>
          </motion.ul>
          <button
            onClick={() => {
              setClicked(true);
              if(!isClicked) setform(!form);
            }}
            className="border-none outline-none bg-orange-500 text-white h-full px-8 rounded-full font-medium opacity-80 hover:opacity-100"
          >
            {isClicked ? <span>{user}</span> : <span>Get Started</span>}
          </button>
        </motion.nav>
      </div>
      <div className="flex justify-center items-center">
        <AnimatePresence>{form && <Pop setForm={setform} form={form}/>}</AnimatePresence>
        <AnimatePresence>
          {isCalculator && <Calculator setState={setCalculator} />}
        </AnimatePresence>
      </div>
    </React.Fragment>
  );
}

export default navbar;
