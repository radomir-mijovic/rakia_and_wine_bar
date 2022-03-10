import React from 'react';
import {BannerStyled} from "./BannerStyled";
import Image from "next/image";

const Banner = () => {
    return (
        <BannerStyled>
            <Image
                src='/assets/images/bar.jpg'
                layout='fill'
                objectFit='cover'
                quality={100}
                alt='rakia and wine bar'/>
            <div className="header">
                <Image
                    src='/assets/logo/rakia-no-words.svg'
                    alt='rakia and wine bar'
                    objectFit='cover'
                    height={350}
                    width={100}/>
                <h1>Discover a dreamy spot
                    in the heart of Old
                    Town</h1>
                <div className="header-text">
                    RAKIA AND WINE BAR <br/>
                    BUDVA
                </div>
            </div>
        </BannerStyled>
    );
};

export default Banner;