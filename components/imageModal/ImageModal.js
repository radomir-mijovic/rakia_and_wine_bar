import React, {useEffect, useState} from 'react';
import {ImageModalStyled} from "./ImageModalStyled";
import Image from "next/image";
import {useModalContext} from "../../context/modal_context";
import {motion} from "framer-motion";

const ImageModal = () => {
    const {imageSrc, setIsModal} = useModalContext()
    const [isDesktop, setIsDesktop] = useState(false)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 900) {
            setIsDesktop(true)
        } else {
            setIsDesktop(false)
        }
    }, [])

    function closeHandler() {
        setIsModal(false)
        setIsActive(true)
    }

    return (
            <ImageModalStyled
                animate={{scale: 1}}
                transition={{duration: .4}}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: .7,
                        delay: .4
                    }
                }}
                initial={{scale: 0}}>
                <div
                    onClick={() => closeHandler()}
                    className={isActive ? 'close active' : 'close'}>
                    <Image
                        objectFit='cover'
                        layout='fill'
                        alt='close icon'
                        src='/assets/icons/close.svg'/>
                </div>
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