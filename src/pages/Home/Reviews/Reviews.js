import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Reviews = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["reviews"],
    async () => await axios.get("https://yokoo-server.vercel.app/allReviews")
  );

  // if data is loading
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // error message query
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    // Reviews page
    <div className='mt-12 mb-12 space-y-10'>
      <h3 className='text-4xl font-bold my-1 opacity-90'>
        Customer<span className='text-purple-color opacity-90'> Reviews</span>
      </h3>
      <div className='w-full grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-4 mb-8 md:mb-0'>
        {data.data?.map((review) => (
          <div className='bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl py-10 px-5'>
            <div className='flex items-center mt-4'>
              <div className='flex flex-col text-left justify-between'>
                <span className='font-semibold mr-4 text-indigo-500 text-lg text-purple-color'>
                  {review.yokooUserName}
                </span>
                <span className='font-semibold text-lg'>
                  {review.companyName}
                </span>
                <span className=' text-purple-color flex items-center'>
                  {review.bicycleName}
                </span>
              </div>
            </div>
            <p className='text-gray-600 dark:text-white text-left py-10 leading-loose'>
              <span className='font-bold text-indigo-500 text-lg'>“</span>
              {review.yourReview}
              <span className='font-bold text-indigo-500 text-lg'>”</span>
            </p>
            <div className='text-left'>
              {review.bicycleRating}
              <i className='fa-solid fa-star text-purple-color'></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
