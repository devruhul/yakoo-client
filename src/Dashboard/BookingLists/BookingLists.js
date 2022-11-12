import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const BookingLists = () => {
  const [selects, setSelects] = useState("");
  const { data, isLoading, isError, error } = useQuery(
    ["bookingsLists"],
    async () => await axios.get("https://yokoo-server.vercel.app/allBookings")
  );

  // if data is loading
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // error message query
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // change order status
  const handleChangeStatus = (e, _id) => {
    e.preventDefault();
    const updateStatus = [selects];

    axios
      .put(`https://yokoo-server.vercel.app/bookings/${_id}`, updateStatus)
      .then((main) => {
        if (main.data?.modifiedCount > 0) {
          alert("Status updated successfully");
          setSelects("");
        } else {
          alert("Status not updated");
        }
      });
  };

  // delete order from database by id
  const handleOrderDelete = (_id) => {
    const result = window.confirm("Are you sure to delete?");
    if (result) {
      axios
        .delete(`https://yokoo-server.vercel.app/booking/${_id}`)
        .then((order) => {
          if (order.data?.deletedCount) {
            alert("Deleted Successfully!");
          } else {
            alert("Error!", order.data?.message);
          }
        });
    }
  };

  return (
    // Booking Lists page
    <div className=' container px-5 py-4 col-span-full xl:col-span-6  rounded-sm'>
      <header>
        <div className='mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white'>
          All
          <span className='text-purple-color'> Orders </span>
          Lists
        </div>
      </header>
      <div className='pb-10'>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full '>
            {/* Table header */}
            <thead className='text-xs font-semibold uppercase text-slate-400 bg-slate-50'>
              <tr>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-lg text-left'>Name</div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-lg text-left'>Email</div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-lg text-left'>
                    Service Name
                  </div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-lg text-center'>
                    Edit Status
                  </div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-lg text-center'>
                    Delete Order
                  </div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className='text-sm divide-y divide-slate-100'>
              {data.data?.map((bookingsList) => (
                <tr key={bookingsList._id}>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <div className='font-medium text-slate-800'>
                        {bookingsList?.userName}
                      </div>
                    </div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='text-left'>{bookingsList?.userEmail}</div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='text-left font-medium text-green-500'>
                      {bookingsList?.bicycleTitle}
                    </div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='flex justify-around'>
                      <select
                        value={selects}
                        onChange={(e) => setSelects(e.target.value)}
                        className='select select-primary w-50 select-sm max-w-xs'
                      >
                        <optgroup label='Select Order Status'>
                          <option
                            selected
                            defaultValue={bookingsList?.orderStatus[0] || null}
                          >
                            {bookingsList.orderStatus[0] || null}
                          </option>
                        </optgroup>

                        {/* if order status is pending then show option on going and done */}
                        {bookingsList?.orderStatus[0] === "Pending" && (
                          <>
                            <option value='OnGoing'>OnGoing</option>
                            <option value='Done'>Done</option>
                          </>
                        )}
                        {/* if order status is on going then show option pending and done */}
                        {bookingsList?.orderStatus[0] === "OnGoing" && (
                          <>
                            <option value='Pending'>Pending</option>
                            <option value='Done'>Done</option>
                          </>
                        )}
                        {/* if order status is done then show option pending and on going */}
                        {bookingsList.orderStatus[0] === "Done" && (
                          <>
                            <option value='Pending'>Pending</option>
                            <option value='OnGoing'>OnGoing</option>
                          </>
                        )}
                      </select>
                      <div>
                        <button
                          onClick={(e) =>
                            handleChangeStatus(e, bookingsList._id)
                          }
                          className='btn btn-primary'
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div>
                      <button
                        onClick={() => handleOrderDelete(bookingsList._id)}
                        className='btn btn-outline btn-secondary'
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingLists;
