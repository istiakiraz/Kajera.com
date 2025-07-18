import React, { use, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import MyTaskCard from "../components/MyTaskCard";
import { AuthContext } from "../provider/AuthProvider";
import Empty from "../components/Empty";
import Error from "../components/Error";

const MyTaskPage = () => {
  const { user, isDark } = use(AuthContext);

  const initialTask = useLoaderData();
  const params = useParams();

  const [myTask, setMyTask] = useState(initialTask);

  //   console.log(params.email);
  //   console.log(user?.email);

  if (params.email !== user?.email) {
    return <Error></Error>;
  }

  if (myTask.length < 1) {
    return <Empty></Empty>;
  }

  return (
    <div  className={` -mt-18 pt-18 ${isDark? 'bg-[#D2D0A0]/20 *:text-white'  : '' }`}>
      <div className="py-10 w-11/12  min-h-[calc(100vh-365px)] lg:w-9/12 mx-auto">
      <div>
         <h1 className='text-4xl  mb-4 font-medium w-fit mx-auto  bg-[#af2b2b]/20 py-2 px-4  '>Manage My Tasks</h1>
        <p className="w-11/12 mx-auto text-center mb-5">Easily manage the tasks you’ve created — view bidders, edit, or remove as needed.</p>
      </div>
     

      <div>
        <div className="w-full overflow-x-auto">
          <table className={` table table-zebra border border-green-700 shadow-2xl shadow-orange-600   ${isDark? 'bg-[#D2D0A0]/60' : '' }`}>
            {/* Table head */}
            <thead className="bg-[#416144dd]/10 text-sm text-[#1f3e2b]">
              <tr>
                <th className="whitespace-nowrap">Title</th>
                <th className="whitespace-nowrap">Description</th>
                <th className="whitespace-nowrap">Budget</th>
                <th className="whitespace-nowrap">Deadline</th>
                <th className="whitespace-nowrap">Total Bids</th>
                <th className="whitespace-nowrap">Actions</th>
                
              </tr>
            </thead>

            {myTask.map((task) => (
              <MyTaskCard
                myTask={myTask}
                setMyTask={setMyTask}
                task={task}
                key={task._id}
              ></MyTaskCard>
            ))}
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyTaskPage;
