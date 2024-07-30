import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { setItem } from 'localforage'
import SidebarWithBurgerMenu from '../components/Sidebar'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmission = async (e) => {
    try {
      const response = await fetch('http://localhost:8000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            email: email,
            password: password
          }
        ),
      });
      const data = await response.json();
      if (response.status === 200) {
        alert('User created successfully')
      }
      setItem('id', data.user._id)
      console.log(data); // Handle response from the API
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <>
    <Navbar/>
    <SidebarWithBurgerMenu/>
<section class="relative py-20 px-20 xl:py-10 overflow-hidden">
<div class="container px-4 mx-auto">
<div class="max-w-7xl mx-auto">
<div class="flex flex-wrap -mx-4 items-center">
<div class="w-full lg:w-1/2 px-4">
    <div class="relative max-w-md lg:max-w-2xl mx-auto lg:mr-0">
      <img class="block h-full w-full" src="./sign-up/image-funny.png" alt=""/>
      <div class="absolute bottom-0 w-full left-0 p-4 lg:px-12 xl:px-20 sm:pb-16">
        <div class="p-10 backdrop-blur-md backdrop-filter bg-black bg-opacity-30 rounded-5xl">
          <p class="text-white font-medium mb-6">I’m impressed with the result I’ve seen since starting to use this product, I begin notocing difference in the first week.</p>
          <div class="flex items-start">
            <img src="./sign-up/avatar-pink.png" alt=""/>
            <div class="ml-4">
              <span class="block text-white font-medium leading-none">Maria Jola</span>
              <span class="text-xs text-white opacity-50">Staff Accounting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
    <div class="max-w-md mx-auto lg:mx-0">
      <h3 class="font-heading text-4xl text-gray-300 font-semibold mb-4">Sign in to your account</h3>
      <p class="text-lg text-gray-300 mb-10">Greetings on your return! We kindly request you to enter your details.</p>
      
      <form onSubmit={
              (e) => {
                e.preventDefault()
                handleSubmission()
              }
            }
       action="">
        <div class="mb-6">
          <label class="block mb-1.5 text-sm text-gray-300 font-semibold" for="">Email</label>
          <input class="w-full py-3 px-4 text-sm text-gray-300 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="email" placeholder="pat@saturn.dev" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div class="mb-7">
          <div class="flex mb-1.5 items-center justify-between">
            <label class="block text-sm text-gray-300 font-semibold" for="">Password</label>
            <a class="inline-block text-xs font-semibold text-orange-900 hover:text-gray-300" href="#">Forget password?</a>
          </div>
          <div class="relative">
            <input class="w-full py-3 px-4 text-sm text-gray-300 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
              <img src="./sign-up/icon-eye.svg" alt=""/>
            </button>
          </div>
        </div>
        <div class="flex mb-6 items-center">
          <input type="checkbox" value="" id=""/>
          <label class="ml-2 text-xs text-gray-800" for="">Remember for 30 days</label>
        </div>
        <button class="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden" type="submit">
          <div class="absolute top-0 right-full w-full h-full bg-gray-500 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
          <span class="relative">Login</span>
        </button>
        <span class="text-xs font-semibold text-gray-300">
          <span>Don’t have an account?</span>
          <a class="inline-block ml-1 text-orange-900 hover:text-orange-700" href="/signin">Sign up</a>
        </span>
      </form>
    </div>
  </div>
 
</div>
</div>
</div>
</section>
<Footer/>
</>
  )
}

export default Login