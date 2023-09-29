import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

export default function Index() {
  return (
    <>
      <Head>
        <title>{`${CMS_NAME}`}</title>
      </Head>
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <InfoSection />
      </main>
    </>
  );
}
