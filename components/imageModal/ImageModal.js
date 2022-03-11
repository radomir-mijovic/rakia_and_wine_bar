import React from 'react';
import {ImageModalStyled} from "./ImageModalStyled";
import Image from "next/image";

const ImageModal = () => {
    return (
        <ImageModalStyled>
            <div className="image">
                <Image
                    layout='fill'
                    objectFit='scale-down'
                    quality={100}
                    src='/assets/images/lipovac_concept-.png'
                    alt='kajsija'/>
            </div>
        </ImageModalStyled>
    );
};

export default ImageModal;