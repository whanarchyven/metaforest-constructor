import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CategoryBar from "../components/CategoryBar";
import {useEffect, useState} from "react";
import BunnyGeneration from "../components/BunnyGeneration";
import InventoryCards from "../components/InventoryCards";


interface InventoryItemInerface{
    type:string,
    name:string,
}

interface BunnyInterface{
        base?:InventoryItemInerface,
        mouth?:InventoryItemInerface,
        eyes?:InventoryItemInerface,
        ears?:InventoryItemInerface,
        face?:InventoryItemInerface,
        hat?:InventoryItemInerface,
        clothes?:InventoryItemInerface,
        left?:InventoryItemInerface,
        right?:InventoryItemInerface,
        necklace?:InventoryItemInerface,
        overhead?:InventoryItemInerface,
}

interface inventoryInterface{
    inventory:[InventoryItemInerface],
}


const Home: NextPage = () => {
    const [currenTab,setCurrentTab]=useState('base');
    const changeCurrentTab= (newTab:string)=>{
        setCurrentTab(newTab);
    }

    const [bunny,changeBunnyState]=useState({
        base:{
            type:'base',
            name:'Aluminum_bunny20',
        },
        mouth:{
            type:'mouth',
            name:'',
        },
        eyes:{
            type:'eyes',
            name:'',
        },
        ears:{
            type:'ears',
            name:'',
        },
        face:{
            type:'face',
            name:'',
        },
        hat:{
            type:'hat',
            name:'',
        },
        clothes:{
            type:'clothes',
            name:'',
        },
        left:{
            type:'left',
            name:'',
        },
        right:{
            type:'right',
            name:'',
        },
        necklace:{
            type:'necklace',
            name:'',
        },
        overhead:{
            type:'overhead',
            name:'',
        },
    })

    const changeBase =(item:InventoryItemInerface)=>{
        let temp=bunny;
        bunny.base=item;
        changeBunnyState((prev)=>prev=temp);
        console.log(bunny.base.name);
    }

    const changeEyes =(item:InventoryItemInerface)=>{
        let temp=bunny;
        bunny.eyes=item;
        changeBunnyState((prev)=>prev=temp);
    }
    const changeMouth =(item:InventoryItemInerface)=>{
        let temp=bunny;
        bunny.mouth=item;
        changeBunnyState((prev)=>prev=temp);
    }
    const changeEars =(item:InventoryItemInerface)=>{
        let temp=bunny;
        bunny.ears=item;
        changeBunnyState((prev)=>prev=temp);
    }

    const changeHat =(item:InventoryItemInerface)=>{
        let temp=bunny;
        bunny.hat=item;
        changeBunnyState((prev)=>prev=temp);
    }

    const changeClothes =(item:InventoryItemInerface)=>{
        let temp=bunny;
        bunny.clothes=item;
        changeBunnyState((prev)=>prev=temp);
    }
    const changeLeft =(item:InventoryItemInerface)=>{
        let temp=bunny;
        bunny.left=item;
        changeBunnyState((prev)=>prev=temp);
    }
    const changeRight =(item:InventoryItemInerface)=>{
        let temp=bunny;
        bunny.right=item;
        changeBunnyState((prev)=>prev=temp);
    }

    const changeNecklace =(item:InventoryItemInerface)=>{
        let temp=bunny;
        bunny.necklace=item;
        changeBunnyState((prev)=>prev=temp);
    }
    const changeFace =(item:InventoryItemInerface)=>{
        let temp=bunny;
        bunny.face=item;
        changeBunnyState((prev)=>prev=temp);
    }
    const changeOverhead =(item:InventoryItemInerface)=>{
        let temp=bunny;
        bunny.overhead=item;
        changeBunnyState((prev)=>prev=temp);

    }



    const inventory=[
        {
            type:'base',
            name:'White_bunny40'
        },
        {
            type:'base',
            name:'Petrol_bunny10'
        },{
            type:'base',
            name:'Pink_bunny40'
        },
        {
            type:'base',
            name:'Blue_bunny40'
        },{
            type:'base',
            name:'Rainbow_bunny15'
        },
        {
            type:'base',
            name:'Black_bunny40'
        },{
            type:'base',
            name:'Metal_bunny40'
        },
        {
            type:'base',
            name:'Gold_bunny30'
        },{
            type:'base',
            name:'Thermal_bunny15'
        },
        {
            type:'base',
            name:'Violet_bunny30'
        },{
            type:'base',
            name:'Red_bunny30'
        },
        {
            type:'base',
            name:'Aluminum_bunny20'
        },{
            type:'base',
            name:'Recycled_plastic_bunny10'
        },
        {
            type:'base',
            name:'White_bunny_e40'
        },{
            type:'base',
            name:'Petrol_bunny_e10'
        },
        {
            type:'base',
            name:'Pinc_bunny_e30'
        },{
            type:'base',
            name:'Blue_bunny_e30'
        },
        {
            type:'base',
            name:'Rainbow_bunny_e15'
        },{
            type:'base',
            name:'Black_bunny_e40'
        },
        {
            type:'base',
            name:'Silver_bunny_e30'
        },
    ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className={'w-5/12 bg-red-600 h-[100vh]'}>
              <div className={'border-2 border-yellow-500 h-[55%] flex justify-center content-center items-center'}>
                  <div className={'w-[310px] h-[450px]'}>
                      <BunnyGeneration bunny={bunny}></BunnyGeneration>
                  </div>
              </div>
              <div className={'border-2 border-yellow-500 h-[5%]'}>
                  <CategoryBar currenTab={currenTab} setCurrentTab={changeCurrentTab}></CategoryBar>
              </div>
              <div className={'border-2 border-yellow-500 h-[40%]'}>
                  <InventoryCards  changeBase={changeBase} changeMouth={changeMouth} changeEyes={changeEyes} changeEars={changeEars} changeClothes={changeClothes} changeHat={changeHat} changeLeft={changeLeft} changeRight={changeRight} changeNecklace={changeNecklace} changeFace={changeFace} changeOverhead={changeOverhead} bunny={{bunny}} inventory={inventory}></InventoryCards>
              </div>
          </div>
      </main>

    </div>
  )
}

export default Home
