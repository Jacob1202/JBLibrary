import { AppProps } from "next/app";
import "../styles/index.css";
import { ThemeProvider } from "../components/ThemeProvider";
import AppHeader from "../components/AppHeader";

import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className={manrope.className}>
        <div className="2s flex min-h-screen flex-col bg-white transition-all ease-in-out dark:bg-zinc-900  px-6 sm:px-12">
          <AppHeader />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
