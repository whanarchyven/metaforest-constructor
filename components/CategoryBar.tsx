import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import Image from "next/image";
interface categoryBarInterface {
    currenTab: string | "background" | "base" | "eyes" | "mouth" | "left" | "right" | "necklace" | "face" | "clothes" | "hat" | "overhead" | "ears",
    setCurrentTab: (newTab: string | "background" | "base" | "eyes" | "mouth" | "left" | "right" | "necklace" | "face" | "clothes" | "hat" | "overhead" | "ears") => void,
}
import { Navigation } from "swiper";



const CategoryBar = ({currenTab, setCurrentTab}: categoryBarInterface) => {

    const tabs = ['base',
        'faces',
        'ears',
        'eyes',
        'mouth',
        'clothes',
        'hats',
        'left',
        'right',
        'necklace',
        'overhead',
        'background'];

    return (
        // <div className={'tab-container'}>
        //     {tabs.map(item => {
        //         let clas = item == currenTab ? 'active-tab' : 'deactive-tab';
        //         return (<p key={item} onClick={() => {
        //             setCurrentTab(item);
        //         }} className={clas}>{ucFirst(item)}</p>)
        //     })}
        // </div>

        <Swiper
            slidesPerView={5}
            spaceBetween={0}
            centeredSlides={true}
            className="mySwiper"
            onSlideChange={(swiper) => setCurrentTab(tabs[(swiper.activeIndex)])}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            navigation={true}
        >
            {tabs.map(item=>{
                return(
                    <SwiperSlide key={item}>
                        {({ isActive }) => (
                            <div className={'w-[50px] h-[50px] relative rounded-full'} key={item}>
                                {isActive?
                                    <div className={'w-full rounded-full h-full rounded-full'}>
                                        <Image src={'/images/tab_icons/'+item+'.svg'} className={'rounded-full'} layout={'fill'}></Image>
                                    </div>
                                    :
                                    <div className={'w-full rounded-full h-full rounded-full opacity-50 scale-75'}>
                                        <Image src={'/images/tab_icons/'+item+'.svg'} className={'rounded-full'} layout={'fill'}></Image>
                                    </div>}
                            </div>
                        )}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default CategoryBar;