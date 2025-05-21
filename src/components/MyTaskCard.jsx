import React from "react";
import { MdDeleteForever, MdOutlineSystemUpdate } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTaskCard = ({ task, setMyTask, myTask }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete task by database
        fetch(`http://localhost:3000/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
            //   remove the task form the state 
            const remainingTask = myTask.filter(tas=> tas._id !== id)
            setMyTask(remainingTask);
            }
          });
      }
    });
  };

  return (
    <>
      {/* Table body */}
      <tbody className="border-b border-green-700">
        <tr>
          <td>
            <div className="flex items-center gap-3 ">
              <div className="avatar">
                <div className="mask mask-squircle h-10 w-10">
                  <img src={task.photo} alt={task.title} />
                </div>
              </div>
              <div>
                <div className="font-bold leading-tight line-clamp-2">
                  {task.title}
                </div>
                <div className="text-xs text-gray-500">{task.category}</div>
              </div>
            </div>
          </td>
          <td className="text-sm  break-words min-w-96 lg:w-96">
            {task.description.split(" ").slice(0, 20).join(" ")}
            {task.description.split(" ").length > 20 ? "..." : ""}
          </td>

          <td>৳{task.budget}</td>

          <td>
            <span className="px-2 py-1 bg-red-100/50 text-red-700 rounded-2xl border border-red-300 whitespace-nowrap">
              {task.dob}
            </span>
          </td>

          <td className="pl-9 "><span className="bg-[#548b5a]/20 p-1 px-2 rounded-full text-xl">{task.bid}</span></td>

          <td className="flex items-center justify-center py-6 gap-1 ">
            <Link to={`/edit-task/${task._id}`}>
            <button className="btn btn-outline flex items-center gap-1 hover:text-white hover:bg-green-500 btn-xs">
              <MdOutlineSystemUpdate />
              Update
            </button>
            </Link>
            <button
              onClick={() => handleDelete(task._id)}
              className="btn btn-outline   flex items-center gap-1 hover:text-white hover:bg-red-500 btn-xs"
            >
              <MdDeleteForever size={15} /> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default MyTaskCard;
