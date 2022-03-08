import React, {useState} from 'react';
import {LetsHaveDrinkStyled} from "./LetsHaveDrinkStyled";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {tabs_and_drinks, wines, rakia} from "./tabs_and_dinks";

const LetsHaveDrink = () => {
    const [isActive, setIsActive] = useState(0)
    const [forMapping, setForMapping] = useState(wines)

    function menuHandler(index, alt) {
        setIsActive(index)
        if (alt === 'wine') {
            setForMapping(wines)
        } else if (alt === 'rakia') {
            setForMapping(rakia)
        }
    }


    return (
        <LetsHaveDrinkStyled isActive={isActive}>
            <header className='title'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                let's have a drink
            </header>
            <motion.p
                initial={{scale: 0}}
                whileInView={{
                    scale: 1,
                    transition: {
                        duration: .7
                    }
                }}
                viewport={{once: true}}
                className='subtitle'>
                According to chemistry,
                alcohol is a solution.
            </motion.p>
            <div className="tabs">
                {tabs_and_drinks.map((item, index) => {
                    const {imageSrc, alt, text} = item;
                    return (
                        <motion.div
                            initial={{scale: 0}}
                            whileInView={{
                                scale: 1,
                                transition: {
                                    duration: .4
                                }
                            }}
                            viewport={{once: true}}
                            onClick={() => menuHandler(index, alt)}
                            key={index}
                            whileTap={{scale: .9}}
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
                    {forMapping.map((item, index) => {
                            const {
                                name,
                                description,
                                alt,
                                imageSrc,
                                price,
                                glass_price,
                                alc
                            } = item;
                            return (
                                <motion.div
                                    initial={{
                                        y: '40%',
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            duration: .7
                                        }
                                    }}
                                    exit={{y: '100'}}
                                    // animate={{y: 0, opacity: 1,
                                    //     transition: {
                                    //         duration: .7
                                    //     }}}
                                    // viewport={{once: true}}
                                    key={index}
                                    className='item'>
                                    <div className="image">
                                        <Image
                                            width={200}
                                            height={400}
                                            objectFit='cover'
                                            src={imageSrc}
                                            alt={alt}/>
                                    </div>
                                    <div className="info">
                                        <div className="info-header">
                                            <header>
                                                {name}
                                            </header>
                                            <p className="price">
                                                {price.toFixed(2)} EUR
                                            </p>
                                        </div>
                                        <p className="description">
                                            {description}
                                        </p>
                                        <div className="bottom">
                                            <p>
                                                {alc} %VOL
                                            </p>
                                            <p className='image-price'>
                                                <Image
                                                    width={18}
                                                    height={20}
                                                    objectFit='cover'
                                                    src='/assets/icons/wine-glass.svg'
                                                    alt='wine glass'/>
                                                <p className="black">
                                                    {glass_price.toFixed(2)} EUR
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
            </div>
        </LetsHaveDrinkStyled>
    );
};

export default LetsHaveDrink;