import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Features from '../Features/Features';
import Course from '../Course/Course';

const Home = () => {
    return (
        <div className=''>
            <div className='home-container '>
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
            <div className='flex justify-center'>
                <h1 className='mt-48 text-7xl'>Our featured courses</h1>
                <Course></Course>
            </div>
        </div>
    );
};

export default Home;