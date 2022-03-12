import Image from "next/image";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Custom404() {
    const router = useRouter()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 1000) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [])

    return (
        <Styled>
            <h1>
                Oops! sorry no drinks here.
                <br/>
                <motion.div
                    onClick={() => router.push('/')}
                    className='btn-go-back'
                    initial={{scale: 1}}
                    whileTap={{scale: .9}}>
                    Go back to Rakia and Wine bar
                </motion.div>
            </h1>
            <Image
                layout='fill'
                objectFit={isMobile ? '' : 'scale-down'}
                src='/assets/logo/rakia-no-words.svg'
                alt='Page not found'/>
        </Styled>

    )
}

export const Styled = styled.div`
  background: #EEEBE1;
  width: 100%;
  height: 100vh;
  
  > h1 {
    width: 100%;
    position: absolute;
    text-align: center;
    top: 9rem;
    font-size: clamp(2.2rem, 4vw, 4rem);
    font-weight: 500;
    z-index: 2;
  }
  
  .btn-go-back {
    font-family: 'Charm', cursive;
    text-decoration: underline;
    color: #B28C67;
    cursor: pointer;
    margin-top: 1.4rem;
  }
`