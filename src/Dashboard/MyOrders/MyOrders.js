import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const { yokooUser } = useAuth()
    // load all bookings using react query nad current user email
    const {  isError, error, status,  data } = useQuery(
        ['myOrders', yokooUser.email], async () => await axios.get(`http://localhost:5000/booking/${yokooUser.email}`,
            {
                // The query will not execute until the userId exists
                enabled: !!yokooUser.email,
            }
        ))

    if (status === 'loading') {
        return <div>Loading...</div>;
    }
    // error message query
    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
              <div className="m-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
                    My <span className='text-purple-color'>Orders </span>
                </div>
            <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {
                    data?.data.map(order => (
                        <div key={order._id} className="card w-50 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={order?.bicycleImg} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-purple-color cursor-pointer">{order?.bicycleTitle}</h2>
                                <p>{order?.bicycleDescription}</p>
                                <p>${order?.bicyclePrice}</p>
                                <h2 className="text-base-300 p-4 rounded-md bg-purple-color"> {order.orderStatus}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default MyOrders;