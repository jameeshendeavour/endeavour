import React, { useState } from 'react'
import Link from 'next/link';

import { MenuItem } from './Navbar';
import { RxCaretDown } from "react-icons/rx";
interface Props {
  item: MenuItem;
}

export default function Dropdown(props: Props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children ? item.children : [];

  const toggle = () => {
    setIsOpen(old => !old);
  }

  const transClass = isOpen
    ?
    "flex"
    :
    "hidden";

  return (
    <>
      <div onMouseLeave={() => setIsOpen(false)} className="flex flex-col items-end mt-4 md:inline-block md:mt-0 text-white-200 ml-8 mr-8">
        <button
          className="block mt-4 lg:inline-block lg:mt-0 text-white-200"
          onClick={toggle}
          onMouseOver={() => setIsOpen(true)}
        >{item.title} <RxCaretDown className='inline-block' /></button>
        <div className={`absolute top-8 z-30 w-[250px] h-auto flex flex-col py-4 bg-white rounded-md ${transClass}`} >
          {
            menuItems.map((item, index) =>
              <Link
                key={item.id}
                className=" hover:text-secondary text-start px-4 py-1"
                href={item?.route || ''}
                onClick={() => setIsOpen(false)}
              >{item.title} </Link>
            )
          }
        </div>
      </div>
      {
        isOpen
          ?
          <div
            className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-transparent"
            onClick={() => setIsOpen(false)}
          ></div>
          :
          <></>
      }
    </>
  )
}