import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Error from "../components/Error";

const TaskDetails = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const task = useLoaderData();
  const { user, isDark } = use(AuthContext);

  const [bidCount, setBidCount] = useState(0);
  const [check, setCheck] = useState("");

  useEffect(() => {
    fetch(`https://kajero-server.vercel.app/bids/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBidCount(data.length);

        const check = data.map((d) => d.taskId);
        setCheck(check);
      });
  }, [user?.email]);

  const handleBid = () => {
    const bidInfo = {
      userEmail: user?.email,
      taskId: task._id,
    };

    // Step 1: add new bid
    fetch("https://kajero-server.vercel.app/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bidInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          return Toast.fire({
            icon: "error",
            title: "You have already bid on this task.",
          });
        }

        // Step 2: If bid is new, then increase bid count
        const bidCount = task.bid + 1;

        return fetch(`https://kajero-server.vercel.app/tasks/${task._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ bid: bidCount }),
        });
      })
      .then((res) => res?.json?.())
      .then((data) => {
        if (data.modifiedCount) {
          setBidCount(bidCount + 1);
          Toast.fire({
            icon: "success",
            title: "Your bid was placed successfully!",
          });
        }
      });
  };

  if (!task.name) {
    return <Error></Error>;
  }

  return (
    <div  className={` -mt-18 ${isDark? 'bg-[#D2D0A0]/20' : '' }`}>
      <div className="lg:w-9/12 mx-auto  w-11/12 py-10 ">
      <div className="bg-[#9EBC8A] lg:mx-15 border ml-auto shadow-[5px_0px_15px_0px_rgba(0,128,0,0.5)] text-sm text-gray-800 border-green-700 rounded-2xl  w-fit px-2 lg:px-4 py-1 ">
        You bid for <span className="font-bold">({bidCount}) </span>{" "}
        opportunities.
      </div>

      <h1 className="text-center mt-8 text-4xl mb-4 w-fit mx-auto  bg-[#88af2b]/20 py-2 px-4">
        Task Details
      </h1>
      <p className="text-center lg:w-8/12 w-11/12 mx-auto font-medium mb-8">
              Explore all the information related to this task including the project requirements, deadline, budget, and the person who posted it. Make sure to review everything carefully before placing a bid.
            </p>

      <div className="w-11/12 mx-auto flex lg:flex-row flex-col shadow-[0px_8px_30px_0px_rgba(0,0,0,0.12)] bg-green-300/10 items-center gap-10 justify-between lg:px-10 px-5 py-8 border border-amber-100 rounded-2xl ">
        <img className="w-72 h-full" src={task.photo} alt={task.title} />

        <div className=" mx-auto">
          <h1 className={` text-2xl  font-semibold  ${isDark? 'text-white' : 'text-[#537D5D]' }`} >
            {task.title}
          </h1>

          <h2 className={`  lg:w-10/12 py-3  text-left text-sm  ${isDark? 'text-white' : 'text-blue-950' }`}>
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

          {check.includes(task._id) ? (
            <>
              <button className="btn my-5 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#784949]  hover:bg-gradient-to-r hover:from-[#784949] hover:to-[#784949] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#784949] transition-all ease-out duration-300  ">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Already Bid Placed</span>
              </button>
            </>
          ) : (
            <>
              {" "}
              <button
                onClick={handleBid}
                className="btn my-5 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  "
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Place Bid</span>
              </button>
            </>
          )}

          <div className="text-sm card-actions justify-end">
            <h1 className="font-bold">Assigned By:</h1>
            <div>
              {task.userPhoto ? (
                <div className="flex gap-1 items-end">
                  <img
                    className="size-8 border border-green-700 rounded-full object-cover"
                    src={task?.userPhoto}
                    alt={task.name}
                  />

                  <h1>{task.name}</h1>
                </div>
              ) : (
                <h1>{task.name}</h1>
              )}

              <h1 className="text-gray-400 text-[13px]">{task.email}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TaskDetails;
