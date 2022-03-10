import Document, {Main, Head, Html, NextScript} from "next/document";
import {ServerStyleSheet} from 'styled-components'
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="shortcut icon" href="/assets/logo/rakia.svg"/>
                    <link rel="canonical" href="https://www.rakiaandwinebar.com/"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Oswald:wght@300;400;500;600&display=swap"
                        rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Comforter+Brush&display=swap"
                          rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Atma&display=swap" rel="stylesheet"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,800;1,700;1,800&display=swap"
                        rel="stylesheet"/>

                    <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
                          rel="stylesheet"/>

                    <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap"
                          rel="stylesheet"/>

                    <link href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap"
                          rel="stylesheet"/>

                    <meta name="keywords" content=" rakia and wine bar budva, rakija i vino bar budva"/>
                    <meta name='description'
                          content='Discover a dreamy spot in the heart of Old
                                   Town Budva and create authentic memories with us. Rakia and Wine bar
                                   - Budva. Rakija i Vino bar u srcu Starog Grada - Budva.'/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
        })

    const initialProps = await Document.getInitialProps(ctx)
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                {sheet.getStyleElement()}
            </>
        ),
    }

}

export default MyDocument;