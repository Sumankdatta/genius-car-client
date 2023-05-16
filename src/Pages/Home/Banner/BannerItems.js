import React from 'react';
import './BannerItems.css'

const BannerItems = ({ slide }) => {
    const { image, id, next, prev } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='banner-img'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/4">
                <h1 className='text-6xl text-white text-bold'>
                    Affordable <br />
                    Price For Car <br />
                    Servising
                </h1>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-2/4">
                <p className='text-white text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-3/4">
                <button className="btn btn-warning mr-5">Discover me</button>
                <button className="btn btn-outline btn-warning">Latest Projects</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-3/4 ">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;