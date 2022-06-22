import React from 'react';
import Image from "next/image";
import BunnyInterface from "../interfaces/BunnyInterface";

const BunnyGeneration = (bunny:BunnyInterface) => {
    const list=Object.entries(bunny.bunny)
    return <div className={'w-full h-full relative'}>
        {list.map((item)=>{if(item[1].name!='') {
            return <div key={item[1].name} className={'w-full absolute top-0 left-0 h-full'}>
                <Image src={'/images/bunny_generation/' + item[0] + '/' + item[1].name + '.png'} layout={'fill'} className={'rounded-xl'}/>
            </div>
        }
        else{
            return null
        }
        })}
    </div>
};

export default BunnyGeneration;
