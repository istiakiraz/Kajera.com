import React from 'react';
import CountUp from 'react-countup';

const Countup = () => {
    return (
        <div className='flex flex-col w-11/12 mb-2 mx-auto items-center -pt-12 justify-center ' >

        <h1 className='font-semibold mb-2 text-2xl bg-amber-100 px-2 w-fit lg:text-4xl text-[#548b5a]' > Platform Stats Overview</h1>
        <p className='text-sm text-center mt-3 lg:w-full w-96'>Track our community progress in real-time — from the total number of freelancers and positive reviews to orders received and projects successfully completed. This page highlights the impact and activity across our platform.</p>

              <div className="grid md:grid-cols-4 grid-cols-2 gap-5   *:cursor-grab lg:gap-10 my-8">

              <div className="text-center rounded-2xl hover:scale-110 duration-500 hover:shadow-2xl bg-[#548b5a]/20 p-12 text-[#548b5a]">
                <h1 className="text-4xl md:text-7xl mb-1 font-extrabold">
                  <CountUp
                    start={0}
                    end={835}
                    enableScrollSpy={true}
                    duration={3}
                    delay={0}
                  ></CountUp>
                  K
                </h1>
                <p className=" lg:text-xl ">Total Freelancer</p>
              </div>

              <div className="text-center rounded-2xl hover:scale-110 duration-500 hover:shadow-2xl bg-[#548b5a]/20 p-12">
                <h1 className="text-4xl md:text-7xl mb-1 font-extrabold">
                  <CountUp
                    start={0}
                    end={750}
                    enableScrollSpy={true}
                    duration={3}
                    delay={0}
                  ></CountUp>
                  K
                </h1>
                <p className=" lg:text-xl">Positive Review</p>
              </div>

              <div className="text-center rounded-2xl hover:scale-110 duration-500 hover:shadow-2xl bg-[#548b5a]/20 p-12 text-[#548b5a]">
                <h1 className="text-4xl md:text-7xl mb-1 font-extrabold">
                  <CountUp
                    start={0}
                    end={390}
                    enableScrollSpy={true}
                    duration={3}
                    delay={0}
                  ></CountUp>
                  K
                </h1>
                <p className=" lg:text-xl">Order received</p>
              </div>
              <div className="text-center rounded-2xl hover:scale-110 duration-500 hover:shadow-2xl bg-[#548b5a]/20 p-12">
                <h1 className="text-4xl md:text-7xl mb-1 font-extrabold">
                  <CountUp
                    start={0}
                    end={195}
                    enableScrollSpy={true}
                    duration={3}
                    delay={0}
                  ></CountUp>
                  K
                </h1>
                <p className=" lg:text-xl">Projects Completed</p>
              </div>
            </div>
        </div>
    );
};

export default Countup;