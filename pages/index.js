import Head from "next/head";
import Banner from "../components/banner/Banner";

export default function Home() {
    return (
        <>
            <Head>
                <title>Rakia and Wine bar</title>
            </Head>
            <main>
                <Banner/>
            </main>
        </>
    )
}
