import React, { useState } from 'react'

const Input = ({ value, onchange, name, label, type, required, extra, align, error, pattern }: { value: string, onchange: any, name: string, label: string, type: string, required: boolean, extra: string, align: string, error: string, pattern: string }) => {

  const [focused, setFocusted] = useState(false);

  const handleFocus = (e) => {

    setFocusted(true);
  }


  const handleInput = (e) => {

    setFocusted(false);

  }
  return (
    <div className={`flex flex-col gap-2 ${align}`}>
      <label htmlFor="username" className='text-sm'>
        {label}<span className='text-gray-400'>{`${extra}`}</span>
      </label>
      <input type={type} className='border border-[#7676767] rounded block w-full px-[15px] py-[10px] outline-none' name={name} value={value} onChange={onchange} required={required} pattern={pattern} onBlur={handleFocus} focused={focused.toString()} onFocus={handleInput} />
      <span className='text-red-600 hidden custom-rule'>{error}</span>
    </div>
  )
}

export default Input