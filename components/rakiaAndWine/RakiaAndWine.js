import React from 'react';
import {RakiaAndWineStyled} from "./RakiaAndWineStyled";
import Image from "next/image";

const RakiaAndWine = () => {
    return (
        <RakiaAndWineStyled>
            <div className="card card-1">
                <Image
                    layout='fill'
                    objectFit='cover'
                    src='/assets/images/lipovac1.jpg'
                    alt='lipovac vina'/>
                <div>
                    Quality Wine
                    from Organically <br/>
                    Grown Grapes
                </div>
            </div>
            <div className="card card-2">
                <Image
                    layout='fill'
                    objectFit='cover'
                    src='/assets/images/lipovac6.jpg'
                    alt='lipovac vina'/>
            </div>
            <div className="card card-3">
                <Image
                    layout='fill'
                    objectFit='cover'
                    src='/assets/images/lipovac4.jpg'
                    alt='lipovac vina'/>
            </div>
            <div className="card card-4">
                <Image
                    layout='fill'
                    objectFit='fill'
                    src='/assets/icons/grape.svg'
                    alt='lipovac vina'/>
                <div>Taste <br/> perfection</div>
            </div>
            <div className="card card-5">
                <header>
                    Our <br/> Location
                </header>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Aperiam at consectetur cumque
                    dolore
                </p>
            </div>
            <div className="card card-6">
                <Image
                    layout='fill'
                    objectFit='cover'
                    src='/assets/images/dunja1.jpg'
                    alt='lipovac vina'/>
            </div>
            <div className="card card-7">
                <Image
                    layout='fill'
                    objectFit='cover'
                    src='/assets/images/savka1.jpg'
                    alt='lipovac vina'/>
            </div>
            <div className="card card-8">
                <Image
                    layout='fill'
                    objectFit='cover'
                    src='/assets/images/bar3.jpg'
                    alt='lipovac vina'/>
            </div>
            <div className="card card-9">
                <header>
                    Get Aperitif and start something great
                </header>
            </div>
        </RakiaAndWineStyled>
    );
};

export default RakiaAndWine;