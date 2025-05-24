import React, { use, useState } from "react";
import logImg from "../../public/signup.json";
import logo from "../assets/Cream Black Typography Loop Brand Logo (1).png";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import { GoArrowLeft } from "react-icons/go";

const SignUp = () => {
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

  const { createUser, isDark, setUser, updateUser, googleLogIn } =
    use(AuthContext);

  //   const { createUser, setLogIn, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        navigate("/");
        Swal.fire({
          title: "Welcome to KAJERO.com!",
          text: "Let’s turn tasks into success—together.",
          icon: "success",
          confirmButtonText: "Let's Get Started",
        });
      })
      .catch((error) => {
        // console.log(error.message);
        Toast.fire({
          icon: "error",
          title: `${error.message} 😢`,
        });
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;

        // console.log(user.photoURL);

        updateUser({ displayName: user.displayName, photoURL: user.photoURL })
          .then(() => {
            setUser({
              ...user,
              displayName: user.displayName,
              photoURL: user.photoURL,
            });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        navigate(`${location.state ? location.state : "/"}`);

        Swal.fire({
          title: "Welcome to KAJERO.com!",
          text: "Let’s turn tasks into success—together.",
          icon: "success",
          confirmButtonText: "Get Started",
        });
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: error,
        });
      });
  };

  return (
    <div className={` ${isDark ? "bg-[#D2D0A0]" : ""}`}>
      <div className="hero  min-h-screen">
        <div className="hero-content ">
          <div className="card lg:px-24 lg:py-12  bg-base-100 w-full items-center grid lg:grid-cols-2 shrink-0 ">
            <div className="order-2">
              <Link to="/">
                <button className="btn col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  ">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative flex gap-1 items-center">
                    {" "}
                    <GoArrowLeft size={20} />
                    Back to Home
                  </span>
                </button>
              </Link>

              <div className="lg:mt-12 -mt-7 ">
                {" "}
                <Lottie animationData={logImg} />
              </div>
            </div>

            <div className=" order-1 ">
              <div className="text-center mx-auto">
                <h1 className="muso mt-8  lg:mt-0 text-3xl text-[#346339] md:text-5xl font-extrabold">
                  KAJERO.<span className="md:text-2xl text-xl">com</span>
                </h1>
                <p className="text-right text-[12px] w-11/12 mb-3 mt-1 md:w-9/12">
                  – Where Talent Meets Opportunity
                </p>
                <h3 className="text-xl w-11/12 mx-auto text-center font-thin text-[#548b5a]">
                  {" "}
                  Create your account and start hiring or freelancing today.
                  Kajero connects tasks with talent –{" "}
                  <span className="font-light">
                    <Typewriter
                      words={["quickly.", "easily.", "securely."]}
                      loop={100}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>{" "}
                </h3>
              </div>
              <div className="card-body shadow-[-28px_20px_60px_0px_#d5e6cf,-20px_-20px_60px_0px_#ffffff] bg-[#548b5a]/10  mt-5 mb-8 rounded-xl md:w-9/12 w-11/12 lg:w-10/12 mx-auto">
                <img
                  className="h-full rounded-3xl shadow-[0px_25px_20px_-20px_rgba(0,0,0,0.45)] w-28  mx-auto lg:w-36"
                  src={logo}
                  alt=""
                />

                <form
                  onSubmit={handleRegister}
                  className="flex *:text-black   flex-col items-center "
                >
                  <label className=" self-start ml-4 text-gray-600 font-bold ">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="input mb-2 w-full lg:w-96 rounded-3xl "
                    placeholder="Type Your Name"
                    name="name"
                    required
                    minLength="4"
                  />
                  <p className="validator-hint hidden">
                    Name should be more then 4 character
                  </p>

                  <label className=" self-start  ml-4 text-gray-600 font-bold ">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    className="input mb-2 w-full lg:w-96 rounded-3xl "
                    placeholder="Submit Your Photo URL"
                    name="photo"
                    required
                  />

                  <label className=" self-start ml-4 text-gray-600 font-bold ">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input mb-2 w-full lg:w-96 rounded-3xl "
                    placeholder="example@email.com"
                    name="email"
                    required
                  />

                  <label className="self-start  ml-4 text-gray-600 font-bold ">
                    Password
                  </label>
                  <div className="relative  lg:w-96 w-full mx-auto">
                    <input
                      type={showPass ? "text" : "password"}
                      className="input validator w-full lg:w-96 rounded-3xl"
                      placeholder=" Enter Your Password"
                      name="password"
                      required
                      minLength="6"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                      title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
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
                  <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />
                    At least one number <br />
                    At least one lowercase letter <br />
                    At least one uppercase letter
                  </p>

                  {/* The button to open modal */}

                  <label
                    htmlFor="my_modal_6"
                    className="link mt-3 space-x-2 mx-auto link-hover"
                  >
                    <input
                      type="checkbox"
                      required
                      name="trams"
                      className="checkbox"
                    />
                    By registering, I agree to the{" "}
                    <span className="font-bold text-green-700">
                      Terms and Conditions
                    </span>
                  </label>

                  <input
                    type="checkbox"
                    id="my_modal_6"
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <div className="modal-box">
                      <h3 className="text-xl font-bold mb-4 text-green-700">
                        <span className="muso">EAJERO</span> Terms & Conditions
                      </h3>

                      <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                        <li>
                          <strong>Accurate Information:</strong> You must
                          provide true and up-to-date details.
                        </li>
                        <li>
                          <strong>One Account per User:</strong> Multiple
                          accounts are not allowed.
                        </li>
                        <li>
                          <strong>Security Responsibility:</strong> Keep your
                          login details private and safe.
                        </li>
                        <li>
                          <strong>Authorized Payments Only:</strong> Pay only
                          your own or authorized bills.
                        </li>
                        <li>
                          <strong>Service Availability:</strong> Service may be
                          down during maintenance.
                        </li>
                        <li>
                          <strong>No Fraudulent Use:</strong> Fraud will lead to
                          account suspension.
                        </li>
                        <li>
                          <strong>Data Usage & Privacy:</strong> We protect your
                          data as per our Privacy Policy.
                        </li>
                        <li>
                          <strong>Fees and Charges:</strong> Any fees will be
                          shown before payment.
                        </li>
                        <li>
                          <strong>Changes to Terms:</strong> Terms may update —
                          continued use means acceptance.
                        </li>
                        <li>
                          <strong>Account Termination:</strong> Breaking rules
                          may result in account removal.
                        </li>
                      </ul>

                      <p className="mt-4 text-sm text-gray-600">
                        By registering, you agree to KAJERO’s Terms and
                        Conditions.
                      </p>
                      <div className="modal-action">
                        <label
                          htmlFor="my_modal_6"
                          className="btn bg-[#49785b] text-white "
                        >
                          Close!
                        </label>
                      </div>
                    </div>
                  </div>

                  <button className="relative inline-flex items-center justify-center mt-4 w-7/12 mx-auto  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-[#6765ed]">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#548b5a] via-[#087008] to-green-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#548b5a] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">
                      Submit to SignUp Now
                    </span>
                  </button>
                </form>
                <p
                  className={` text-center mx-auto flex gap-1 mt-2 ${
                    isDark ? "text-black" : ""
                  }`}
                >
                  Already have an account?
                  <Link to="/sign-in" className="text-green-700 underline">
                    Sign-In
                  </Link>{" "}
                </p>

                {/* Google */}
                <button
                  onClick={handleGoogleLogIn}
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

export default SignUp;
