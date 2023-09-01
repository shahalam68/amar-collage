import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { name, price, id, star, starCount, description, level, img } = course;
    return (
        <div className='shadow-lg mb-12'>
            <img className='' src={img} alt="" />
            <div className='p-2'>
                <h2 className='my-6 font-bold text-[#4255a4]' >{course.name}</h2>
                <p>{description.slice(0, 120)}...</p>
                <Rating
                className='text-orange-400 mt-2	'
                    initialRating={star}
                    emptySymbol="fa fa-star-o icon-color"
                    fullSymbol="fa fa-star icon-color"
                    readonly></Rating>
                <p><span className='text-orange-400 mt-2'>({star})</span> Based On {starCount}</p>
                <p> &#2547;{price}</p>
                <Link to="/courses"><button className='rounded bg-orange-400 p-2 px-6 mt-8 text-white'>See Courses</button></Link>
            </div>
        </div>
    );
};
export default Course;