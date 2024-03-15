"use client"


import React, { useEffect } from 'react'


const HubSpotForm = ({ formId, style }: { formId: string, style?: string }) => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          portalId: '26019833',
          formId,
          target: '#hubspotForm'
        })
      }
    });
  }, []);

  return (
    <div id="hubspotForm" className={style}></div>
  )
}

export default HubSpotForm