import React from 'react';
import Features from '../Features/Features';

const About = () => {
    return (
        <div>
            <div className='mt-10'>
                <Features></Features>
                <div className='p-24'>
                    <h1 className=' text-5xl font-semibold text-[#4255a4] text-center' >Learn new skills online with top educators</h1>
                    <div className='text-xl my-10 ml-48' >
                        <p>The automated process all your website tasks. Discover tools and techniques to <br /> engage effectively with vulnerable children and young people.</p>
                        <p className='my-10'><span className='text-orange-400'>&#10003;</span> Techniques to engage effectively with vulnerable children and young people.</p>
                        <p className='my-10'><span className='text-orange-400'>&#10003;</span> Join millions of people from around the world learning together.</p>
                        <p className='my-10'><span className='text-orange-400'>&#10003;</span> Join millions of people from around the world learning together.</p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;