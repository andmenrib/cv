import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageProvider } from "../contexts/languageContext";
import { ThemeProvider } from "../contexts/themeContext";
// import "bootswatch/dist/pulse/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
