import React from 'react';
import {InstagramSectionStyled} from "./InstagramSectionStyled";
import Image from "next/image";
import {photos} from "./photos";
import {motion} from "framer-motion";

const InstagramSection = () => {
    return (
        <InstagramSectionStyled>
            {photos.map((item, index) => {
                const {src} = item;
                return (
                    <motion.div
                        whileTap={{scale: .95}}
                        key={index}
                        className="image">
                        <Image
                            layout='fill'
                            objectFit='cover'
                            src={src}
                            alt='instagram'/>
                        <div className="instagram-icon">
                            <Image
                                width={30}
                                height={25}
                                objectFit='fill'
                                src='/assets/icons/instagram.svg'
                                alt='instagram icon'/>
                        </div>
                    </motion.div>
                )
            })}
        </InstagramSectionStyled>
    );
};

export default InstagramSection;