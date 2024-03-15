"use client"


import React, { useEffect } from 'react'


const HSContactForm = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: '26019833',
          formId: '0d9890a0-0e10-4683-b4c1-b4e38be1e484',
          target: '#hubspotForm'
        })
      }
    });
  }, []);

  return (
    <div id="hubspotForm" className='flex justify-center w-full ml-[25%] mt-5'></div>
  )
}

export default HSContactForm