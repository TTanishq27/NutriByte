import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css';
import Logo from '../logo.png'
import Pop from './poplogin';
import Calculator from './calculator';
import { AnimatePresence, motion } from 'framer-motion'

function navbar() {

    const [form, setform] = useState(false);
    const [calc, setcalc] = useState(false);
    const [isCalculator, setCalculator] = React.useState(false);

    const options = [
        { name: "Meal Planner", link: "/meal_planner" },
        { name: "Diet Plans", link: "/diet" },
        { name: "Calculator", link: "/calculator" },
    ]

    return (
        <React.Fragment>
            <div>
            <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5 }} className='fixed w-full h-20 flex items-center justify-center gap-24 py-1 z-10 bg-[#eef2e6]'>
                <img src={Logo} alt="" className='h-full' />
                <motion.ul initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5 }} className='md:flex   hidden  gap-24'>
                    {options.map((item, index) => {
                        return (
                            <motion.li
                                onClick={() => { if (item.name !== "Calculator") window.location.assign(item.link); else setCalculator(!isCalculator) }}
                                key={index} animate={{ y: 0 }} initial={{ y: -100 }} transition={{ delay: .2 * index, duration: 1.25, ease: [0.85, 0, 0.15, 1] }} className='text-[1.2rem] cursor-pointer relative font-medium'>{item.name}
                                <div className="absolute bg-[#1c6758] h-1 w-0 rounded under"></div>
                            </motion.li>
                        )
                    })}
                </motion.ul>
                <button onClick={() => { setform(!form) }} className='border-none outline-none bg-orange-500 text-white h-full px-8 rounded-full font-medium opacity-80 hover:opacity-100'>Get Started</button>
            </motion.nav>
            <AnimatePresence>
                {form && <Pop setForm={setform}/>}
            </AnimatePresence>
        </div>


                {isCalculator && <Calculator />}
        </React.Fragment>
    )
}

export default navbar
