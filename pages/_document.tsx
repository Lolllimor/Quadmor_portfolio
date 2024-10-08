import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.cdnfonts.com/css/montserrat'
          rel='stylesheet'
        />
      </Head>
      <body className='justify-center'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
