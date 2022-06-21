import React from 'react';

import InventoryItemInterface from "../interfaces/InventoryItem";
interface inventoryInterface{
    inventory: Array<InventoryItemInterface>,
}
import BunnyInterface from "../interfaces/BunnyInterface";

interface InventoryCardsInterface extends  inventoryInterface{
    attachItemToBunny:(place:string|"base"|"eyes"|"mouth"|"left"|"right"|"necklace"|"face"|"clothes"|"hat"|"overhead"|"ears",item:InventoryItemInterface)=>any,
    bunny:BunnyInterface,
    currentTab:string|"base"|"eyes"|"mouth"|"left"|"right"|"necklace"|"face"|"clothes"|"hat"|"overhead"|"ears",
}

const InventoryCards = ({inventory, bunny, attachItemToBunny,currentTab}:InventoryCardsInterface) => {

    return (
        <div className={'w-full h-full'}>
            <div className={'grid grid-cols-3 gap-2 grid-rows-3'}>
                {inventory.filter((obj:InventoryItemInterface)=> {
                    return obj.type==currentTab;
                }).map((item:InventoryItemInterface)=><div key={item.name} onClick={()=>{attachItemToBunny(currentTab,item)}}>{item.name}</div>)}
            </div>

        </div>
    );
};

export default InventoryCards;