import React from 'react';
import { motion } from 'framer-motion';
import Add from '../components/Add';

const AboutUs = () => {
    return (
        <div className=" py-16 px-6 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center bg-[#689e6d]/50 p-12 rounded-2xl mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4 text-[#689e6d]">About <span className='muso'>Kajera.com</span></h1>
                    <p className="text-lg  ">
                        A next-gen freelancer marketplace designed to connect talented professionals with real-world projects.
                    </p>
                </motion.div>

                {/* Our Mission */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-3">🚀 Our Mission</h2>
                    <p className="  leading-relaxed">
                        At Kajera.com, our mission is simple — to empower businesses by making it easy to find skilled freelancers,
                        and to give freelancers the tools and visibility they need to succeed. We believe that great work can happen
                        anywhere in the world, and we're here to make those connections seamless and meaningful.
                    </p>
                </motion.div>

                {/* What We Offer */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-3">💼 What We Offer</h2>
                    <ul className="list-disc pl-6  leading-relaxed">
                        <li>📌 Task posting with clear budgets and deadlines</li>
                        <li>🔍 Easy browsing and filtering for freelancers</li>
                        <li>📨 Seamless bidding and communication</li>
                        <li>🎨 Beautiful, responsive interface with modern UX</li>
                        <li>🛠 Powerful tech stack: React, Node.js, MongoDB, Firebase & more</li>
                    </ul>
                </motion.div>

                {/* Our Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold mb-3">🌟 Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div>
                            <h3 className="font-semibold">Transparency</h3>
                            <p>We believe in clear expectations and open communication between clients and freelancers.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Quality First</h3>
                            <p>Every feature is crafted to improve real-world use and deliver the best experience possible.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Community Driven</h3>
                            <p>We are constantly listening to feedback and improving based on real user needs.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Innovation</h3>
                            <p>From Lottie animations to dark mode – we use the latest tools to stay modern and responsive.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='mt-16 -mb-16'>
                <Add></Add>
            </div>
        </div>
    );
};

export default AboutUs;
