import React, { use, } from 'react';
import { IoMoon } from 'react-icons/io5';
import { RiSunFill } from 'react-icons/ri';
import { AuthContext } from '../provider/AuthProvider';

const Theme = () => {


   const {isDark, setIsDark} = use(AuthContext)


  const handleDark = () => {  
    setIsDark(!isDark);
    localStorage.setItem('isDarkMode', !isDark)
  };

  return (
    <div
      onClick={handleDark}
      className="w-11/12 pt-4 h-fit  -pb-5 flex justify-end items-end"
    >
      <h1
        className="bg-black/20 cursor-pointer hover:bg-black/40
         hover:text-white p-2 rounded-full"
      >
        {isDark ? <RiSunFill size={25} /> : <IoMoon size={25} />}
      </h1>
    </div>
  );
};

export default Theme;
