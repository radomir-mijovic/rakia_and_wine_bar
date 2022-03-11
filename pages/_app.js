import {GlobalStyles} from "../styles/GlobalStyles";
import {ModalProvider} from "../context/modal_context";

function MyApp({Component, pageProps}) {
    return (
        <>
            <GlobalStyles/>
            <ModalProvider>
                <Component {...pageProps} />
            </ModalProvider>
        </>
    )
}

export default MyApp
