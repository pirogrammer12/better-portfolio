import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <body className="loop">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico"></link>
        </Head>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
