import React from 'react'

function login() {
  const username_ref = React.useRef();
  const password_ref = React.useRef();
  const [error, setError] = React.useState({
    isError: false,
    message: ""
  })
  const handleSignUp = (e) => {
    e.preventDefault();
    if(!localStorage.getItem("username") || !localStorage.getItem("password")) {
      setError({isError: true, message: "LogIn First!"});
    }
    const user_credentials = {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password")
    }
    if(user_credentials.username === username_ref.current.value && user_credentials.password === password_ref.current.value) {
      window.location.assign("/mealForm")
    } else setError({isError: true, message: "Username of Password not found!"});

  }
  return (
    <div className="login h-screen w-screen flex justify-center items-center gap-40 z-20" >
      <h1 className='text-white text-7xl w-1/3'>Your Next Step Towards Nutrition</h1>
        <form onSubmit={handleSignUp} className='py-8 px-4 rounded-2xl w-[28rem] backdrop-blur flex flex-col gap-8 items-center bg-[#ffffff90]'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <div className="w-11/12">
              <label htmlFor="user" className='font-semibold text-lg pl-2'>Username</label>
              <input type="text" ref={username_ref} placeholder='Username' className='w-full pl-4 text-base h-16 rounded-2xl border-none outline-none bg-[#ffffff80]'/>
            </div>
            <div className="w-11/12">
              <label htmlFor="user" className='font-semibold text-lg pl-2'>Password</label>
              <input type="password" ref={password_ref} placeholder='Password' className='w-full pl-4 text-base h-16 rounded-2xl border-none outline-none bg-[#ffffff80]'/>
            </div>
            {error.isError && error.message}
            <div className="flex w-full justify-around items-center text-3xl ">
              <i className="fa-brands fa-facebook-f" style={{color: "#1877F2"}}></i>
              <i className="fa-brands fa-linkedin" style={{color: "#1DA1F2"}}></i>
              <i className="fa-brands fa-github" style={{color: "#2b3137"}}></i>
              <i className="fa-brands fa-instagram" style={{color: 'magenta'}}></i>
            </div>
            <button className='w-9/12 px-4 py-3 rounded-2xl border-none outline-none bg-orange-500 opacity-80 text-white font-medium text-xl hover:opacity-100'>Continue
            <i className='fa-solid fa-arrow-right -rotate-45 ml-5 hover:rotate-0 hover:translate-x-2'></i></button>
        </form>
    </div>
  )
}

export default login