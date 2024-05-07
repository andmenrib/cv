import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-slate-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
