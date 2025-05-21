import React, { use, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import MyTaskCard from "../components/MyTaskCard";
import { AuthContext } from "../provider/AuthProvider";

const MyTaskPage = () => {
  const { user } = use(AuthContext);

  const initialTask = useLoaderData();
  const params = useParams();

  const [myTask, setMyTask] = useState(initialTask);

  //   console.log(params.email);
  //   console.log(user?.email);

  if (params.email !== user?.email) {
    return <p>error this page</p>;
  }

  if (myTask.length < 1) {
    return <p>you have no data </p>;
  }

  return (
    <div className="py-10 w-11/12 lg:w-9/12 mx-auto">
      <h1 className="text-center py-8 text-5xl text-pink-800 font-bold">
        my task
      </h1>

      <div>
        <div className="w-full overflow-x-auto">
          <table className="table table-zebra border border-green-700 shadow-2xl shadow-orange-600 ">
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
  );
};

export default MyTaskPage;
