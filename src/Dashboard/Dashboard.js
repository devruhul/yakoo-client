import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import useFirebase from '../Hooks/useFirebase';

const Dashboard = () => {
    // let { admin } = useAuth();
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 inline-flex w-60 bg-footer-bg ">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/payment'>Pay</Link></li>
                    <li><Link to='/dashboard/addBicycle'>Add Bicycle</Link></li>
                    <li><Link to='/dashboard/manageBicycles'>Manage Bicycles</Link></li>
                    <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                    <li><Link to='/dashboard/bicycleReview'>Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;