import React, { use } from 'react';
import RecentTaskCard from './RecentTaskCard';
import { Link } from 'react-router';
import { MdArrowOutward } from 'react-icons/md';
import { AuthContext } from '../provider/AuthProvider';

const RecentTask = ({taskData}) => {

  const {isDark} = use(AuthContext)

    return (
        <div className={   ` py-20   ${isDark? 'bg-[#D2D0A0]/20' : '' }`}>
            <div className='text-left w-11/12 lg:w-10/12 mb-8 ml-auto'>
                <h1 className=' font-semibold mb-2 text-2xl bg-amber-100 px-2 w-fit lg:text-4xl text-[#548b5a] '>Feature Task</h1>
                <p className='text-sm lg:w-full w-96'>Freshly posted tasks from real clients — find the perfect match for your talent.</p>

            </div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  w-11/12 lg:w-9/12 mx-auto gap-5">
                {
                    taskData?.map(task=> <RecentTaskCard key={task._id} task={task} ></RecentTaskCard> )
                }
            </div>

            <div className='text-center'>
                 <Link to="/all-tasks">
                <button className="btn mt-8 col-span-full border-none shadow-[5px_0px_15px_0px_rgba(0,128,0,0.5)] relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  ">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative flex gap-2 items-center">
                    {" "}
                    See All Task <MdArrowOutward size={20} />
                  </span>
                </button>
              </Link>
            </div>

        </div>
    );
};

export default RecentTask;