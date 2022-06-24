import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import BunnyInterface from "../interfaces/BunnyInterface";
import {random} from "nanoid";

const BunnyGeneration = (bunny: BunnyInterface) => {
    const list = Object.entries(bunny.bunny)

    const backgroundRef = React.useRef<HTMLImageElement>(null);
    const baseRef = React.useRef<HTMLImageElement>(null);
    const mouthRef = React.useRef<HTMLImageElement>(null);
    const eyesRef = React.useRef<HTMLImageElement>(null);
    const earsRef = React.useRef<HTMLImageElement>(null);
    const facesRef = React.useRef<HTMLImageElement>(null);
    const hatsRef = React.useRef<HTMLImageElement>(null);
    const clothesRef = React.useRef<HTMLImageElement>(null);
    const leftRef = React.useRef<HTMLImageElement>(null);
    const rightRef = React.useRef<HTMLImageElement>(null);
    const necklaceRef = React.useRef<HTMLImageElement>(null);
    const overheadRef = React.useRef<HTMLImageElement>(null);

    const linkRef = React.useRef<HTMLAnchorElement>(null)

    let canvasRef = useRef<HTMLCanvasElement | null>(null);
    let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        // Initialize
        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext('2d');
            let ctx = canvasCtxRef.current;
            // ctx!.beginPath();
            // ctx!.arc(95, 50, 40, 0, 2 * Math.PI);
            // ctx!.stroke();

        }
    }, []);


    const downloadImage = () => {

        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext('2d');
            let ctx = canvasCtxRef.current;
            // ctx!.beginPath();
            // ctx!.arc(95, 50, 40, 0, 2 * Math.PI);
            // ctx!.stroke();
            let img = baseRef.current;
            if (img) {
                list.map(item => {
                    let url=''
                    if (item[1].name != '') {
                        url = '/images/bunny_generation/' + item[0] + '/' + item[1].name + '.png';
                        if (img) {
                            img.src = url;
                            ctx!.drawImage(img, 0, 0, 229, 330)
                        }
                        console.log('AUE')
                    }

                })
            }

            if (ctx?.canvas && linkRef.current) {
                linkRef.current.href = ctx?.canvas.toDataURL()
            }


            console.log('SUKA')


        }


    }

    let refArray = [
        baseRef,
        mouthRef,
        eyesRef,
        earsRef,
        facesRef,
        hatsRef,
        clothesRef,
        leftRef,
        rightRef,
        necklaceRef,
        overheadRef
    ]

    return <div className={'w-full h-full relative'}>
        <button onClick={() => {
            downloadImage()
        }} className={'absolute top-0 z-50'}>SUKA
        </button>
        <a ref={linkRef} download={'myBunny.png'} className={'absolute top-52 z-50'}>EBASH</a>
        {list.map((item, counter) => {
            if (item[1]) {
                return <div key={random(23).toString()} className={'w-full absolute top-0 left-0 h-full'}>
                    <img src={'/images/bunny_generation/' + item[0] + '/' + item[1].name + '.png'}
                         className={'rounded-xl hidden'} ref={refArray[counter]}/>
                </div>
            } else {
                return null
            }
        })}


        {/*<img src={'/images/bunny_generation/'+ list[1][0] + '/' + list[1][1].name + '.png'} className={'rounded-xl hidden'} ref={baseRef}/>*/}
        {/*<img src={'/images/bunny_generation/' + list[2][0] + '/' + list[2][1].name + '.png'} className={'rounded-xl hidden'} ref={mouthRef}/>*/}
        {/*<img src={'/images/bunny_generation/' + list[3][0] + '/' + list[3][1].name + '.png'} className={'rounded-xl hidden'} ref={eyesRef}/>*/}
        {/*<img src={'/images/bunny_generation/' + list[4][0] + '/' + list[4][1].name + '.png'} className={'rounded-xl hidden'} ref={earsRef}/>*/}
        {/*<img src={'/images/bunny_generation/' + list[5][0] + '/' + list[5][1].name + '.png'} className={'rounded-xl hidden'} ref={facesRef}/>*/}
        {/*<img src={'/images/bunny_generation/' + list[6][0] + '/' + list[6][1].name + '.png'} className={'rounded-xl hidden'} ref={hatsRef}/>*/}
        {/*<img src={'/images/bunny_generation/' + list[7][0] + '/' + list[7][1].name + '.png'} className={'rounded-xl hidden'} ref={clothesRef}/>*/}
        {/*<img src={'/images/bunny_generation/' + list[8][0] + '/' + list[8][1].name + '.png'} className={'rounded-xl hidden'} ref={leftRef}/>*/}
        {/*<img src={'/images/bunny_generation/' + list[9][0] + '/' + list[9][1].name + '.png'} className={'rounded-xl hidden'} ref={rightRef}/>*/}
        {/*<img src={'/images/bunny_generation/' + list[10][0] + '/' + list[10][1].name + '.png'} className={'rounded-xl hidden'} ref={necklaceRef}/>*/}
        {/*<img src={'/images/bunny_generation/' + list[11][0] + '/' + list[11][1].name + '.png'} className={'rounded-xl hidden'} ref={overheadRef}/>*/}


        <canvas ref={canvasRef} width={229} height={330}>

        </canvas>


    </div>
};

export default BunnyGeneration;
