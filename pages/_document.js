import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <body className="loop max-h-[100vh] max-w-[100vw] overflow-hidden">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico"></link>
        </Head>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
