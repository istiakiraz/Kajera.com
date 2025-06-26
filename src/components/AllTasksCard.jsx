import React from 'react';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router";

const AllTasksCard = ({task}) => {
    return (
         <div>
      <div className="card bg-blue-200/10 h-[600px]  w-full border transition-all duration-300 hover:scale-95 border-[#2b492e]/10 shadow-sm">
        <figure>
          <img className="size-80 w-full object-cover" src={task.photo} alt={task.title} />
        </figure>

        <div className="flex flex-col   w-11/12 mx-auto py-5 space-y-3 ">
          <span className="text-[#2b492e] p-1 badge justify-start border border-[#182d4d] px-3 bg-[#54658b]/30 rounded-2xl">
            {task.category}
          </span>
          <h2 className="card-title  hover:text-green-700   hover:underline  pb-3 border-gray-200 border-b-1 ">
            {task.title}
          </h2>

          <h4 className="flex gap-1 px-3 items-center"> <FaMoneyCheckDollar color="green" /> Project Budget : <span className='font-bold' >৳{task.budget}</span></h4>
          {/* <h4 className="text-[#495c78] border flex gap-1 items-center hover:bg-blue-200 hover:text-black/80 text-sm border-blue-200 bg-white/70 p-1 w-fit px-3 rounded-2xl"> <MdOutlineAccessTimeFilled />Project Deadline : {task.dob}</h4> */}
          
        </div>
        
        <div className="  w-11/12 mx-auto pb-5 ">
        <Link to={`/task-details/${task._id}`}>
        <button className="btn col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#495c78]  hover:bg-gradient-to-r hover:from-[#495c78] hover:to-[#495c78] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#495c78] transition-all ease-out duration-300  ">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">See Details</span>
            
            
            </button></Link>
       <div className="text-sm card-actions justify-end">
        <h1 className="font-bold">Assigned By:</h1>
         <div>
          {task.userPhoto ? 
                <div className="flex gap-1 items-end">
                  <img
                    className="size-8 border border-green-700 rounded-full object-cover"
                    src={task?.userPhoto}
                    alt={task.name}
                  />

                  <h1>{task.name}</h1>
                </div> : <h1>{task.name}</h1>
              }
            
        <h1 className="text-gray-400 text-[13px]">{task.email}</h1>
         </div>
       </div>
            
        </div>
      </div>
    </div>
    );
};

export default AllTasksCard;