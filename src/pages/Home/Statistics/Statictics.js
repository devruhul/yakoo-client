import React from 'react';

const Statictics = () => {
    return (
        <div class="stats stats-vertical lg:stats-horizontal shadow m-10">

            <div class="stat">
                <div class="stat-figure text-primary">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <div class="stat-title">Total Likes</div>
                <div class="stat-value text-primary">25.6K</div>
                <div class="stat-desc">21% more than last month</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-secondary">
                    <i class="fa-solid fa-bolt"></i>
                </div>
                <div class="stat-title">Page Views</div>
                <div class="stat-value text-secondary">2.6M</div>
                <div class="stat-desc">21% more than last month</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-secondary">
                    <div class="avatar online">
                        <div class="w-16 rounded-full">
                            <img src="https://placeimg.com/128/128/people" alt="" />
                        </div>
                    </div>
                </div>
                <div class="stat-value">86%</div>
                <div class="stat-title">Tasks done</div>
                <div class="stat-desc text-secondary">31 tasks remaining</div>
            </div>

        </div>
    );
};

export default Statictics;