import React from 'react';

interface InventoryItemInterface{
    type:string,
    name:string,
}

interface inventoryInterface{
    inventory: Array<InventoryItemInterface>,
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

interface InventoryCardsInterface extends  inventoryInterface{
    changeBase:(item:InventoryItemInterface)=>void,
    changeMouth:(item:InventoryItemInterface)=>void,
    changeEyes:(item:InventoryItemInterface)=>void,
    changeEars:(item:InventoryItemInterface)=>void,
    changeClothes:(item:InventoryItemInterface)=>void,
    changeHat:(item:InventoryItemInterface)=>void,
    changeLeft:(item:InventoryItemInterface)=>void,
    changeRight:(item:InventoryItemInterface)=>void,
    changeNecklace:(item:InventoryItemInterface)=>void,
    changeFace:(item:InventoryItemInterface)=>void,
    changeOverhead:(item:InventoryItemInterface)=>void,
    bunny:BunnyInterface,
}

const InventoryCards = ({inventory, changeClothes, changeEyes, changeEars, changeHat, changeLeft, changeMouth, changeRight, changeNecklace, changeOverhead, changeFace, changeBase, bunny}:InventoryCardsInterface) => {
    return (
        <div className={'w-full h-full'}>
            <div className={'grid grid-cols-3 gap-2 grid-rows-3'}>
                <button onClick={()=>{changeBase({type:'base',name:'Black_bunny40'})}}>
                    SUASADAS
                </button>
            </div>

        </div>
    );
};

export default InventoryCards;