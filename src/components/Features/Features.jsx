import React from 'react';

const Features = () => {
    return (
        <div className='grid grid-cols-3 gap-10 place-content-center px-24 '>
            <div className='flex bg-slate-50 p-3 min-w-min gap-3 rounded-3xl '>
                <div>
                    <img className='w-auto h-28' src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon1.svg" alt="" />
                </div>
                <div className='pt-2'>
                    <h2 className='text-[#4255a4] text-xl font-bold'>60+ UX courses</h2>
                    <h2 className="text-[#4255a4] text-l">The automated process all your website tasks.</h2>
                </div>
            </div>
            <div className='flex bg-slate-50 p-3 min-w-min gap-3 rounded-3xl '>
                <div>
                    <img className='w-auto h-28' src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon2.svg" alt="" />
                </div>
                <div className='pt-2'>
                    <h2 className='text-[#4255a4] text-xl font-bold'>60+ UX courses</h2>
                    <h2 className="text-[#4255a4] text-l">The automated process all your website tasks.</h2>
                </div>
            </div>
            <div className='flex bg-slate-50 p-3 min-w-min gap-3 rounded-3xl '>
                <div>
                    <img className='w-auto h-28' src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon3.svg" alt="" />
                </div>
                <div className='pt-2'>
                    <h2 className='text-[#4255a4] text-xl font-bold'>60+ UX courses</h2>
                    <h2 className="text-[#4255a4] text-l">The automated process all your website tasks.</h2>
                </div>
            </div>
        </div>
    );
};

export default Features;