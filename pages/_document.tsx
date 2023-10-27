import { Html, Head, Main, NextScript } from 'next/document'
import { createMediaStyle } from '../lib/fresnel';

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
