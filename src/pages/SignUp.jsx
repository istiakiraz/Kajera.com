import React, { use, useState } from "react";
import logImg from "../assets/regi.jpg";
import logo from "../assets/Cream Black Typography Loop Brand Logo (1).png";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

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

  const {createUser, setUser, updateUser } = use(AuthContext)

//   const { createUser, setLogIn, updateUser } = use(AuthContext);

//   const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, photo, email, password);

    createUser(email, password)
        .then((result)=>{
            const user = result.user;
            updateUser({ displayName: name, photoURL: photo })
            .then(()=>{
                setUser({ ...user, displayName: name, photoURL: photo })
            }).catch(error=>{
                console.log(error);
                setUser(user)
            })         
        }).catch((error)=>{
            console.log(error.message);
        })

    // createUser(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     updateUser({ displayName: name, photoURL: photo })
    //       .then(() => {
    //         setLogIn({ ...user, displayName: name, photoURL: photo });
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         setLogIn(user);
    //       });

    //     navigate("/");
    //     Swal.fire({
    //       title: "Welcome to NovaPay!",
    //       text: "We're excited to have you on board. Let's make your billing experience easier and smarter.",
    //       icon: "success",
    //       confirmButtonText: "Let's Get Started",
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     Toast.fire({
    //       icon: "error",
    //       title: `${error.message} 😢`,
    //     });
    //   });
  };

  return (
    <div className="bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_0%,rgba(114,70,233,1)_100%)] min-h-screen ">
      <div className="hero  min-h-screen">
        <div className="hero-content ">
          <div className="card bg-base-100 w-full items-center grid md:grid-cols-2 shrink-0 shadow-2xl">
            <div className="order-2">
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

            <div className=" order-1 ">
              <h1 className="text-center md:text-4xl text-[24px] mt-8 w-10/12 text-[#007cff] font-bold mx-auto">
                Create Your{" "}
                <span className=" font-extrabold text-[#6765ed] md:text-5xl md:leading-16 text-3xl ">
                  Nova
                  <span className="bg-[#6765ed] text-white p-[1.5px]">Pay</span>
                </span>{" "}
                Account Today
              </h1>
              <p className="text-center w-10/12 mx-auto text-sm mt-2 bg-[#6765ed] p-1 rounded-2xl text-white ">
                Join thousands who pay their bills faster and smarter — all in
                one secure place.
              </p>
              <div className="card-body shadow-[30px_54px_67px_0px_rgba(209,217,230,0.67),25px_27px_27px_-7px_rgba(209,217,230,0.34),-34px_-30px_65px_0px_rgba(255,255,255,0.75),-9px_-20px_29px_0px_rgba(255,255,255,0.54),-13px_-11px_22px_7px_rgba(255,255,255,0.25),-16px_-7px_21px_4px_rgba(255,255,255,0.25)] bg-[#aacbff] mt-5 mb-8 rounded-xl w-11/12 md:w-10/12 mx-auto">
                <img
                  className="h-full rounded-3xl shadow-[0px_25px_20px_-20px_rgba(0,0,0,0.45)] w-28  mx-auto md:w-36"
                  src={logo}
                  alt=""
                />

                <form
                  onSubmit={handleRegister}
                  className="flex   flex-col items-center "
                >
                  <label className=" self-start md:ml-14 ml-4 text-gray-600 font-bold ">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="input mb-2 md:w-96 rounded-3xl "
                    placeholder="Type Your Name"
                    name="name"
                    required
                    minLength="4"
                  />
                  <p className="validator-hint hidden">
                    Name should be more then 4 character
                  </p>

                  <label className=" self-start md:ml-14 ml-4 text-gray-600 font-bold ">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    className="input mb-2 md:w-96 rounded-3xl "
                    placeholder="Submit Your Photo URL"
                    name="photo"
                    required
                  />

                  <label className=" self-start md:ml-14 ml-4 text-gray-600 font-bold ">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input mb-2 md:w-96 rounded-3xl "
                    placeholder="example@email.com"
                    name="email"
                    required
                  />

                  <label className="self-start md:ml-14 ml-4 text-gray-600 font-bold ">
                    Password
                  </label>
                  <div className="relative  md:w-96 w-78 mx-auto">
                    <input
                      type={showPass ? "text" : "password"}
                      className="input validator md:w-96 rounded-3xl"
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
                        <FaEyeSlash color="blue" size={20} />
                      ) : (
                        <FaEye color="blue" size={20} />
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
                    <input type="checkbox"  required name="trams" className="checkbox" />
                    By registering, I agree to the{" "}
                    <span className="font-bold text-indigo-500">
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
                      <h3 className="text-xl font-bold mb-4 text-indigo-600">
                        NovaPay Terms & Conditions
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
                        By registering, you agree to NovaPay’s Terms and
                        Conditions.
                      </p>
                      <div className="modal-action">
                        <label
                          htmlFor="my_modal_6"
                          className="btn bg-purple-700 text-white "
                        >
                          Close!
                        </label>
                      </div>
                    </div>
                  </div>

                  <button className="relative inline-flex items-center justify-center mt-4 w-8/12 mx-auto  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-[#6765ed]">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-[#007cff] to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#007cff] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">
                      Submit to Register Now
                    </span>
                  </button>
                </form>
                <p className="text-center mx-auto flex gap-1 mt-2">
                  Already have an account?
                  <Link to="/sign-in" className="text-blue-600 underline">
                    Sign-In 
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;