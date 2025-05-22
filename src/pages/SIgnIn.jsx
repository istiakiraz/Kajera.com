import React, { use, useRef, useState } from "react";
import logImg from "../../public/login.json";
import logo from "../assets/Cream Black Typography Loop Brand Logo (1).png";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// import { AuthContext } from "../provider/AuthProvider";

import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";

const SIgnIn = () => {
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

  const [showPass, setShowPass] = useState(false);

  const { signInUser } = use(AuthContext)

//   const { logInUser, googleLogIn, resetPass } = use(AuthContext);

const location = useLocation()
const navigate = useNavigate()


  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);

    signInUser(email, password)
    .then((result)=>{
        console.log(result);
        navigate(`${location.state? location.state: '/'}`)

         Swal.fire({
          title: "Welcome to KAJERO.com!",
          text: "Let’s turn tasks into success—together.",
          icon: "success",
          confirmButtonText: "Get Started",
        });
        
    })
    .catch(error=> {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "Incorrect email or password",
        });
    })
  };

//   const handleGoogleLogIN = () => {
//     googleLogIn()
//       .then((result) => {
//         console.log(result);
//         navigate(`${location.state ? location.state : "/"}`);

//         Swal.fire({
//           title: "Welcome to NovaPay!",
//           text: "Your smart billing journey starts here. Let's make payments simple and secure.",
//           icon: "success",
//           confirmButtonText: "Get Started",
//         });
//       })
//       .catch((error) => {
//         Toast.fire({
//           icon: "error",
//           title: error,
//         });
//       });
//   };

//   const handleForgotPass = () => {
//     const email = emailRef.current.value;

//     resetPass(email)
//       .then(() => {
//         Toast.fire({
//           icon: "success",
//           title: "Your reset email send, Please check your Email",
//         });
//       })
//       .catch((error) => {
//         Toast.fire({
//           icon: "error",
//           title: error,
//         });
//       });
//   };

  return (
    <div className=" min-h-screen ">
      <div className="hero  min-h-screen">
        <div className="hero-content ">
          <div className="card bg-base-100 w-full lg:space-x-32 items-center grid lg:grid-cols-2 shrink-0 ">
            <div className="lg:order-1 mb-12 lg:mb-0 order-2">
              <Link to="/">
                <button className="btn col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  ">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Back to Home</span>
            </button>
              </Link>

             <div className="mt-12 "> <Lottie  animationData={logImg} /></div>
            </div>

            <div className="lg:order-2 order-1 ">
              <div className="text-center">
                <h1 className="muso mt-8 mb-3 lg:mt-0 text-3xl text-[#346339] lg:text-5xl font-extrabold">
            KAJERO.<span className="lg:text-2xl text-xl">com</span>
          </h1>
          <h3 className="text-2xl font-thin text-[#548b5a]"> <span className="font-light"><Typewriter  words={['Find jobs.', 'Find talent.', 'Post tasks.' ,'Bid smart.']}
             loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
            /></span> - Get things done.</h3>
              </div>
      
              <div className="card-body shadow-[20px_20px_60px_0px_#d5e6cf,-20px_-20px_60px_0px_#ffffff] bg-[#548b5a]/10 mt-5 mb-8 rounded-xl w-11/12 lg:w-10/12 mx-auto">
                <img
                  className="h-full rounded-3xl shadow-[0px_25px_20px_-20px_rgba(0,0,0,0.45)] w-28  mx-auto lg:w-36"
                  src={logo}
                  alt="logo"
                />

                <form
                  onSubmit={handleLogin}
                  className="flex flex-col items-center "
                >
                  <label className=" self-start lg:ml-7 ml-4 text-gray-600 font-bold ">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    ref={emailRef}
                    className="input mb-2 lg:w-96 rounded-3xl "
                    placeholder="example@email.com"
                  />

                  <label className="self-start lg:ml-7 ml-4 text-gray-600 font-bold ">
                    Password
                  </label>

                  <div className="relative  lg:w-96 w-78 mx-auto">
                    <input
                      type={showPass ? "text" : "password"}
                      className="input lg:w-96 rounded-3xl"
                      placeholder=" Enter Your Password"
                      name="password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setShowPass(!showPass);
                      }}
                      className="btn btn-xs absolute top-2  right-6"
                    >
                      {showPass ? (
                        <FaEyeSlash color="green" size={20} />
                      ) : (
                        <FaEye color="green" size={20} />
                      )}
                    </button>
                  </div>

                  <div
                    // onClick={handleForgotPass}
                    className="link mt-3 link-hover"
                  >
                    Forgot password?
                  </div>

                  <button className="relative inline-flex items-center justify-center mt-4 w-6/12 mx-auto  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-[#6765ed]">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#548b5a] via-[#087008] to-green-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#548b5a] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Sign-In</span>
                  </button>
                </form>
                <p className="text-center mx-auto flex gap-1 mt-2">
                  Don’t have an account yet?{" "}
                  <Link to="/sign-up" className="text-green-700 underline">
                    Sign Up
                  </Link>{" "}
                </p>

                {/* Google */}
                <button
                //   onClick={handleGoogleLogIN}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIgnIn;