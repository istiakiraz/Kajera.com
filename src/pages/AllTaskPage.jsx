// import React, { use } from 'react';
// import { useLoaderData } from 'react-router';
// import AllTasksCard from '../components/AllTasksCard';
// import { AuthContext } from '../provider/AuthProvider';


// const AllTaskPage = () => {

//     const tasksData = useLoaderData()
//     // console.log(tasksData);

//      const {isDark} = use(AuthContext)




//     return (
        
//         <div  className={` -mt-18 pt-18 py-10 ${isDark? 'bg-[#D2D0A0]/20' : '' }`}>
//             <div className='text-center w-11/12 mx-auto mb-8 py-8'>
//                 <h1 className='text-4xl  mb-4 font-medium w-fit mx-auto  bg-[#88af2b]/20 py-2 px-4  '>See All Available Tasks</h1>
//                 <p>Explore a wide range of tasks posted by real clients. Filter by category, budget, and deadline to find your perfect match.</p>

//             </div>
            

//             <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  w-11/12 lg:w-9/12 mx-auto gap-5">
//                 {
//                     tasksData?.map(task=> <AllTasksCard task={task} key={task._id}></AllTasksCard>)
//                 }
//             </div>

//         </div>
//     );
// };

// export default AllTaskPage;

import React, { useState, useContext } from 'react';
import { useLoaderData } from 'react-router';
import AllTasksCard from '../components/AllTasksCard';
import { AuthContext } from '../provider/AuthProvider';

const AllTaskPage = () => {
    const tasksData = useLoaderData();
    const { isDark } = useContext(AuthContext);

    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        'All',
        'Web Development',
        'Design',
        'Photo Edit',
        'Video Edit',
        'SEO',
        'Marketing',
        'Writing'
    ];

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const clearFilter = () => {
        setSelectedCategory('All');
    };

    const filteredTasks =
        selectedCategory === 'All'
            ? tasksData
            : tasksData.filter((task) =>
                  task.category?.toLowerCase().includes(selectedCategory.toLowerCase())
              );

    return (
        <div className={`-mt-18 pt-18 py-10 ${isDark ? 'bg-[#D2D0A0]/20' : ''}`}>
            {/* Header */}
            <div className='text-center w-11/12 mx-auto mb-8 py-8'>
                <h1 className='text-4xl mb-4 font-medium w-fit mx-auto bg-[#88af2b]/20 py-2 px-4'>
                    See All Available Tasks
                </h1>
                <p>
                    Explore a wide range of tasks posted by real clients. Filter by category, budget,
                    and deadline to find your perfect match.
                </p>

                {/* Filter Dropdown */}
                <div className='mt-6 flex justify-center  items-center gap-4 flex-wrap'>
                    <select
                        className='px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-400'
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    {selectedCategory !== 'All' && (
                        <button
                            onClick={clearFilter}
                            className='px-4 py-2 bg-[#689e6d] text-white rounded-md hover:bg-red-600 transition'
                        >
                            Clear Filter
                        </button>
                    )}
                </div>
            </div>

            {/* Task Grid or Message */}
            <div className="w-11/12 lg:w-9/12 mx-auto">
                {filteredTasks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredTasks.map((task) => (
                            <AllTasksCard task={task} key={task._id} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-black bg-[#689e6d]/50 rounded-2xl text-xl py-20">
                         No tasks found in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllTaskPage;
