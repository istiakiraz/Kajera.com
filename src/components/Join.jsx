import React, { use } from "react";
import joinMain from "../assets/joinmain.png";
import join1 from "../assets/join1.png";
import join2 from "../assets/join2.png";
import { IoCheckmarkOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";
import { AuthContext } from "../provider/AuthProvider";

const Join = () => {

     const {isDark} = use(AuthContext)


  return (
   <div  className={` pb-32  ${isDark? 'bg-[#D2D0A0]/20' : '' }`}>
     <div className="bg-[#1f4b3f]  ">
      <div className="grid grid-cols-1 lg:gap-20 gap-15 py-10 lg:grid-cols-2 mx-auto justify-between items-center lg:w-9/12">
        {/* img */}
        <div className="relative">
          <img
            className="absolute w-72 lg:w-[400px] -bottom-12 left-20 lg:left-40 z-10 "
            src={join1}
            alt=""
          />
          <motion.img
            className="absolute w-48  lg:w-64 lg:-left-30 top-14 lg:top-26 z-10 "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={join2}
            alt=""
          />
          <motion.img
            className="absolute w-48  lg:w-64 right-0 lg:-right-30 top-24 lg:top-26 z-10 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={join2}
            alt=""
          />

          <motion.img
            className="relative z-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={joinMain}
            alt=""
          />
        </div>

        {/* title */}
        <motion.div className="text-white w-10/12 mx-auto"  
        
         initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}>
          <h1 className="text-3xl leading-8 lg:leading-10 mb-3 font-semibold  lg:w-8/12"
          
          >
            Join World's Best Marketplace for Workers
          </h1>
          <p className="mb-3 lg:pr-10 leading-8 text-sm">
            Step into a global platform where talent meets opportunity. Whether
            you're a seasoned professional or just starting out, showcase your
            skills, connect with trusted clients, and grow your freelance career
            in a thriving digital marketplace trusted by thousands worldwide.
          </p>

          <ul className="space-y-4 mt-5">
            <li className="flex gap-2 items-center">
              {" "}
              <IoCheckmarkOutline size={20} /> Connect to freelancers with
              proven business experience
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <IoCheckmarkOutline size={20} /> Get matched with the perfect
              talent by a customer success manager
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <IoCheckmarkOutline size={20} /> Unmatched quality of remote,
              hybrid, and flexible jobs
            </li>
          </ul>
           <Link to="/all-tasks">
                        <button className="btn mt-8 border-none relative rounded px-5 py-5 overflow-hidden group bg-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative flex gap-2 items-center">
                                Find Task <MdArrowOutward size={20} />
                            </span>
                        </button>
                    </Link>
        </motion.div>
      </div>
    </div>
   </div>
  );
};

export default Join;
