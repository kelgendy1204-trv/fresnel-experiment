import { Html, Head, Main, NextScript } from 'next/document'
import fresnel from '../lib/fresnel';

const { createMediaStyle } = fresnel;

const mediaStyles = createMediaStyle();

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <style
                    dangerouslySetInnerHTML={{
                        __html: mediaStyles.replace(/\n/g, ''),
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
