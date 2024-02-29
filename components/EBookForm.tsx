"use client"

import Link from 'next/link';
import React, { useState } from 'react'
const FORM_ENDPOINT = 'https://herotofu.com/start';
import emailjs from "@emailjs/browser";

const EBookForm = () => {
  const [focused, setFocusted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    company: "",
    agree: 'false'
  })
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_wbrstdv',
        'template_z5ek7y6',
        {
          from_name: `${user.first} ${user.last}`,
          to_name: "JavaScript Mastery",
          from_email: user.email,
          to_email: "sujata@jsmastery.pro",
          message: user.company,
        },
        'Ty7pEGFNTAjdexRNx'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setUser({
            email: "",
            first: "",
            last: "",
            company: "",
            agree: 'false'
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="w-full md:max-w-[1000px] mt-10 mb-5">
      <div className=" flex flex-col flex-grow">
        <form className='flex flex-col'>
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
          <div className='flex flex-row justify-between gap-5 lg:gap-10'>
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
              <span className="text-gray-700">Last Name</span><span className='text-secondary'>{`*`}</span>
              <input
                type="text"
                name="last"
                className=" block w-full border-[#CBD6E2] border py-2 rounded-sm px-3 bg-[#F5F8FA] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                placeholder=""
                value={user['last']}
                pattern="^[A-Za-z0-9]{3,16}$"
                required
                onBlur={handleFocus} onFocus={handleInput}
                onChange={onchanage}
              />
              <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid Last Name
              </span>
            </label>
          </div>

          <label className="block mb-6 w-full">
            <span className="text-gray-700">Company Name</span><span className='text-secondary'>{`*`}</span>
            <input
              type="text"
              name="company"
              className=" block w-full border-[#CBD6E2] border py-2 rounded-sm px-3 bg-[#F5F8FA] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
              placeholder=""
              value={user['company']}
              pattern="^[A-Za-z0-9]{3,16}$"
              required
              onBlur={handleFocus} onFocus={handleInput}
              onChange={onchanage}
            />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a valid Company Name
            </span>
          </label>




          <p className=''> Endeavour Technology is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you: </p>
          <p className='my-3 px-2'> <input type='checkbox' value={user['agree']} onClick={onchanage} /> I agree to receive other communications from Endeavour Technology. </p>
          <p className='my-3 '> You may unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our <Link href="https://26019833.fs1.hubspotusercontent-eu1.net/hubfs/26019833/Endeavour%20Technology%20-%20Private%20Policy.pdf" className='underline text-blue-700'>Privacy Policy</Link>.</p>
          <p className='my-3 '> By clicking submit below, you consent to allow Endeavour Technology to store and process the personal information submitted above to provide you the content requested. </p>

          <div className="mb-2 mt-10">
            <button
              className="hover:scale-105 transition delay-75  px-10 text-white text-[16px] font-semibold w-auto py-2.5  bg-secondary rounded-sm "
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EBookForm