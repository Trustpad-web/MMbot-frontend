'use client'

import Slider from 'react-slick';
import Image from 'next/image';
import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MarketSlider() {

    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        autoplay: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} className='case-slider'>
            <div>
                <div className='bg-[#FFE000] 320-529:pb-[40px] 320-529:flex-wrap 530-1100:flex-wrap flex items-center justify-between pl-[40px] pt-[30px]  pb-[65px] rounded-[10px] pr-[70px] overflow-hidden relative z-[1] 320-529:pr-[50px] '>
                    <div>
                        <h4 className='text-[40px] 320-529:text-[30px] 530-1100:text-[30px] 320-529:leading-[40px] 530-1100:leading-[40px] text-[#1A2531] font-poppins-semibold '>Automated trading robots at your fingertips</h4>
                        <p className='text-[#1A2531] font-poppins-regular text-[16px] 320-529:mb-[20px] 530-1100:mb-[20px]  '>Welcome to your Block Bounce Dashboard where you have full access to our suite of <br /> automated trading bots at the palm of your finger tips.</p>
                    </div>
                    <div>
                        <button className='bg-[#212F40] border-transparent outline-none w-[175px] py-[15px] rounded-[10px] font-poppins-semibold text-white text-[16px] 320-529:w-[105px] 320-529:py-[10px]'>Start now</button>
                    </div>
                    <div className='absolute right-[-17px] top-[10px] z-[-1] 320-529:top-[unset] 320-529:right-[-20px] 320-529:bottom-[-20px] 320'>
                        <Image src='/assets/images/bot.png' alt='' width={232} height={270} />
                    </div>
                </div>
            </div>

            <div>
                <div className='bg-[#FFE000] 320-529:pb-[40px] 320-529:flex-wrap 530-1100:flex-wrap flex items-center justify-between pl-[40px] pt-[30px]  pb-[65px] rounded-[10px] pr-[70px] overflow-hidden relative z-[1] 320-529:pr-[50px] '>
                    <div>
                        <h4 className='text-[40px] 320-529:text-[30px] 530-1100:text-[30px] 320-529:leading-[40px] 530-1100:leading-[40px] text-[#1A2531] font-poppins-semibold '>Automated trading robots at your fingertips</h4>
                        <p className='text-[#1A2531] font-poppins-regular text-[16px] 320-529:mb-[20px] 530-1100:mb-[20px]  '>Welcome to your Block Bounce Dashboard where you have full access to our suite of<br /> automated trading bots at the palm of your finger tips.</p>
                    </div>
                    <div>
                        <button className='bg-[#212F40] border-transparent outline-none w-[175px] py-[15px] rounded-[10px] font-poppins-semibold text-white text-[16px] 320-529:w-[105px] 320-529:py-[10px]'>Start now</button>
                    </div>
                    <div className='absolute right-[-17px] top-[10px] z-[-1] 320-529:top-[unset] 320-529:right-[-20px] 320-529:bottom-[-20px] 320'>
                        <Image src='/assets/images/bot.png' alt='' width={232} height={270} />
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-[#FFE000] 320-529:pb-[40px] 320-529:flex-wrap 530-1100:flex-wrap flex items-center justify-between pl-[40px] pt-[30px]  pb-[65px] rounded-[10px] pr-[70px] overflow-hidden relative z-[1] 320-529:pr-[50px] '>
                    <div>
                        <h4 className='text-[40px] 320-529:text-[30px] 530-1100:text-[30px] 320-529:leading-[40px] 530-1100:leading-[40px] text-[#1A2531] font-poppins-semibold '>Automated trading robots at your fingertips</h4>
                        <p className='text-[#1A2531] font-poppins-regular text-[16px] 320-529:mb-[20px] 530-1100:mb-[20px]  '>Welcome to your Block Bounce Dashboard where you have full access to our suite of<br /> automated trading bots at the palm of your finger tips.</p>
                    </div>
                    <div>
                        <button className='bg-[#212F40] border-transparent outline-none w-[175px] py-[15px] rounded-[10px] font-poppins-semibold text-white text-[16px] 320-529:w-[105px] 320-529:py-[10px]'>Start now</button>
                    </div>
                    <div className='absolute right-[-17px] top-[10px] z-[-1] 320-529:top-[unset] 320-529:right-[-20px] 320-529:bottom-[-20px] 320'>
                        <Image src='/assets/images/bot.png' alt='' width={232} height={270} />
                    </div>
                </div>
            </div>
        </Slider>

    );
};


