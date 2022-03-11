import React, {useEffect, useState} from 'react';
import {ImageModalStyled} from "./ImageModalStyled";
import Image from "next/image";
import {useModalContext} from "../../context/modal_context";
import {motion} from "framer-motion";

const ImageModal = () => {
    const {imageSrc, setIsModal} = useModalContext()
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 900) {
            setIsDesktop(true)
        } else {
            setIsDesktop(false)
        }
    }, [])

    return (
            <ImageModalStyled
                animate={{scale: 1}}
                transition={{duration: .4}}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: .8,
                        delay: .4
                    }
                }}
                initial={{scale: 0}}>
                <motion.div
                    onClick={() => setIsModal(false)}
                    whileTap={{
                        scale: .8,
                        rotate: 90
                    }}
                    className="close">
                    <Image
                        objectFit='cover'
                        layout='fill'
                        alt='close icon'
                        src='/assets/icons/close.svg'/>
                </motion.div>
                <div className="image">
                    <Image
                        layout='fill'
                        objectFit={isDesktop ? 'scale-down' : 'cover'}
                        quality={100}
                        src={imageSrc}
                        alt='kajsija'/>
                </div>
            </ImageModalStyled>
    );
};

export default ImageModal;