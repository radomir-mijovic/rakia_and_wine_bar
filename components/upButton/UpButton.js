import React from 'react';
import {UpButtonStyled} from "./UpButtonStyled";
import Image from "next/image";

const UpButton = ({setIsScrollTop}) => {



    return (
        <UpButtonStyled
            onClick={() => setIsScrollTop(true)}
            whileTap={{
                scale: .9
            }}
            animate={{
                scale: 1,
                opacity: 1,
                transition: {
                    duration: .4
                }
            }}
            initial={{
                scale: 0,
                opacity: 0
            }}
            exit={{
                scale: 0,
                opacity: 0,
                transition: {
                    duration: .4
                }
            }}>
                <Image
                    layout='fill'
                    objectFit='cover'
                    src='/assets/icons/up-arrow2.svg'
                    alt='Up icon'/>
        </UpButtonStyled>
    );
};

export default UpButton;