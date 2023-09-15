export default function WelcomeText() {
  return (
    <>
      <div className="h-[60px] w-fit overflow-hidden sm:h-[120px]">
        <ul className={`flex animate-moveMobile flex-col sm:animate-move`}>
          <li
            className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl font-semibold leading-none text-blue-700 sm:my-[30px] sm:animate-liMove sm:text-6xl`}
          >
            Hello world!
          </li>
          <li
            className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl font-semibold leading-none text-blue-700 sm:my-[30px]  sm:animate-liMove sm:text-6xl`}
          >
            Dzień dobry!
          </li>
          <li
            className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl font-semibold leading-none text-blue-700 sm:my-[30px]  sm:animate-liMove sm:text-6xl`}
          >
            Buongiorno!
          </li>
          <li
            className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl font-semibold leading-none text-blue-700 sm:my-[30px]  sm:animate-liMove sm:text-6xl`}
          >
            こんにちは!
          </li>
          <li
            className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl font-semibold leading-none text-blue-700 sm:my-[30px]  sm:animate-liMove sm:text-6xl`}
          >
            Guten Tag!
          </li>
          <li
            className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl font-semibold leading-none text-blue-700  sm:my-[30px]   sm:animate-liMove sm:text-6xl `}
          >
            السلام عليكم
          </li>
          {/* -- Filling in last --*/}
          <li
            className={`my-[15px] h-full w-fit animate-liMoveMobile text-3xl font-semibold leading-none text-blue-700 sm:my-[30px] sm:animate-liMove sm:text-6xl`}
          >
            Hello world!
          </li>
        </ul>
      </div>
    </>
  );
}
