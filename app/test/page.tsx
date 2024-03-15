'use client'

import React, { useEffect } from 'react';


const page = () => {
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
          formId: '72841e96-0be2-432a-9826-998442a61b81',
          target: '#hubspotForm'
        })
      }
    });
  }, []);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );

}

export default page