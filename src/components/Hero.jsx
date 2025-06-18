import React, { use } from "react";
import CountUp from "react-countup";
import { Link } from "react-router";

import slide1 from "../assets/slider71.png";
import slide2 from "../assets/slider72.jpg";
import slide3 from "../assets/slider73.jpg";
import slide4 from "../assets/h7-bg.jpg";
import slide5 from "../assets/h7-bg4.jpg";
import { motion } from "framer-motion";

import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { AuthContext } from "../provider/AuthProvider";

const Hero = () => {

  const {isDark, user} = use(AuthContext)


  return (
    <div className={`  ${isDark? 'bg-[#D2D0A0]/80' : '' }`} >

       <div className=" mx-auto pt-18 -mt-16 py-12 w-11/12">
      <div className="md:w-9/12 lg:gap-x-52  lg:py-28 space-y-10 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center ">
        {/* slide */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            className="absolute hidden lg:block  z-0 -top-20 right-80 h-[450px] w-[600px]"
            src={slide4}
            alt=""
          />
          <img
            className="absolute hidden lg:block z-5 -bottom-16  left-28 w-full "
            src={slide5}
            alt=""
          />
          <div className="relative z-10">
            <Swiper
              // install Swiper modules
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              //   navigation
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img src={slide1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>

        <div className="relative z-10 text-center lg:text-left ">
          <div>
            <motion.h1
              className="mb-5 md:text-5xl lg:text-7xl lg:leading-22 text-4xl  font-bold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Hire the best{" "}
              <span className="text-[#548b5a] bg-amber-100 px-2 ">
                freelancers
              </span>{" "}
              for any job, <span className="text-[#548b5a]">online</span>.
            </motion.h1>
            <motion.p
              className="mb-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Millions of people use{" "}
              <span className="muso font-extrabold">KAJERO</span> to turn their
              ideas into reality.
            </motion.p>
            <div className="flex gap-5 lg:gap-10 my-8">
              <div className="text-center text-[#548b5a]">
                <h1 className="text-xl md:text-2xl mb-1 font-extrabold">
                  <CountUp
                    start={0}
                    end={835}
                    enableScrollSpy={true}
                    duration={3}
                    delay={0}
                  ></CountUp>
                  K
                </h1>
                <p className="text-sm">Total Freelancer</p>
              </div>

              <div className="text-center">
                <h1 className="text-xl md:text-2xl mb-1 font-extrabold">
                  <CountUp
                    start={0}
                    end={750}
                    enableScrollSpy={true}
                    duration={3}
                    delay={0}
                  ></CountUp>
                  K
                </h1>
                <p className="text-sm">Positive Review</p>
              </div>

              <div className="text-center text-[#548b5a]">
                <h1 className="text-xl md:text-2xl mb-1 font-extrabold">
                  <CountUp
                    start={0}
                    end={390}
                    enableScrollSpy={true}
                    duration={3}
                    delay={0}
                  ></CountUp>
                  K
                </h1>
                <p className="text-sm">Order received</p>
              </div>
              <div className="text-center">
                <h1 className="text-xl md:text-2xl mb-1 font-extrabold">
                  <CountUp
                    start={0}
                    end={195}
                    enableScrollSpy={true}
                    duration={3}
                    delay={0}
                  ></CountUp>
                  K
                </h1>
                <p className="text-sm">Projects Completed</p>
              </div>
            </div>

          {
            user?   <Link to="/all-tasks">
              <button className="btn col-span-full border-none shadow-[5px_0px_15px_0px_rgba(0,128,0,0.5)] relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  ">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative flex gap-1 items-center">
                  {" "}
                 Explore
                </span>
              </button>
            </Link> :   <Link to="/sign-in">
              <button className="btn col-span-full border-none shadow-[5px_0px_15px_0px_rgba(0,128,0,0.5)] relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  ">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative flex gap-1 items-center">
                  {" "}
                  Join Now
                </span>
              </button>
            </Link>
          }
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Hero;
