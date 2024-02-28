"use client"

import Link from 'next/link';
import React, { useState } from 'react'
const FORM_ENDPOINT = 'https://herotofu.com/start';


const ContactForm = () => {
  const [focused, setFocusted] = useState(false);

  const handleFocus = (e: any) => {
    setFocusted(true);
  }

  const onchanage = (e: any) => {

    setUser({ ...user, [e.target.name]: e.target.value });

  }

  const handleInput = (e: any) => {
    setFocusted(false);
  }

  const [user, setUser] = useState({
    email: "",
    first: "",
    last: "",
    message: ""
  })

  return (
    <div className="w-full md:max-w-[1000px] mt-10 mb-5">
      <div className=" flex flex-col flex-grow">
        <form className='flex flex-col'>


          <div className='flex flex-row justify-between gap-2'>
            <label className="block mb-6 w-full">
              <span className="text-gray-700">First Name</span><span className='text-secondary'>{`*`}</span>
              <input
                type="text"
                name="first"
                className=" block w-full border-[#CBD6E2] border py-2 rounded-sm px-3 bg-[#F5F8FA] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                placeholder=""
                value={user['first']}
                pattern="^[A-Za-z0-9]{3,16}$"
                required
                onBlur={handleFocus} onFocus={handleInput}
                onChange={onchanage}
              />
              <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid Fist Name
              </span>
            </label>


            <label className="block mb-6 w-full">
              <span className="text-gray-700">Last Name</span>
              <input
                type="text"
                name="last"
                className=" block w-full border-[#CBD6E2] border py-2 rounded-sm px-3 bg-[#F5F8FA] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                placeholder=""
                value={user['last']}
                onBlur={handleFocus} onFocus={handleInput}
                onChange={onchanage}
              />
            </label>
          </div>


          <label className="block mb-6">
            <span className="text-gray-700">Email</span><span className='text-secondary'>{`*`}</span>
            <input
              type="email"
              name="email"
              className=" block w-full border-[#CBD6E2] border py-2 rounded-sm px-3 bg-[#F5F8FA] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
              placeholder=""
              value={user['email']}
              pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
              required
              onBlur={handleFocus} onFocus={handleInput}
              onChange={onchanage}
            />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a valid email address
            </span>
          </label>


          <label className="block mb-6 w-full">
            <span className="text-gray-700">Comment or Message</span><span className='text-secondary'>{`*`}</span>
            <textarea
              name="message"
              rows={4}
              cols={50}
              className=" block w-full border-[#CBD6E2] border py-2 rounded-sm px-3 bg-[#F5F8FA] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
              placeholder=""
              value={user['message']}
              required
              onBlur={handleFocus} onFocus={handleInput}
              onChange={onchanage}
            />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a valid Company Name
            </span>
          </label>




          <div className="mb-2 mt-10">
            <button
              className="hover:scale-105 transition delay-75  px-10 text-white text-[16px] font-semibold w-auto py-2.5  bg-secondary rounded-sm "
              onClick={(e) => { e.preventDefault(); console.log(user) }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm