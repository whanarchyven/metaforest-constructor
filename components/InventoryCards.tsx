import React from 'react';
import Image from "next/image";
import InventoryItemInterface from "../interfaces/InventoryItem";

interface inventoryInterface {
    inventory: Array<InventoryItemInterface>,
}

import BunnyInterface from "../interfaces/BunnyInterface";

interface InventoryCardsInterface extends inventoryInterface {
    attachItemToBunny: (place: string|"background" | "base" | "eyes" | "mouth" | "left" | "right" | "necklace" | "face" | "clothes" | "hat" | "overhead" | "ears", item: InventoryItemInterface) => any,
    bunny: BunnyInterface,
    currentTab: string|"background" | "base" | "eyes" | "mouth" | "left" | "right" | "necklace" | "face" | "clothes" | "hat" | "overhead" | "ears",
}

const InventoryCards = ({inventory, bunny, attachItemToBunny, currentTab}: InventoryCardsInterface) => {
    return (
        <div className={'inventory-container absolute top-0'}>
            <div className={'grid grid-cols-3 sm:grid-cols-3 gap-1 justify-around overflow-y-scroll max-h-full'}>
                {inventory.filter((obj: InventoryItemInterface) => {
                    return obj.type == currentTab;
                }).map((item: InventoryItemInterface) => {
                    let clas = '';
                    if (bunny.bunny[item.type as "base"|"background" | "eyes" | "mouth" | "left" | "right" | "necklace" | "face" | "clothes" | "hat" | "overhead" | "ears"]?.name == item.name) {
                        clas = 'rounded-xl cursor-auto bg-[url("../public/images/cards_bg_active.svg")]'
                    } else {
                        clas = ''
                    }
                    return <div key={item.name} onClick={() => {
                        attachItemToBunny(currentTab, item)
                    }} className={'auto-rows-fr min-h-[100px] flex content-center justify-center mt-3 flex-wrap cursor-pointer'}>
                        <div className={'bg-cover w-[100px] rounded-xl h-[100px] relative bg-[url("../public/images/cards_bg.svg")]' + clas}><Image
                            src={'/images/miniatures/' + item.type + '/' + item.name + '.png'}
                            layout={'fill'}></Image></div>
                        {/*<p className={'font-bold w-full text-center'}>{item.name}</p>*/}
                    </div>
                })}
            </div>
        </div>
    );
};

export default InventoryCards;