import React from "react";
import { MdDeleteForever, MdOutlineSystemUpdate } from "react-icons/md";

const MyTaskCard = ({ task }) => {
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

          <td className="flex items-center justify-center py-6 gap-1 ">
            <button className="btn btn-outline flex items-center gap-1 hover:text-white hover:bg-green-500 btn-xs">
              <MdOutlineSystemUpdate />
              Update
            </button>
            <button className="btn btn-outline   flex items-center gap-1 hover:text-white hover:bg-red-500 btn-xs">
              <MdDeleteForever size={15} /> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default MyTaskCard;
