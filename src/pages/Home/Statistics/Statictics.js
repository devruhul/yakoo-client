import React from "react";

const Statictics = () => {
  return (
    // statistics page
    <div className='stats stats-vertical lg:stats-horizontal shadow m-10'>
      <div className='stat'>
        <div className='stat-figure text-primary'>
          <i className='fa-solid fa-heart'></i>
        </div>
        <div className='stat-title'>Total Likes</div>
        <div className='stat-value text-primary'>25.6K</div>
        <div className='stat-desc'>21% more than last month</div>
      </div>
      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <i className='fa-solid fa-bolt'></i>
        </div>
        <div className='stat-title'>Page Views</div>
        <div className='stat-value text-secondary'>2.6M</div>
        <div className='stat-desc'>21% more than last month</div>
      </div>
      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <div className='avatar online'>
            <div className='w-16 rounded-full'>
              <img src='https://placeimg.com/128/128/people' alt='' />
            </div>
          </div>
        </div>
        <div className='stat-value'>86%</div>
        <div className='stat-title'>Tasks done</div>
        <div className='stat-desc text-secondary'>31 tasks remaining</div>
      </div>
    </div>
  );
};

export default Statictics;
