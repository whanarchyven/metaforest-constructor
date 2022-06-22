import React, {useState} from 'react';


interface categoryBarInterface {
    currenTab: string | "background" | "base" | "eyes" | "mouth" | "left" | "right" | "necklace" | "face" | "clothes" | "hat" | "overhead" | "ears",
    setCurrentTab: (newTab: string | "background" | "base" | "eyes" | "mouth" | "left" | "right" | "necklace" | "face" | "clothes" | "hat" | "overhead" | "ears") => void,
}

const CategoryBar = ({currenTab, setCurrentTab}: categoryBarInterface) => {
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

    const tabs = ['base',
        'eyes',
        'ears',
        'mouth',
        'faces',
        'hats',
        'clothes',
        'left',
        'right',
        'necklace',
        'overhead',
        'background'];

    const ucFirst = (str: string) => {
        if (!str) return str;

        return str[0].toUpperCase() + str.slice(1);
    }

    return (
        <div className={'tab-container'}>
            {tabs.map(item => {
                let clas = item == currenTab ? 'active-tab' : 'deactive-tab';
                return (<p ref={baseRef} onClick={() => {
                    setCurrentTab(item);
                    if (baseRef.current) {
                        baseRef.current.scrollIntoView({
                            behavior: "smooth", block: 'nearest',
                        })
                    }
                }} className={clas}>{ucFirst(item)}</p>)
            })}
        </div>
    );
};

export default CategoryBar;