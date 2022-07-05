import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import BunnyInterface from "../interfaces/BunnyInterface";
import {random} from "nanoid";
import InventoryItemInterface from "../interfaces/InventoryItem";

const BunnyGeneration = (bunny: BunnyInterface) => {
    const list = Object.entries(bunny.bunny)
    const backgroundRef = React.useRef<HTMLImageElement>(null);
    const baseRef = React.useRef<HTMLImageElement>(null);
    const linkRef = React.useRef<HTMLAnchorElement>(null)
    let canvasRef = useRef<HTMLCanvasElement | null>(null);
    let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

    const downloadImage = async () => {

        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext('2d');
            let ctx = canvasCtxRef.current;
            let img = baseRef.current;
                list.map(item => {
                    console.log(item)
                    let url=''
                    if (item[1].name != '') {
                        console.log(item[1].name)
                        url = '/images/bunny_generation/' + item[1].type + '/' + item[1].name + '.png';
                        if (img) {
                            img.src = url;
                            ctx!.drawImage(img, 0, 0, 868, 1250)
                        }
                    }
                })
            if (ctx?.canvas && linkRef.current) {
                linkRef.current.href = ctx?.canvas.toDataURL();
                linkRef.current.click();
            }
        }
    }
    return <div className={'w-full h-full flex justify-center relative'}>
        <div onClick={() => {
            downloadImage()
        }} className={'h-12 absolute bottom-[-90px] cursor-pointer sm:bottom-[-60px] z-50 green-gradient w-10/12 rounded-full flex justify-center items-center font-bold'}>
            <div className={'relative inline-block w-6 h-5 mr-2'}><Image src={'/images/download_button.svg'} layout={'fill'}/></div>
            <p className={'inline-block'}>Save your bunny</p>
        </div>
        <a ref={linkRef} download={'myBunny.png'} className={'absolute top-52 z-50 hidden'}>EBASH</a>
        {list.map((item, counter) => {
            if (item[1].name!='') {
                return <div key={random(4).toString()} className={'w-full absolute top-0 left-0 h-full'}>
                    <img src={'/images/bunny_generation/' + item[0] + '/' + item[1].name + '.png'}
                         className={'rounded-xl'}/>
                </div>
            } else {
                return null
            }
        })}
        <img src={'/images/bunny_generation/'+ list[1][0] + '/' + list[1][1].name + '.png'} className={'rounded-xl hidden'} ref={baseRef}/>
        <canvas ref={canvasRef} width={868} height={1250} className={'hidden'}>
        </canvas>

    </div>
};

export default BunnyGeneration;
