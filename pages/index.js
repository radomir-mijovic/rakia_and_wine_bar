import Head from "next/head";
import Banner from "../components/banner/Banner";
import RakiaAndWine from "../components/rakiaAndWine/RakiaAndWine";
import LetsHaveDrink from "../components/letsHaveDrink/LetsHaveDrink";
import InstagramSection from "../components/instagramSection/InstagramSection";
import OpeningHours from "../components/openingHours/OpeningHours";
import Counter from "../components/counter/Counter";
import Footer from "../components/footer/Footer";

export default function Home() {
    //TODO make street link go to google maps
    return (
        <>
            <Head>
                <title>Rakia and Wine bar</title>
            </Head>
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
