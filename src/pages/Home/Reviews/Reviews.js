import React from 'react';
import Review from './Review/Review';


const reviews = [
    {
        id: 1,
        personName: 'Nash Patrik',
        company: 'CEO, Manpol',
        text: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself'
    },
    {
        id: 2,
        personName: 'Mirriam Barron',
        company: 'CEO, TechNext',
        text: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself'
    },
    {
        id: 3,
        personName: 'Bria Malone',
        company: 'CEO, TechPick',
        text: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself'
    }
]

const Reviews = () => {
    return (
        <div className='mt-12 space-y-10 '>
            <h3 className='text-4xl font-bold my-1 opacity-90'>Customer<span className="text-purple-color opacity-90"> Reviews</span></h3>
            <div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
                {
                    reviews.map((review,) => <Review
                        key={review.id}
                        {...review}
                    ></Review>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;