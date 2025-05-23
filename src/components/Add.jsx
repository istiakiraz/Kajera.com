import React, { use } from 'react';
import addPic from '../assets/add.png';
import { Link } from 'react-router';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { AuthContext } from '../provider/AuthProvider';

const Add = () => {

     const {isDark} = use(AuthContext)


    return (
        <div  className={` mt-64 md:mt-96 lg:mt-0 h-[386px]   ${isDark? 'bg-[#D2D0A0]/80' : 'bg-[#ffede7] ' }`}>
            <div className='lg:w-8/12 w-11/12 relative flex-col-reverse mx-auto flex lg:flex-row items-center'>
                
                {/* Text animation */}
                <motion.div
                    className='py-32 z-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className='text-3xl leading-8 lg:leading-10 mb-3 font-semibold w-11/12 lg:w-8/12'>
                        Find the talent needed to get your business growing.
                    </h1>
                    <p className='mb-3 text-sm'>
                        Advertise your jobs to millions of monthly users and search 15.8 million CVs
                    </p>
                    
                    <Link to="/all-tasks">
                        <button className="btn mt-2 border-none relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative flex gap-2 items-center">
                                Find Task <MdArrowOutward size={20} />
                            </span>
                        </button>
                    </Link>
                </motion.div>

                {/* Image animation */}
                <motion.img
                    className='absolute -top-64 md:-top-96 lg:-top-24 lg:left-200 z-0'
                    src={addPic}
                    alt="add pic"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                />
            </div>
        </div>
    );
};

export default Add;
