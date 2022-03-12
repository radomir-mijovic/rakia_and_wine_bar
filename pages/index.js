import Head from "next/head";
import Banner from "../components/banner/Banner";
import RakiaAndWine from "../components/rakiaAndWine/RakiaAndWine";
import LetsHaveDrink from "../components/letsHaveDrink/LetsHaveDrink";
import InstagramSection from "../components/instagramSection/InstagramSection";
import OpeningHours from "../components/openingHours/OpeningHours";
import Counter from "../components/counter/Counter";
import Footer from "../components/footer/Footer";
import React from "react";
import ImageModal from "../components/imageModal/ImageModal";
import {useModalContext} from "../context/modal_context";
import {AnimatePresence} from "framer-motion";
import About from "../components/about/About";

export default function Home() {
    const {isModal} = useModalContext()


    return (
        <>
            <Head>
                <title>Rakia and Wine bar - Old Town - Budva</title>
            </Head>
            <AnimatePresence>
                {isModal && <ImageModal/>}
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

