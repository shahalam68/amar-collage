import React from 'react';
import './Home.css'
import { Link, useLoaderData } from 'react-router-dom';
import Features from '../Features/Features';
import Course from '../Course/Course';

const Home = () => {
    const courses = useLoaderData([]);
    console.log(courses);
    return (
        <div className=''>
            <div className='home-container  '>
                <div className='flex justify-between gap-x-10'>
                    <div className='header-text flex-1 mt-40 ml-20 pl-2'>
                        <h1 className='text-7xl font-bold text-white '>Online learning</h1>
                        <h1 className='text-7xl font-bold text-white mb-10 '>platform</h1>
                        <h2 className='text-white'>Build skills with courses, certificates, and degrees online from world-class universities and companies</h2>
                        <Link to="/courses"><button className='rounded bg-orange-400 p-2 px-6 mt-8 text-white'>See Courses</button></Link>
                    </div>
                    <div className='flex-1 img-container mt-16'>
                        <img className='w-auto h-4/5' src="/public/home.png" alt="" />
                    </div>
                </div>
                <div className='features-div'>
                    <Features></Features>
                </div>
            </div>
            <div className='flex justify-center mt-40'>
                <h1 className=' text-5xl font-semibold text-[#4255a4]'>Our featured courses</h1>
            </div>
            <div className='grid grid-cols-4 gap-10 place-content-center px-24 mt-24 px-24'>
                {
                    courses.slice(0, 4).map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Home;