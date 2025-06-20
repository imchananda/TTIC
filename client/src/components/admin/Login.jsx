import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Login = () => {

  const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

  const handleSubmit = async () =>{
    e.preventDefault()
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full py-6 text-center'>
              {/* <img src={assets.logo_otp_100} alt=""/> */}
              <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span> Login</h1>
              {/* <p className='font-light'>Enter your credentials to access the admin panel</p> */}
            </div>

            {/* 🔐 Login Form */}
          {/* <form onSubmit={handleSubmit} className='w-full space-y-4'>
            <input
              type="text"
              placeholder="Username"
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50'
            />
            <input
              type="password"
              placeholder="Password"
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50'
            />
            <button
              type="submit"
              className='w-full py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition'
            >
              Login
            </button>
          </form> */}

          <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>

            <div className='flex flex-col'>
              <lebel>Email</lebel>
              <input onChange={e=> setEmail(e.target.value)} value={email} 
              type="email" required placeholder='อีเมล' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
            </div>

            <div className='flex flex-col'>
              <lebel>Password</lebel>
              <input onChange={e=> setPassword(e.target.value)} value={password}
              type="password" required placeholder='รหัสผ่าน' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
            </div>

            <button type="submit" className='w-full py-2 bg-primary text-white rounded-md cursor-pointer hover:bg-primary/80 transition-all'>Login</button>

          </form>

        </div>
      </div>
    </div>

  )
}

export default Login