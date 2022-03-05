import React, {useState} from 'react';
import {LetsHaveDrinkStyled} from "./LetsHaveDrinkStyled";
import Image from "next/image";
import {motion} from "framer-motion";
import {tabs} from "./tabs";

const LetsHaveDrink = () => {
    const [isActive, setIsActive] = useState(0)

    return (
        <LetsHaveDrinkStyled isActive={isActive}>
            <header className='title'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                let's have a drink
            </header>
            <div className="tabs">
                {tabs.map((item, index) => {
                    const {imageSrc, alt, text} = item;
                    return (
                        <motion.div
                            onClick={() => setIsActive(index)}
                            key={index}
                            whileTap={{scale: .95}}
                            className={isActive === index ? 'tab active' : 'tab'}>
                            <div className="icon">
                                <Image
                                    layout='fill'
                                    src={imageSrc}
                                    alt={alt}/>
                            </div>
                            <div className="text">
                                {text}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
            <div className="menu">

            </div>

        </LetsHaveDrinkStyled>
    );
};

export default LetsHaveDrink;