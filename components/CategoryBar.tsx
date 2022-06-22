import React, {useState} from 'react';


interface categoryBarInterface{
    currenTab:string|"background"|"base"|"eyes"|"mouth"|"left"|"right"|"necklace"|"face"|"clothes"|"hat"|"overhead"|"ears",
    setCurrentTab:(newTab:string|"background"|"base"|"eyes"|"mouth"|"left"|"right"|"necklace"|"face"|"clothes"|"hat"|"overhead"|"ears")=>void,
}

const CategoryBar = ({currenTab,setCurrentTab}:categoryBarInterface) => {
    const baseRef = React.useRef<HTMLInputElement>(null);
    const mouthRef = React.useRef<HTMLInputElement>(null);
    const eyesRef = React.useRef<HTMLInputElement>(null);
    const earsRef = React.useRef<HTMLInputElement>(null);
    const facesRef = React.useRef<HTMLInputElement>(null);
    const hatsRef = React.useRef<HTMLInputElement>(null);
    const clothesRef = React.useRef<HTMLInputElement>(null);
    const leftRef = React.useRef<HTMLInputElement>(null);
    const rightRef = React.useRef<HTMLInputElement>(null);
    const necklaceRef = React.useRef<HTMLInputElement>(null);
    const overheadRef = React.useRef<HTMLInputElement>(null);
    const backgroundRef = React.useRef<HTMLInputElement>(null);
    return (
        <div className={'tab-container'}>
            {currenTab=='base'?<p className={'active-tab'}>Base</p>:<p ref={baseRef} onClick={()=>{setCurrentTab('base');if(baseRef.current){baseRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Base</p>}

            {currenTab=='eyes'?<p className={'active-tab'}>Eyes</p>:<p ref={eyesRef} onClick={()=>{setCurrentTab('eyes');if(eyesRef.current){eyesRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Eyes</p>}

            {currenTab=='ears'?<p className={'active-tab'}>Ears</p>:<p ref={earsRef} onClick={()=>{setCurrentTab('ears');if(earsRef.current){earsRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Ears</p>}


            {currenTab=='mouth'?<p className={'active-tab'}>Mouth</p>:<p ref={mouthRef} onClick={()=>{setCurrentTab('mouth');if(mouthRef.current){mouthRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Mouth</p>}

            {currenTab=='faces'?<p className={'active-tab'}>Faces</p>:<p ref={facesRef} onClick={()=>{setCurrentTab('faces');if(facesRef.current){facesRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Faces</p>}

            {currenTab=='hats'?<p className={'active-tab'}>Hats</p>:<p ref={hatsRef} onClick={()=>{setCurrentTab('hats');if(hatsRef.current){hatsRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Hats</p>}

            {currenTab=='clothes'?<p className={'active-tab'}>Clothes</p>:<p ref={clothesRef} onClick={()=>{setCurrentTab('clothes');if(clothesRef.current){clothesRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Clothes</p>}

            {currenTab=='left'?<p className={'active-tab'}>Left_hand</p>:<p ref={leftRef} onClick={()=>{setCurrentTab('left');if(leftRef.current){leftRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Left_hand</p>}

            {currenTab=='right'?<p className={'active-tab'}>Right_hand</p>:<p ref={rightRef} onClick={()=>{setCurrentTab('right');if(rightRef.current){rightRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Right_hand</p>}

            {currenTab=='necklace'?<p className={'active-tab'}>Necklace</p>:<p ref={necklaceRef} onClick={()=>{setCurrentTab('necklace');if(necklaceRef.current){necklaceRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Necklace</p>}

            {currenTab=='overhead'?<p className={'active-tab'}>Overhead</p>:<p ref={overheadRef} onClick={()=>{setCurrentTab('overhead');if(overheadRef.current){overheadRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Overhead</p>}

            {currenTab=='background'?<p className={'active-tab'}>Background</p>:<p ref={backgroundRef} onClick={()=>{setCurrentTab('background');if(backgroundRef.current){backgroundRef.current.scrollIntoView({
                behavior: "smooth", block:'nearest',
            })}}} className={'deactive-tab'}>Background</p>}

        </div>
    );
};

export default CategoryBar;