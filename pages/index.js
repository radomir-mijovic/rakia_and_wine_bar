import Head from "next/head";
import Banner from "../components/banner/Banner";
import RakiaAndWine from "../components/rakiaAndWine/RakiaAndWine";
import LetsHaveDrink from "../components/letsHaveDrink/LetsHaveDrink";

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
            </main>
        </>
    )
}
