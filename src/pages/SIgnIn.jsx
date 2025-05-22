import React, { use, useRef, useState } from "react";
import logImg from "../assets/log1.jpg";
import logo from "../assets/Cream Black Typography Loop Brand Logo (1).png";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { AuthContext } from "../provider/AuthProvider";

import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

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
          title: "Welcome to EajEro.com!",
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
    <div className="bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_0%,rgba(20,125,236,1)_100%)] min-h-screen ">
      <div className="hero  min-h-screen">
        <div className="hero-content ">
          <div className="card bg-base-100 w-full items-center grid md:grid-cols-2 shrink-0 shadow-2xl">
            <div className="md:order-1 order-2">
              <Link to="/">
                <div className="px-5 py-2.5 relative rounded group mt-4 ml-4 font-medium text-white inline-block">
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                  <span className="relative">Back to Home</span>
                </div>
              </Link>

              <img className="md:rounded-2xl  " src={logImg} alt="logoImg" />
            </div>

            <div className="md:order-2 order-1 ">
              <h1 className="text-center md:leading-16 md:text-4xl text-[24px] mt-8 w-10/12 text-[#007cff] font-bold mx-auto">
                Step Into Smart Billing with{" "}
                <span className=" font-extrabold text-[#6765ed] md:text-5xl text-3xl ">
                  Nova
                  <span className="bg-[#6765ed] text-white p-[1.5px]">Pay</span>
                </span>
              </h1>
              <div className="card-body shadow-[30px_54px_67px_0px_rgba(209,217,230,0.67),25px_27px_27px_-7px_rgba(209,217,230,0.34),-34px_-30px_65px_0px_rgba(255,255,255,0.75),-9px_-20px_29px_0px_rgba(255,255,255,0.54),-13px_-11px_22px_7px_rgba(255,255,255,0.25),-16px_-7px_21px_4px_rgba(255,255,255,0.25)] bg-[#aacbff] mt-5 mb-8 rounded-xl w-11/12 md:w-10/12 mx-auto">
                <img
                  className="h-full rounded-3xl shadow-[0px_25px_20px_-20px_rgba(0,0,0,0.45)] w-28  mx-auto md:w-36"
                  src={logo}
                  alt=""
                />

                <form
                  onSubmit={handleLogin}
                  className="flex flex-col items-center "
                >
                  <label className=" self-start md:ml-14 ml-4 text-gray-600 font-bold ">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    ref={emailRef}
                    className="input mb-2 md:w-96 rounded-3xl "
                    placeholder="example@email.com"
                  />

                  <label className="self-start md:ml-14 ml-4 text-gray-600 font-bold ">
                    Password
                  </label>

                  <div className="relative  md:w-96 w-78 mx-auto">
                    <input
                      type={showPass ? "text" : "password"}
                      className="input md:w-96 rounded-3xl"
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
                        <FaEyeSlash color="blue" size={20} />
                      ) : (
                        <FaEye color="blue" size={20} />
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
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-[#007cff] to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#007cff] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Login</span>
                  </button>
                </form>
                <p className="text-center mx-auto flex gap-1 mt-2">
                  Don’t have an account yet?{" "}
                  <Link to="/sign-up" className="text-blue-600 underline">
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