import React, { use } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert("out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#E1EEBC]/20 px-3 border border-[#E1EEBC] rounded-2xl  "
            : " hover:underline"
        }
        to="/"
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#E1EEBC]/20 px-3 border border-[#E1EEBC] rounded-2xl    "
            : " hover:underline"
        }
        to="/all-tasks"
      >
        <li>Browse Tasks</li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#E1EEBC]/20 px-3 border border-[#E1EEBC] rounded-2xl "
            : " hover:underline"
        }
        to="/add-task"
      >
        <li>Add Task</li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? " bg-[#E1EEBC]/20 px-3 border border-[#E1EEBC] rounded-2xl "
            : " hover:underline"
        }
        to="/my-tasks"
      >
        <li>My Task</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50  *:text-white bg-[#548b5a] shadow-sm">
      <div className="md:w-10/12  py-2 w-11/12 flex items-center justify-center mx-auto">
        <Link to="/" className="flex-1">
          <h1 className="muso text-2xl md:text-3xl font-extrabold">
            KAJERO. <span className="md:text-2xl text-xl">com</span>
          </h1>
        </Link>

        <div className={`${user ? 'mr-[480px]  hidden lg:flex' : 'mr-96 hidden lg:flex'}`}>
          <ul className="menu flex gap-8 text-xl menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="flex items-center space-x-2 ">

          {
            user? '' :<Link to="/sign-in">
            <button className="relative  inline-flex items-center justify-start  px-3 py-1.5 overflow-hidden font-bold rounded-full group">
              <span className="w-32 h-32 rotate-45 translate-x-12  -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0  group-hover:bg-[#689e6d] left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-sm flex items-center justify-between gap-1  ">
                <IoLogOutOutline size={22} /> Sign In
              </span>
              <span className="absolute inset-0 group-hover:border-[#67AE6E] border-2 border-white rounded-full"></span>
            </button>
          </Link>
          
          }

          {
            user? "" :
          <Link to="/sign-up">
            <button className="px-5 py-1.5 relative rounded-full   group  text-white font-medium inline-block">
              <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-[#E1EEBC] to-[#67AE6E]"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full  opacity-50 from-[#E1EEBC] to-[#67AE6E]"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full  shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#E1EEBC] to-[#67AE6E]"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-[#E1EEBC] from-[#67AE6E]"></span>
              <span className="relative font-bold text-sm">Sign Up</span>
            </button>
          </Link>

          }

          {
            user? <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-purple-100 size-12 btn-ghost btn-circle avatar"
            >
              <div className=" rounded-full">
                <img alt="User Img" src={user && `${user?.photoURL}`} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <div
                className="
        flex flex-col *:p-1 *:hover:bg-gray-100 mb-2 pl-2
        lg:hidden"
              >
                {links}
              </div>

              {user ? (
                <>
                  <li>
                    <span className=" text-[12px] mb-[2px] font-bold text-left bg-purple-300 p-2 ">
                      {user && `Name: ${user?.displayName}`}
                    </span>
                  </li>

                  <li>
                    <span className=" text-[12px] mb-[2px] font-bold text-left bg-purple-300 p-2 ">
                      {user && `Email: ${user?.email}`}
                    </span>
                  </li>

                  <li>
                    <span onClick={handleSignOut}>
                      {user && (
                        <button className="btn mt-5 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  ">
                          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                          <span className="relative">Sign Out</span>
                        </button>
                      )}
                    </span>
                  </li>
                </>
              ) : ""}
            </ul>
          </div> : ''
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
