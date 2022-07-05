import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CategoryBar from "../components/CategoryBar";
import {useEffect, useState} from "react";
import BunnyGeneration from "../components/BunnyGeneration";
import InventoryCards from "../components/InventoryCards";
import InventoryItemInterface from "../interfaces/InventoryItem";
import BunnyInterface from "../interfaces/BunnyInterface";

const Home: NextPage = () => {

    const [currenTab,setCurrentTab]=useState('base');
    const changeCurrentTab= (newTab:string|"base"|"eyes"|"mouth"|"left"|"right"|"necklace"|"face"|"clothes"|"hat"|"overhead"|"ears")=>{
        setCurrentTab(newTab);
    }
    const initialBunny={
        background:{
            type:'background',
            name:'Standard',
        },
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
    }

    const [bunny,setBunny]=useState(initialBunny);




    // const changeBase =(item:InventoryItemInerface)=>{
    //     let temp=bunny; //это что за бред тут написан? Обьект копируется через {...bunny}
    //     bunny.base=item;
    //     setBunny((prev)=>prev=temp); //мда. Ты зачем-то задаешь новый стейт как (prev=temp) - результат операции присовения.
    //     console.log(bunny.base.name);
    // }
    //стиль кода пздц. Бей себя по рукам за копипасту.

    //вместо тысячи функций - вот
    const attachItemToBunny = (place:string|"background"|"base"|"eyes"|"mouth"|"left"|"right"|"necklace"|"face"|"clothes"|"hat"|"overhead"|"ears",item:InventoryItemInterface)=>{
        return setBunny({...bunny,[place]:item})
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
        },{
            type:'clothes',
            name:'Tape_Gray10'
        },{
            type:'clothes',
            name:'Tape_pinck10'
        },{
            type:'clothes',
            name:'Tape_black10'
        },{
            type:'clothes',
            name:'Business_suit10'
        },{
            type:'clothes',
            name:'Batman3'
        },{
            type:'clothes',
            name:'Iron_man_icon3'
        },{
            type:'clothes',
            name:'Pajama_pink10'
        },{
            type:'clothes',
            name:'Pajama_green10'
        },{
            type:'clothes',
            name:'Pajama_blue10'
        },{
            type:'clothes',
            name:'Hoody10'
        },{
            type:'clothes',
            name:'00710'
        },{
            type:'clothes',
            name:'Police10'
        },{
            type:'ears',
            name:'Gold_fur5'
        },{
            type:'ears',
            name:'Gray_fur5'
        },{
            type:'ears',
            name:'Rainbow_fur3'
        },{
            type:'ears',
            name:'Pink_fur5'
        },{
            type:'ears',
            name:'Left_ring_g10'
        },{
            type:'ears',
            name:'Right_ring_g10'
        },{
            type:'ears',
            name:'Left_ring_s10'
        },{
            type:'ears',
            name:'Right_ring_s10'
        },{
            type:'eyes',
            name:'Priaty15'
        },{
            type:'eyes',
            name:'Sad15'
        },{
            type:'eyes',
            name:'Hurts15'
        },{
            type:'eyes',
            name:'ETH_g1'
        },{
            type:'eyes',
            name:'ETH_p1'
        },{
            type:'eyes',
            name:'Tape_g10'
        },{
            type:'eyes',
            name:'Tape_p10'
        },{
            type:'eyes',
            name:'Tape_b10'
        },{
            type:'eyes',
            name:'Buttons_w40'
        },{
            type:'eyes',
            name:'Buttons_r30'
        },{
            type:'eyes',
            name:'Buttons_bl40'
        },{
            type:'eyes',
            name:'Buttons_b40'
        },{
            type:'eyes',
            name:'Divorces_p5'
        },{
            type:'eyes',
            name:'Divorces_b5'
        },{
            type:'eyes',
            name:'Normal60'
        },{
            type:'eyes',
            name:'red5'
        },{
            type:'faces',
            name:'Sunglasses10'
        },{
            type:'faces',
            name:'Ski_mask10'
        },{
            type:'faces',
            name:'Silver_ring_n10'
        },{
            type:'faces',
            name:'Robot1'
        },{
            type:'faces',
            name:'Mask7'
        },{
            type:'faces',
            name:'Gold_ring_n10'
        },{
            type:'faces',
            name:'Glasses10'
        },{
            type:'faces',
            name:'Batman_f5'
        },{
            type:'hats',
            name:'White_hat20'
        },{
            type:'hats',
            name:'White_hat_carrot10'
        },{
            type:'hats',
            name:'Police_hat10'
        },{
            type:'hats',
            name:'Mask_w3'
        },{
            type:'hats',
            name:'Mask_p3'
        },{
            type:'hats',
            name:'Mask_g3'
        },{
            type:'hats',
            name:'Mask_b3'
        },{
            type:'hats',
            name:'Knitted_hat_w10'
        },{
            type:'hats',
            name:'Knitted_hat_p10'
        },{
            type:'hats',
            name:'Knitted_hat_g10'
        },{
            type:'hats',
            name:'Knitted_hat_br10'
        },{
            type:'hats',
            name:'Knitted_hat_b10'
        },{
            type:'hats',
            name:'Crown_w10'
        },{
            type:'hats',
            name:'Crown_s10'
        },{
            type:'hats',
            name:'Crown_g10'
        },{
            type:'hats',
            name:'Crown_b10'
        },{
            type:'hats',
            name:'Black_hat20'
        },{
            type:'hats',
            name:'Black_hat_carrot10'
        },{
            type:'left',
            name:'Whip_l5'
        },{
            type:'left',
            name:'Machine_l5'
        },{
            type:'left',
            name:'Ice_cream_l5'
        },{
            type:'left',
            name:'Hummer_l5'
        },{
            type:'left',
            name:'Bit_l5'
        },{
            type:'left',
            name:'Axe_l5'
        },{
            type:'mouth',
            name:'Vampire_m5'
        },{
            type:'mouth',
            name:'Tape_p_m10'
        },{
            type:'mouth',
            name:'Tape_g_m10'
        },{
            type:'mouth',
            name:'Tape_b_m10'
        },{
            type:'mouth',
            name:'Smile50'
        },{
            type:'mouth',
            name:'Silver_carrot_m5'
        },{
            type:'mouth',
            name:'Sewn_mouth5'
        },{
            type:'mouth',
            name:'Sad_m30'
        },{
            type:'mouth',
            name:'Rainbow_carrot_m5'
        },{
            type:'mouth',
            name:'Normal_m50'
        },{
            type:'mouth',
            name:'Jedi_sword_p_m5'
        },{
            type:'mouth',
            name:'Jedi_sword_g_m5'
        },{
            type:'mouth',
            name:'Jedi_sword_b_m5'
        },{
            type:'mouth',
            name:'Happy_m30'
        },{
            type:'mouth',
            name:'Gold_carrot_m5'
        },{
            type:'mouth',
            name:'F_you_m5'
        },{
            type:'mouth',
            name:'F_off_m5'
        },{
            type:'mouth',
            name:'Carrot_m5'
        },{
            type:'mouth',
            name:'Bunny_teeth15'
        },{
            type:'necklace',
            name:'Playboy_silver10'
        },{
            type:'necklace',
            name:'Playboy_gold10'
        },{
            type:'necklace',
            name:'ETH_siver_n5'
        },{
            type:'necklace',
            name:'ETH_gold_n5'
        },{
            type:'necklace',
            name:'Dollar_silver10'
        },{
            type:'necklace',
            name:'Dollar_gold10'
        },{
            type:'necklace',
            name:'Carrot_silver_n5'
        },{
            type:'necklace',
            name:'Carrot_gold_n5'
        },{
            type:'overhead',
            name:'ETH_icon_p3'
        },{
            type:'overhead',
            name:'ETH_icon_g3'
        },{
            type:'right',
            name:'Whatch_r10'
        },{
            type:'right',
            name:'Machine_r5'
        },{
            type:'right',
            name:'Health_bracelet_r5'
        },{
            type:'right',
            name:'Chain_s_r10'
        },{
            type:'background',
            name:'Standard'
        },{
            type:'background',
            name:'White70'
        },{
            type:'background',
            name:'Violet65'
        },{
            type:'background',
            name:'Space17'
        },{
            type:'background',
            name:'Shadow12'
        },{
            type:'background',
            name:'petrol7'
        },{
            type:'background',
            name:'Petrol27'
        },{
            type:'background',
            name:'Pattern17'
        },{
            type:'background',
            name:'Neon_square7'
        },{
            type:'background',
            name:'Neon_cercle7'
        },{
            type:'background',
            name:'Moon7'
        },{
            type:'background',
            name:'Loony15'
        },{
            type:'background',
            name:'Light17'
        },{
            type:'background',
            name:'Labirint12'
        },{
            type:'background',
            name:'Half_moon7'
        },{
            type:'background',
            name:'CardBoard3'
        },{
            type:'background',
            name:'Card3'
        },{
            type:'background',
            name:'Black65'
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
          <div className={'w-full sm:w-[600px] h-[100vh]'}>
              <div className={'h-[50%] flex justify-center content-center items-center'}>
                  <div className={'w-[229px] h-[330px] sm:w-[277px] sm:h-[400px] z-10'}>
                      <BunnyGeneration bunny={bunny}></BunnyGeneration>
                  </div>
              </div>
              <div className={'h-[20%] flex items-center justify-center rounded-3xl relative z-[998]'}>
                  <svg width="100%" height="100%" viewBox="0 0 638 155" fill="none" xmlns="http://www.w3.org/2000/svg" className={'absolute bottom-0'}>
                      <path d="M637.58 58.8001V96.0801C637.58 111.672 631.386 126.626 620.361 137.651C609.336 148.676 594.382 154.87 578.79 154.87H58.79C43.1979 154.87 28.2444 148.676 17.2192 137.651C6.19391 126.626 0 111.672 0 96.0801V58.7901C0 43.198 6.19391 28.2446 17.2192 17.2193C28.2444 6.19405 43.1979 0.000132095 58.79 0.000132095H138.41C139.885 0.00339657 141.308 0.544499 142.413 1.52204C143.517 2.49959 144.227 3.84645 144.41 5.31013C145.709 15.0321 150.488 23.9538 157.861 30.4223C165.234 36.8908 174.702 40.4677 184.51 40.4901H453.05C462.864 40.4749 472.339 36.9014 479.718 30.4322C487.097 23.963 491.88 15.0372 493.18 5.31013C493.35 3.84124 494.056 2.48683 495.164 1.50685C496.271 0.52686 497.701 -0.00967458 499.18 0.000132095H578.8C594.391 0.00543525 609.342 6.20275 620.365 17.2293C631.388 28.2559 637.58 43.2089 637.58 58.8001V58.8001Z" fill="white"/>
                  </svg>
                  <div className={'w-[90%] h-3/4 absolute bottom-0'}>
                      <CategoryBar currenTab={currenTab} setCurrentTab={changeCurrentTab}></CategoryBar>
                  </div>
              </div>
              <div className={'h-[30%] bg-transparent relative z-[999]'}>
                  <div className={'absolute bg-white w-full h-5/6 rounded-l-3xl rounded-r-3xl rounded-b-none bottom-0'}></div>
                  <InventoryCards inventory={inventory} bunny={{bunny}} attachItemToBunny={attachItemToBunny} currentTab={currenTab}></InventoryCards>

              </div>
          </div>
      </main>

    </div>
  )
}

export default Home
