export default function WelcomeText() {
  return (
    <>
      <div className="w-fit ">
        <div className="h-[60px] w-fit overflow-hidden sm:h-[120px]">
          <ul
            className={`flex animate-moveMobile flex-col sm:animate-move z-10`}
          >
            <li
              className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl text-black dark:text-white sm:my-[30px] sm:animate-liMove sm:text-6xl`}
            >
              Hello world,
            </li>
            <li
              className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl text-black dark:text-white sm:my-[30px]  sm:animate-liMove sm:text-6xl`}
            >
              Dzień dobry,
            </li>
            <li
              className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl text-black dark:text-white sm:my-[30px]  sm:animate-liMove sm:text-6xl`}
            >
              Buongiorno,
            </li>
            <li
              className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl text-black dark:text-white sm:my-[30px]  sm:animate-liMove sm:text-6xl`}
            >
              こんにちは,
            </li>
            <li
              className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl text-black dark:text-white sm:my-[30px]  sm:animate-liMove sm:text-6xl`}
            >
              Guten Tag,
            </li>
            <li
              className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl text-black dark:text-white sm:my-[30px]   sm:animate-liMove sm:text-6xl `}
            >
              السلام عليكم,
            </li>
            {/* -- Filling in last --*/}
            <li
              className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl text-black dark:text-white sm:my-[30px] sm:animate-liMove sm:text-6xl`}
            >
              Hello world,
            </li>
          </ul>
        </div>

        <h1 className="text-3xl sm:text-6xl  sm:-translate-y-6 z-2">
          This is a documentation <br /> of my knowledge
        </h1>
        <div className="flex flex-row justify-between text-lg">
          <h4>Jakub Biniek</h4>
          <h4>2020-2023</h4>
        </div>
      </div>
    </>
  );
}
