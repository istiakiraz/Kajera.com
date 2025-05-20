import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const AddTask = () => {
  const [dob, setDob] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());

    newTask.budget = parseInt(newTask.budget);
    newTask.dob = dob ? format(dob, "yyyy-MM-dd") : "";
    newTask.bid = parseInt(0)
    console.log(newTask);

    // send task data to the DB
    fetch('http://localhost:3000/tasks',{
      method: 'POST',
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(newTask)
    }).then(res=> res.json()).then(data=> {
      console.log('after add task data ', data);
      alert('ok')
    })


  };

  return (
    <div
    //   style={{ backgroundImage: `url(${bg})` }}
    //   className=" bg-cover bg-center  h-[900px]"
    >
      <div className="md:w-8/12 w-11/12 py-16 mx-auto">
        <Link to="/">
          <span
            className="flex gap-2 mb-10 rancho text-2xl   items-center"
            style={{
              textShadow:
                "0 0 3px #fff, 0 0 3px #fff, 0 0 3px #331A15, 0 0 3px #331A15",
            }}
          >
            {" "}
            <GoArrowLeft /> Back to home
          </span>
        </Link>

        <div className="bg-[#d6edeb]/50 rounded-xl">
          <div className="md:w-9/12  md:px-12 w-11/12 py-12 mx-auto">
            <h1
              className="text-center text-4xl mb-4 rancho"
              style={{
                textShadow:
                  "0 0 3px #fff, 0 0 3px #fff, 0 0 3px #331A15, 0 0 3px #331A15",
              }}
            >
              Add New Coffee
            </h1>
            <p className="text-center font-thin mb-8">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 justify-center items-center md:grid-cols-2"
            >
              <div>
                <fieldset className="fieldset rounded-box md:w-xs  p-4">
                  {/* title input */}
                  <label className="label font-bold">Task Title</label>
                  <input
                    required
                    name="title"
                    type="text"
                    className="input  mb-2 md:w-96"
                    placeholder="Enter task title"
                  />

                  {/* dopdown category */}
                  <label className="label font-bold">Category</label>
                  <select
                    name="category"
                    required
                    className="input mb-2 md:w-96"
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
                  <label className=" font-bold label">Date of Deadline</label>
                  <DatePicker
                    required
                    selected={dob}
                    onChange={(date) => setDob(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select your task deadline"
                    className="border border-gray-300 placeholder:text-sm bg-white md:w-96 w-80 px-3 py-2 rounded"
                  />

                  {/* budget input */}
                  <label className=" font-bold label">Budget</label>
                  <input
                    type="number"
                    required
                    name="budget"
                    className="input mb-2 md:w-96"
                    placeholder="Enter your task budget"
                  />
                </fieldset>
              </div>

              <div>
                <fieldset className="fieldset -space-y-[2px] -mt-5 md:-mt-0 rounded-box md:w-xs  p-4">
                  
                  {/* name input */}
                  <label className="label font-bold">Your Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="input  mb-2 md:w-96"
                    // value={"Malik"}
                    //  readOnly
                  />

                  {/* email input */}
                  <label className="label font-bold">Your Email</label>
                  <input
                    required
                    name="email"
                    type="text"
                    className="input  mb-2 md:w-96"
                    // value={"mm@gmail.com"}
                    //  readOnly
                  />

                  {/* Description input */}
                  <label className=" font-bold label">Description</label>
                  <input
                    required
                    type="text"
                    name="description"
                    className="input mb-2 md:w-96"
                    placeholder="Enter task Description"
                  />

                  {/* Photo input */}
                  <label className=" font-bold label">Task Photo URL</label>
                  <input
                    required
                    type="text"
                    name="photo"
                    className="input mb-2 md:w-96"
                    placeholder="Enter the URL of your task photo"
                  />
                </fieldset>
              </div>

              <button
                type="submit"
                className="btn col-span-full w-full md:w-[820px] relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  "
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Add Task</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
