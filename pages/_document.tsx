import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark scroll-smooth" lang="en">
      <Head></Head>
      <body className="bg-grey-75 dark:bg-black text-black dark:text-white transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
