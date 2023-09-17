import { AppProps } from "next/app";
import "../styles/index.css";
import { ThemeProvider } from "../components/ThemeProvider";
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="2s flex min-h-screen flex-col bg-white transition-all ease-in-out dark:bg-zinc-900">
        <AppHeader />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
