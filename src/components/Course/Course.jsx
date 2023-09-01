import React from 'react';

const Course = ({ course }) => {
    const { name, price, id, star, starCount, description, level, img } = course;
    return (
        <div className='shadow-lg'>
            <img className='' src={img} alt="" />
            <div className='p-2'>
                <h2 className='my-6 font-bold text-[#4255a4]' >{course.name}</h2>
                <p>{description.slice(0, 150)}...</p>
            </div>

        </div>
    );
};

export default Course;