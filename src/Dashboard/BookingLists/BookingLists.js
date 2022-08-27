import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';

const BookingLists = () => {
    const [changeStatus, setChangeStatus] = useState("");

    const { data, isLoading, isError, error } = useQuery(["bookingsLists"], async () => await axios.get('https://yokoo-server.vercel.app/allBookings'))

    // if data is loading
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // error message query
    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    // get order status
    const getStatus = () => {
        const selectStatus = document.getElementById('status');
        const selectOption = selectStatus.options[selectStatus.selectedIndex];
        const optionValue = selectOption.value;
        console.log(optionValue);
        setChangeStatus(optionValue);
    }

    // change order status
    const handleChangeStatus = (e, _id) => {
        e.preventDefault();
        const updateStatus = {
            orderStatus: changeStatus
        }

        axios.put(`https://yokoo-server.vercel.app/bookings/${_id}`, updateStatus)
            .then(main => {
                if (main.data?.modifiedCount > 0) {
                    alert('Status updated successfully');
                    setChangeStatus(changeStatus);
                }
                else {
                    alert('Status not updated');
                }
            })
    }

    // delete order from database by id
    const handleOrderDelete = (_id) => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            axios.delete(`https://yokoo-server.vercel.app/booking/${_id}`)
                .then(order => {
                    if (order.data?.deletedCount) {
                        alert('Deleted Successfully!')
                    } else {
                        alert('Error!', order.data?.message)
                    }
                })
        }
    }

    return (
        // Booking Lists page
        <div className=" container px-5 py-4 col-span-full xl:col-span-6  rounded-sm">
            <header>
                <div className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">All
                    <span className='text-purple-color'> Orders </span>
                    Lists
                </div>
            </header>
            <div className="pb-10">
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full m-10">
                        {/* Table header */}
                        <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Service Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Edit Status</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Delete Order</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-slate-100">
                            {
                                data.data?.map(bookingsList =>
                                    <tr key={bookingsList._id}>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="font-medium text-slate-800">{bookingsList.userName}</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">{bookingsList.userEmail}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">{bookingsList.bicycleTitle}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className='flex justify-around'>
                                                <select id='status' value={changeStatus} onChange={getStatus} className="select select-primary w-50 select-sm max-w-xs">
                                                    {/* {bookingsList.orderStatus === "Pending" ? <option value={bookingsList.orderStatus}>{bookingsList.orderStatus}</option> : null
                                                    } */}

                                                    {bookingsList.orderStatus === "Ongoing" ? <option value={bookingsList.orderStatus}>{bookingsList.orderStatus}</option> : null}

                                                    {bookingsList.orderStatus === "Done" ? <option value={bookingsList.orderStatus}>{bookingsList.orderStatus}</option> : null}


                                                    <option disabled defaultValue={bookingsList.orderStatus}>Tried but not working</option>
                                                    <option value={bookingsList.orderStatus}>{bookingsList.orderStatus}</option>

                                                    <option value="Ongoing">Ongoing</option>
                                                    <option value="Done">Done</option>
                                                </select>
                                                <div>
                                                    <button onClick={handleChangeStatus} className="btn btn-primary">Update</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div>
                                                <button onClick={() => handleOrderDelete(bookingsList._id)} className="btn btn-outline btn-secondary">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default BookingLists;