import Head from "next/head";
import React from "react";
import { LayoutProps } from "../../lib/types";
import { Nav } from "../Nav";

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <Nav />

      <main className="w-screen grid place-items-center">
        <section className="w-4/5 max-w-[1440px]">{children}</section>
      </main>

      {/* TODO: Footer */}
    </React.Fragment>
  );
};
