import React from 'react';

import Image from "next/image";

interface InventoryItemInterface{
    type:string,
    name:string,
}

interface BunnyInterface{
    bunny:{
        base?:InventoryItemInterface,
        mouth?:InventoryItemInterface,
        eyes?:InventoryItemInterface,
        ears?:InventoryItemInterface,
        face?:InventoryItemInterface,
        hat?:InventoryItemInterface,
        clothes?:InventoryItemInterface,
        left?:InventoryItemInterface,
        right?:InventoryItemInterface,
        necklace?:InventoryItemInterface,
        overhead?:InventoryItemInterface,
    }
}

const BunnyGeneration = (bunny:BunnyInterface) => {
    return (
        <div className={'w-full relative h-full'}>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                <Image src={'/images/bunny_generation/Rabbits/'+bunny.bunny.base?.name+'.png'} layout={'fill'}></Image>
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.eyes==undefined||bunny.bunny.eyes.name==''?<div></div> : <Image src={'/images/bunny_generation/Eyes/'+bunny.bunny.eyes?.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.mouth==undefined||bunny.bunny.mouth.name==''?<div></div> : <Image src={'/images/bunny_generation/Mouth/'+bunny.bunny.mouth?.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.face==undefined||bunny.bunny.face.name==''?<div></div> : <Image src={'/images/bunny_generation/Faces/'+bunny.bunny.face?.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.overhead==undefined||bunny.bunny.overhead.name==''?<div></div> : <Image src={'/images/bunny_generation/Over head/'+bunny.bunny.overhead?.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.hat==undefined||bunny.bunny.hat.name==''?<div></div> : <Image src={'/images/bunny_generation/Hats/'+bunny.bunny.hat?.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.clothes==undefined||bunny.bunny.clothes.name==''?<div></div> : <Image src={'/images/bunny_generation/Clothes/'+bunny.bunny.clothes?.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.left==undefined||bunny.bunny.left.name==''?<div></div> : <Image src={'/images/bunny_generation/Left hand/'+bunny.bunny.left?.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.right==undefined||bunny.bunny.right.name==''?<div></div> : <Image src={'/images/bunny_generation/Right hand/'+bunny.bunny.right?.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.ears==undefined||bunny.bunny.ears.name==''?<div></div> : <Image src={'/images/bunny_generation/Ears/'+bunny.bunny.ears?.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.necklace==undefined||bunny.bunny.necklace.name==''?<div></div> : <Image src={'/images/bunny_generation/Necklace/'+bunny.bunny.necklace?.name+'.png'} layout={'fill'}></Image>}
            </div>
        </div>
    );
};

export default BunnyGeneration;