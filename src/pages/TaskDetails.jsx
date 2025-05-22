import React from "react";
import { useLoaderData } from "react-router";

const TaskDetails = () => {
  const task = useLoaderData();
  console.log(task);

  if (!task.name) {
    return <p>error</p>;
  }

  return (
    <div className="lg:w-9/12 mx-auto  w-11/12 py-10 ">
      <h1 className="text-5xl text-blue-700 font-bold text-center py-8">
        task details{" "}
      </h1>

      <div className="w-11/12 mx-auto flex lg:flex-row flex-col shadow-[0px_8px_30px_0px_rgba(0,0,0,0.12)] bg-green-300/10 items-center gap-10 justify-between lg:px-10 px-5 py-8 border border-amber-100 rounded-2xl ">
        <img className="w-72 h-full" src={task.photo} alt={task.title} />

        <div className=" mx-auto">
          <h1 className="text-2xl text-[#537D5D] font-semibold">
            {task.title}
          </h1>

          <h2 className="text-blue-950 lg:w-10/12 py-3  text-left text-sm ">
            {" "}
            <span className="font-bold">Task Description :</span>{" "}
            {task.description}
          </h2>

          <h2 className="my-2">
            <span className="bg-green-800/15 px-2 py-1 mr-0.5 ">
              Task Category{" "}
            </span>{" "}
            : <span className="font-semibold">{task.category} </span>
          </h2>

          <h2 className="my-3">
            <span className="bg-green-800/15 px-2 py-1 mr-0.5 ">
              Task Budget{" "}
            </span>{" "}
            : <span className="font-semibold">{task.budget}Taka </span>
          </h2>

          <h2 className="my-2">
            <span className="bg-red-800/15 px-2 py-1 mr-0.5 ">
              Task Deadline{" "}
            </span>{" "}
            : <span className="font-semibold text-red-500">{task.dob} </span>
          </h2>
         <button className="btn my-5 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  ">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Bid Task</span>
            </button>
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

export default TaskDetails;
