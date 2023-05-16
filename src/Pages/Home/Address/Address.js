import React from 'react';
import icon1 from '../../../assets/address/img3.png'
import icon2 from '../../../assets/address/img1.png'
import icon3 from '../../../assets/address/img2.png'

const Address = () => {
    return (
        <div className='flex justify-between px-12 h-40 bg-black text-white rounded-xl mb-16 mt-16'>
            <div className='flex items-center justify-center'>
                <img src={icon1} alt="" className='w-16 mr-5' />
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={icon2} alt="" className='w-12 mr-5' />
                <div>
                    <p>Have a question?</p>
                    <h3 className='text-2xl font-bold'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={icon3} alt="" className='w-16 mr-5' />
                <div>
                    <p>Need a repair? our address</p>
                    <h3 className='text-2xl font-bold'>Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Address;