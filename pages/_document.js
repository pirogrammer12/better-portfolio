import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Pirogrammer</title>
      </Head>

      <body className="loop max-h-[100vh] max-w-[100vw] overflow-hidden">
        <Main />
        <NextScript />
      </body>

    </Html>
  );
}
