import Head from "next/head";
import Banner from "../components/banner/Banner";
import RakiaAndWine from "../components/rakiaAndWine/RakiaAndWine";
import LetsHaveDrink from "../components/letsHaveDrink/LetsHaveDrink";
import InstagramSection from "../components/instagramSection/InstagramSection";
import OpeningHours from "../components/openingHours/OpeningHours";
import Counter from "../components/counter/Counter";
import Footer from "../components/footer/Footer";
import React, {useEffect, useState} from "react";
import ImageModal from "../components/imageModal/ImageModal";
import {useModalContext} from "../context/modal_context";
import {AnimatePresence} from "framer-motion";
import About from "../components/about/About";
import UpButton from "../components/upButton/UpButton";

export default function Home() {
    const {isModal} = useModalContext()
    const [isEnd, setIsEnd] = useState(false)
    const [isScrollTop, setIsScrollTop] = useState(false)

    if (isScrollTop) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        setIsScrollTop(false)
    }

    useEffect(() => {
        window.onscroll = function (ev) {
            if ((window.innerHeight + window.scrollY + 500) >= document.body.scrollHeight) {
                setIsEnd(true)
            } else {
                setIsEnd(false)
            }
        }

    }, [])

    return (
        <>
            <Head>
                <title>Rakia and Wine bar - Old Town - Budva</title>
            </Head>
            <AnimatePresence>
                {isModal && <ImageModal/>}
                {isEnd && <UpButton setIsScrollTop={setIsScrollTop}/>}
            </AnimatePresence>
            <main>
                <Banner/>
                <RakiaAndWine/>
                <LetsHaveDrink/>
                <InstagramSection/>
                <Counter/>
                <OpeningHours/>
                <About/>
                <Footer/>
            </main>
        </>
    )
}

