import React from 'react';

import { Link, Outlet } from 'react-router-dom';
// import useFirebase from '../Hooks/useFirebase';

const Dashboard = () => {
    // let { admin } = useFirebase();
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>
            <div class="drawer-side sm:w-25">
                <label for="dashboard-sidebar" class="drawer-overlay sm:w-25"></label>
                <ul class="menu p-4 inline-flex bg-footer-bg ">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/payment'>Pay</Link></li>
                    <li><Link to='/dashboard/addBicycle'>Add Bicycle</Link></li>
                    <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                    <li><Link to='/dashboard/bicycleReview'>Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;