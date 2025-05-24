import React, { use, } from 'react';
import { IoMoon } from 'react-icons/io5';
import { RiSunFill } from 'react-icons/ri';
import { AuthContext } from '../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';

const Theme = () => {


   const {isDark, setIsDark} = use(AuthContext)


  const handleDark = () => {  
    setIsDark(!isDark);
    localStorage.setItem('isDarkMode', !isDark)
  };

  return (
    <div
      onClick={handleDark}
      className=" w-fit  ml-auto lg:pr-40 pr-5 -pb-5 flex justify-end items-end"
    >
<a
  data-tooltip-id="my-tooltip"
  data-tooltip-content="Change Theme"
  data-tooltip-place="bottom"
>
     <h1
        className="bg-black/20 cursor-pointer hover:bg-black/40
         hover:text-white p-2 rounded-full"
      > 
        {isDark ? <RiSunFill size={25} /> : <IoMoon size={25} />}
      </h1>
</a>
<Tooltip id="my-tooltip" />
     

    </div>
  );
};

export default Theme;
