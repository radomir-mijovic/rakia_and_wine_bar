import React from 'react';
import {FooterStyled} from "./FooterStyled";
import Image from "next/image";
import {motion} from "framer-motion";
import {contact_helpers, socialLinks} from "./contact_helpers";
import {useRouter} from "next/router";

const Footer = () => {
    const router = useRouter()


    return (
        <FooterStyled>
            <div className="logo-links">
                <div className="logo">
                    <Image
                        width={60}
                        height={100}
                        objectFit='cover'
                        src='/assets/logo/rakia-org.svg'
                        alt='logo'/>
                </div>
                <div className="links">
                    {socialLinks.map((item, index) => {
                        const {href, src, alt} = item;
                        return (
                            <motion.a
                                key={index}
                                whileTap={{scale: .95}}
                                href={href}>
                                <Image
                                    width={30}
                                    height={30}
                                    objectPosition='center'
                                    src={src}
                                    alt={alt}/>
                            </motion.a>
                        )
                    })}
                </div>
            </div>
            <div className="contact">
                {contact_helpers.map((item, index) => {
                    const {title, info, src, alt, href} = item;
                    return (
                        <div
                            onClick={() => router.push(href)}
                            key={index}>
                            <Image
                                width={60}
                                height={40}
                                src={src}
                                alt={alt}/>
                            <h5>
                                {title}
                            </h5>
                            <h6>
                                {info}
                            </h6>
                        </div>
                    )
                })}
            </div>
            <div className="rights">
                <h6>
                    2022 Rakia and Wine bar. All rights reserved.
                </h6>
            </div>
        </FooterStyled>
    );
};

export default Footer;