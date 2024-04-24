import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css';
import Logo from '../logo.png'
import Pop from './poplogin';
import Calculator from './calculator';
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom';

function navbar() {

    const [form, setform] = useState(false);
    const [isCalculator, setCalculator] = useState(false);

    return (
        <React.Fragment>
            <div>
                <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5 }} className='fixed w-full h-20 flex items-center justify-center gap-24 py-1 z-10 bg-[#eef2e6]'>
                    <img src={Logo} alt="" className='h-full' />
                    <motion.ul className='md:flex hidden gap-24'>
                        <motion.li initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5, delay: .2 }} >
                            <NavLink to="/mealPlan"
                                className={({ isActive }) => `relative font-medium text-[1.2rem] cursor-pointer ${isActive ? "text-orange-500" : ""}`}>Meal Planner
                                <div className="absolute bg-[#1c6758] h-1 w-0 rounded under"></div>
                            </NavLink>
                        </motion.li>
                        <motion.li initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5, delay: .4 }}>
                            <NavLink to="/dietPlan"
                                className={({ isActive }) => `relative font-medium text-[1.2rem] cursor-pointer ${isActive ? "text-orange-500" : ""}`}>Diet Plans
                                <div className="absolute bg-[#1c6758] h-1 w-0 rounded under"></div>
                            </NavLink>
                        </motion.li>
                        <motion.li initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5, delay: .6 }}>
                            <NavLink to="/calculator"
                                className={({ isActive }) => `relative font-medium text-[1.2rem] cursor-pointer ${isActive ? "text-orange-500" : ""}`}>Calculator
                                <div className="absolute bg-[#1c6758] h-1 w-0 rounded under"></div>
                            </NavLink>
                        </motion.li>
                    </motion.ul>
                    <button onClick={() => { setform(!form) }} className='border-none outline-none bg-orange-500 text-white h-full px-8 rounded-full font-medium opacity-80 hover:opacity-100'>Get Started</button>
                </motion.nav>
            </div>
            <div className="flex justify-center items-center">
                <AnimatePresence>
                    {form && <Pop setForm={setform} />}
                </AnimatePresence>
            </div>
        </React.Fragment>
    )
}

export default navbar
