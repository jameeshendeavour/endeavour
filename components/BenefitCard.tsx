import React from 'react'
import { MdOutlineSettingsBackupRestore, MdKeyboardDoubleArrowRight, MdOutlineTipsAndUpdates, MdKeyboardHide, MdTrendingUp } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FiMessageSquare, FiLayout, FiPlusCircle, FiShield } from "react-icons/fi";
import { RiStackshareLine, RiCheckboxMultipleBlankLine, RiFileListLine } from "react-icons/ri";
import { CiMobile1 } from "react-icons/ci";
import { FaRegStar, FaCheck, FaRegMoon, FaRegSquare } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa6";
import { BsAspectRatio } from "react-icons/bs";
import { IoCodeSharp, IoResize } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

const Components = {
  backup: MdOutlineSettingsBackupRestore,
  world: TbWorld,
  message: FiMessageSquare,
  sla: RiCheckboxMultipleBlankLine,
  arrow: MdKeyboardDoubleArrowRight,
  star: FaRegStar,
  layout: FiLayout,
  mobile: CiMobile1,
  aspect: BsAspectRatio,
  share: RiStackshareLine,
  code: IoCodeSharp,
  plus: FiPlusCircle,
  resize: IoResize,
  tick: FaCheck,
  shield: FiShield,
  tip: MdOutlineTipsAndUpdates,
  moon: FaRegMoon,
  keyboard: MdKeyboardHide,
  square: FaRegSquare,
  dollar: AiOutlineDollar,
  trendup: MdTrendingUp,
  file: RiFileListLine,
  laptop: FaLaptop
};

const BenefitCard = ({ icon, title, content, styleclass }: { icon: string, title: string, content: string, styleclass: string }) => {
  return (
    <div className={`flex flex-col h-auto text-center  justify-start items-center   mt-5 rounded p-5 ${styleclass}`}>
      <p className='text-2xl text-secondary'>
        {
          // @ts-ignore
          React.createElement(Components[icon], { key: icon })
        }
      </p>
      <p className='text-xl my-5'>{title}</p>
      <p className='mt-3 '>{content}</p>
    </div>
  )
}

export default BenefitCard