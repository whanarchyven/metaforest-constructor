import InventoryItemInterface from "./InventoryItem";

export default interface BunnyInterface{
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