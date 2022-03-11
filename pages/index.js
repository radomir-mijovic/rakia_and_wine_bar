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

export default function Home() {
    const {isModal} = useModalContext()


    return (
        <>
            <Head>
                <title>Rakia and Wine bar - Old Town - Budva</title>
            </Head>
            {isModal &&  <ImageModal/>}
            <main>
                <Banner/>
                <RakiaAndWine/>
                <LetsHaveDrink/>
                <InstagramSection/>
                <OpeningHours/>
                <Counter/>
                <Footer/>
            </main>
        </>
    )
}

