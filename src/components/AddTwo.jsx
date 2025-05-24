import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import addImg from "../assets/add2.jpg";
import { GoCodescanCheckmark } from "react-icons/go";
import { SiMoneygram } from "react-icons/si";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const AddTwo = () => {
  const { isDark } = use(AuthContext);

  return (
    <div className={` py-16 pb-40 ${isDark ? "bg-[#52524a]" : ""}`}>
      <div className="lg:w-11/12 flex lg:flex-row flex-col justify-end items-center mx-auto bg-[#fbf7ed]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="  py-10 px-10"
        >
          <h1
            className={` text-3xl leading-8 lg:leading-10 mb-12 font-semibold w-11/12 lg:w-8/12  ${
              isDark ? "text-black" : ""
            }`}
          >
            A whole world of freelance talent at your fingertips
          </h1>
          <div className="flex mb-4 text-gray-600 gap-2 ">
            <GoCodescanCheckmark size={27} />

            <div>
              <h1 className="font-medium text-xl">Proof of quality</h1>
              <p className="w-8/12">
                Check any pro’s work samples, client reviews, and identity
                verification.
              </p>
            </div>
          </div>
          <div className="flex text-gray-600 mb-4 gap-2 ">
            <SiMoneygram size={27} />

            <div>
              <h1 className="font-medium text-xl">No cost until you hire</h1>
              <p className=" w-8/12 ">
                Check any pro’s work samples, client reviews, and identity
                verification.
              </p>
            </div>
          </div>
          <div className="flex text-gray-600 gap-2 ">
            <IoShieldCheckmarkOutline size={27} />

            <div>
              <h1 className="font-medium text-xl">Safe and secure</h1>
              <p className=" w-8/12">
                Check any pro’s work samples, client reviews, and identity
                verification.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={addImg}
          alt="girl"
        />
      </div>
    </div>
  );
};

export default AddTwo;
