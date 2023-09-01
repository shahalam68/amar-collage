import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import Features from '../Features/Features';

const Courses = () => {
    const courses = useLoaderData([]);

    return (

        <div>
            <div className='mt-10'>
                <Features></Features>
            </div>
            <div className='flex justify-center my-32'>
                <h1 className=' text-5xl font-semibold text-[#4255a4]'>Our courses</h1>
            </div>
            <div className='grid grid-cols-4 gap-10 place-content-center px-24'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    >
                    </Course>)
                }
            </div>
        </div>
    );
};

export default Courses;