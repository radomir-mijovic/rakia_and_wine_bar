import Head from "next/head";
import Banner from "../components/banner/Banner";
import RakiaAndWine from "../components/rakiaAndWine/RakiaAndWine";
import LetsHaveDrink from "../components/letsHaveDrink/LetsHaveDrink";

export default function Home() {
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
