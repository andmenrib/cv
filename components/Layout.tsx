import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="m-3">
      <Header
        content={["en", "es", "pt"]}
        css={[
          "font-['Pixelify_Sans']",
          "uppercase text-black p-0 bg-transparent border-0 !text-[1.5rem] hover:decoration-lime-300 hover:underline-offset-8 hover:underline",
          "uppercase text-black p-0 bg-transparent border-0 !text-[1.5rem] hover:decoration-lime-500 hover:underline-offset-8 hover:underline",
          "uppercase text-black p-0 bg-transparent border-0 !text-[1.5rem] hover:decoration-lime-700 hover:underline-offset-8 hover:underline",
        ]}
      />
      {/* <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/users">Users List</Link> |{" "}
        <a href="/api/users">Users API</a>
      </nav> */}
    </header>
    <div className="my-3 mx-6">{children}</div>
    <footer className="m-3">
      <Footer
        content={[
          "personalDataof",
          "l|:Anderson M. Ribeiro",
          "l|:|",
          "fellFreeToCallMe",
        ]}
        css={"font-['DM_Mono']"}
      />
      {/* <hr />
      <span>I'm here to stay (Footer)</span> */}
    </footer>
  </div>
);

export default Layout;
