import React from 'react';
import {BannerStyled} from "./BannerStyled";
import Image from "next/image";

const Banner = () => {
    return (
        <BannerStyled>
            <Image
                src='/assets/images/bar.jpg'
                // height={300}
                // width={700}
                layout='fill'
                objectFit='cover'
                // objectPosition='center'
                quality={100}
                alt='rakia and wine bar'/>
            <div className="header">
                <Image
                    src='/assets/logo/rakia-no-words.svg'
                    alt='rakia and wine bar'
                    objectFit='cover'
                    height={350}
                    width={100}/>
                <h1>Rakia & Wine bar</h1>
                <div className="header-text">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    WHERE THERE'S FUN <br/>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    THERE'S RAKIA AND WINE
                </div>
            </div>
        </BannerStyled>
    );
};

export default Banner;