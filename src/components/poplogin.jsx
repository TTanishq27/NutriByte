import React, { useState } from 'react'
import { motion } from 'framer-motion'

function poplogin({setForm}) {

  return (
    <motion.form 
      exit={{opacity: 0, y: 100}}
      initial={{opacity: 0, y:100}} animate={{opacity: 1, y:0}} transition={{duration: .5, ease: [0.85, 0, 0.15, 1]}} className='w-1/2 z-50 p-4 bg-[#12372add] backdrop-blur-md rounded-xl flex flex-col gap-4 fixed bottom-0' style={{boxShadow: "0 0 10px #000"}}>
      <div className="flex items-center justify-between">
        <h1 className='text-base font-medium text-center bg-[#fbfada] rounded-full py-2 px-4 w-fit'>Sign Up</h1>
        <i 
          onClick={() => setForm(false)}
          className='fa-solid fa-xmark text-3xl text-[#ff3333]'></i>
      </div>
      <label htmlFor="name" className='flex flex-col gap-1'>
        <h2 className='text-[#fbfada] pl-1 text-xl'>Username</h2>
        <input type="text" className='p-4 rounded-xl border-2 border-[#fbfada] bg-[#fbfada20] outline-none text-white' placeholder='Username' required/>
      </label>
      <label htmlFor="email" className='flex flex-col gap-1'>
        <h2 className='text-[#fbfada] pl-1 text-xl'>Email</h2>
        <input type="email" className='p-4 rounded-xl border-2 border-[#fbfada] bg-[#fbfada20] outline-none text-white' placeholder='Enter email' required/>
      </label>
      <label htmlFor="pass" className='flex flex-col gap-1'>
        <h2 className='text-[#fbfada] pl-1 text-xl'>Password</h2>
        <input type="password" className='p-4 rounded-xl border-2 border-[#fbfada] bg-[#fbfada20] outline-none text-white' placeholder='Set password' required/>
      </label>
      <label htmlFor="pass" className='flex flex-col gap-1'>
        <h2 className='text-[#fbfada] pl-1 text-xl'>Confirm password</h2>
        <input type="password" className='p-4 rounded-xl border-2 border-[#fbfada] bg-[#fbfada20] outline-none text-white' placeholder='Confirm password' required/>
      </label>
      <button type='submit' className='bg-orange-500 text-white font-medium py-4 px-8 rounded-full mt-4 opacity-90 hover:opacity-100'>Submit</button>
    </motion.form>
  )
}

export default poplogin