import { root } from "@src/styles/customFonts";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Declaring custom variables in :root */}
      <style jsx global>
        {root}
      </style>
      <Component {...pageProps} />
    </>
  );
}
