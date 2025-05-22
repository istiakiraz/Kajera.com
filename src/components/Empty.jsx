import Lottie from 'lottie-react';
import React from 'react';
import empty from '../../public/empty.json'
import { Link } from 'react-router';

const Empty = () => {
    return (
        <div className='min-h-screen flex flex-col  justify-center items-center mx-auto'>
            <Lottie className='w-96 -mt-40 '  animationData={empty} />
           <div className='bg-[#548b5a]/10 p-8 lg:w-6/12 w-11/12 rounded-3xl border border-[#548b5a]/60'>
             <h1 className='md:text-4xl  text-[#548b5a] text-2xl w-11/12  mx-auto text-center font-medium'>You haven’t created any tasks in  <span className='muso font-extrabold'>KAJERO</span> yet.</h1>

            <div className='w-6/12  mt-4 md:w-3/12 mx-auto '>
                 <Link to="/add-task">
                <button className="btn col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  ">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Create a new task</span>
            </button>
              </Link>
            </div>
           </div>
        </div>
    );
};

export default Empty;