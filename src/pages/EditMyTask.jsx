import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData, useNavigate } from "react-router";
// import { AuthContext } from "../provider/AuthProvider";
import { format } from "date-fns";
import Swal from "sweetalert2";

const EditMyTask = () => {
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

  const navigate = useNavigate();

  const [dob, setDob] = useState(null);
  const taskData = useLoaderData();

  const handleUpdataTask = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const updateTask = Object.fromEntries(formData.entries());
    updateTask.budget = parseInt(updateTask.budget);
    updateTask.dob = dob ? format(dob, "yyyy-MM-dd") : "";

    console.log(updateTask);

    // send update taskData to the DB

    fetch(`http://localhost:3000/tasks/${taskData._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          navigate(`/my-tasks/${taskData.email}`);
          Toast.fire({
            icon: "success",
            title: "Your task update successfully!",
          });
        }
      });
  };

  return (
    <div
    //   style={{ backgroundImage: `url(${bg})` }}
    //   className=" bg-cover bg-center  h-[900px]"
    >
      <div className="lg:w-8/12 w-11/12 py-16 mx-auto">
        <Link to="/">
          <button className="btn mb-5 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  ">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative flex gap-1 items-center">
              {" "}
              <GoArrowLeft size={20} />
              Back to Home
            </span>
          </button>
        </Link>

        <div className="bg-[#d6edeb]/50 rounded-xl">
          <div className="lg:w-9/12  md:px-12 w-11/12 py-12 mx-auto">
          <h1 className='text-4xl font-medium w-fit mx-auto  bg-[#88af2b]/20 py-2 px-4  '>Update Tasks</h1>

            <form
              onSubmit={handleUpdataTask}
              className="grid grid-cols-1 items-start lg:grid-cols-2"
            >
              <div>
                <fieldset className="fieldset rounded-box lg:w-xs  p-4">
                  {/* title input */}
                  <label className="label font-bold">Task Title</label>
                  <input
                    required
                    name="title"
                    type="text"
                    className="input  mb-2 w-full lg:w-96"
                    placeholder="Enter task title"
                    defaultValue={taskData.title}
                  />

                  {/* dopdown category */}
                  <label className="label font-bold">Category</label>
                  <select
                    defaultValue={taskData.category}
                    name="category"
                    required
                    className="input mb-2 w-full lg:w-96"
                  >
                    <option value="">Select a category</option>
                    <option value="Web Development"> Web Development</option>
                    <option value=" Design">Design</option>
                    <option value="Writing">Writing</option>
                    <option value="Marketing">Marketing</option>
                    <option value="SEO">SEO</option>
                    <option value="Video Edit">Video Edit</option>
                    <option value="Photo Edit">Photo Edit</option>
                    <option value="Others">Others</option>
                  </select>

                  {/* day pick  */}
                  <label className=" font-bold label">
                    Your Task Deadline Was On{" "}
                    <span className="text-red-600 font-bold">
                      {taskData.dob}
                    </span>
                  </label>
                  <DatePicker
                    required
                    selected={dob}
                    onChange={(date) => setDob(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Choose a new deadline for the task"
                    className="border border-gray-300 placeholder:text-sm bg-white w-full lg:w-96 w-80 px-3 py-2 rounded"
                  />

                  {/* Description input */}
                  <label className=" font-bold  label">Description</label>
                  <textarea
                    required
                    defaultValue={taskData.description}
                    name="description"
                    className="textarea textarea-bordered mb-2 h-28 text-start w-full lg:w-96"
                    placeholder="Enter task description"
                  />
                </fieldset>
              </div>

              <div>
                <fieldset className="fieldset -space-y-[2px] -mt-5 md:-mt-0 rounded-box lg:w-xs  p-4">
                  {/* name input */}
                  <label className="label font-bold">Your Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="input  mb-2 w-full lg:w-96"
                    value={taskData.name}
                    readOnly
                  />

                  {/* email input */}
                  <label className="label font-bold">Your Email</label>
                  <input
                    required
                    name="email"
                    type="text"
                    className="input  mb-2 w-full lg:w-96"
                    value={taskData.email}
                    readOnly
                  />
                  {/* budget input */}
                  <label className=" font-bold label">Budget</label>
                  <input
                    type="number"
                    required
                    defaultValue={taskData.budget}
                    name="budget"
                    className="input mb-2 w-full lg:w-96"
                    placeholder="Enter your task budget"
                  />

                  {/* Photo input */}
                  <label className=" font-bold label">Task Photo URL</label>
                  <input
                    required
                    defaultValue={taskData.photo}
                    type="text"
                    name="photo"
                    className="input mb-2 w-full lg:w-96"
                    placeholder="Enter the URL of your task photo"
                  />
                </fieldset>
              </div>

              <button
                type="submit"
                className="btn col-span-full flex w-full lg:w-[845px] relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  "
              >
                <span className="absolute right-0 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Update Task</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMyTask;
