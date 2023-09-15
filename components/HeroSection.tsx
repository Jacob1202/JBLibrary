import WelcomeText from "./WelcomeText";

export default function HeroSection() {
  return (
    <div className="mt-40 flex flex-col flex-wrap items-start justify-center sm:items-center">
      <div className="flex w-full items-center justify-center gap-2">
        <WelcomeText />
        <h1 className="text-3xl font-semibold sm:text-6xl">I&#39;m Jacob,</h1>
      </div>
      <div className="flex w-full flex-col items-center text-center">
        <h3 className="mb-[15px] text-3xl font-semibold leading-none sm:mb-0 sm:-translate-y-7 sm:text-6xl">
          this is my documentation
        </h3>
        <h3 className="text-md w-full px-4 text-gray-400 dark:text-gray-500 sm:max-w-[600px] sm:-translate-y-4 sm:px-0 sm:text-lg md:text-2xl">
          I&#39;m building an app to showcase my growth as a software developer.
          Learn with me.
        </h3>
      </div>
    </div>
  );
}
