import React, {useState} from 'react';
import {CounterStyled} from "./CounterStyled";
import CountUp from "react-countup";
import Image from "next/image";
import {motion} from "framer-motion";

const Counter = () => {
    const [isVisibleRakia, setIsVisibleRakia] = useState(false)
    const [isVisiblePeople, setIsVisiblePeople] = useState(false)
    const [isVisibleWine, setIsVisibleWine] = useState(false)
    const [isVisibleShop, setIsVisibleShop] = useState(false)


    return (
        <CounterStyled>
            <header className='header'>
                Our daily routine
            </header>
            <div className="counters">
                <motion.div
                    initial={{
                        scale: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: .7
                        }
                    }}
                    viewport={{once: true}}
                    onViewportEnter={() => setIsVisibleRakia(true)}
                    className="counter">
                    <Image
                        width={50}
                        height={80}
                        src={'/assets/icons/shot.svg'}
                        alt={'rakia rakija'}/>
                    <div className="number">
                        {isVisibleRakia &&
                        <CountUp
                            start={430}
                            end={500}
                            duration={3}
                            useEasing={true}/>
                        } +
                    </div>
                    <h4 className='title'>
                        Rakia shots
                    </h4>
                </motion.div>
                <motion.div
                    initial={{
                        scale: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: .7
                        }
                    }}
                    viewport={{once: true}}
                    onViewportEnter={() => setIsVisiblePeople(true)}
                    className="counter">
                    <Image
                        width={50}
                        height={80}
                        src={'/assets/icons/smiley.svg'}
                        alt={'smiling customers'}/>
                    <div className="number">
                        {isVisiblePeople &&
                        <CountUp
                            start={300}
                            end={350}
                            duration={3}
                            useEasing={true}/>
                        } +
                    </div>
                    <h4 className='title'>
                        smiling customers
                    </h4>
                </motion.div>
                <motion.div
                    initial={{
                        scale: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: .7
                        }
                    }}
                    viewport={{once: true}}
                    onViewportEnter={() => setIsVisibleWine(true)}
                    className="counter">
                    <Image
                        width={50}
                        height={80}
                        src={'/assets/icons/wine.svg'}
                        alt='wine bottles'/>
                    <div className="number">
                        {isVisibleWine &&
                        <CountUp
                            start={100}
                            end={150}
                            duration={3}
                            useEasing={true}/>
                        } +
                    </div>
                    <h4 className='title'>
                        Wine bottles
                    </h4>
                </motion.div>
                <motion.div
                    initial={{
                        scale: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: .7
                        }
                    }}
                    viewport={{once: true}}
                    onViewportEnter={() => setIsVisibleShop(true)}
                    className="counter">
                    <Image
                        width={50}
                        height={80}
                        src={'/assets/icons/shot.svg'}
                        alt={'rakia rakija'}/>
                    <div className="number">
                        {isVisibleShop &&
                        <CountUp
                            start={430}
                            end={500}
                            duration={3}
                            useEasing={true}/>
                        } +
                    </div>
                    <h4 className='title'>
                        Rakia shots
                    </h4>
                </motion.div>
            </div>
        </CounterStyled>
    );
};

export default Counter;