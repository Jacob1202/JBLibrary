import * as Separator from "@radix-ui/react-separator";

export default function ListNavigation() {
  return (
    <div className="pt-32 sm:mt-10">
      <div className="mt-2 sm:mt-4  w-fit ">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold md:leading-none">
          Coming soon
        </h1>
        <Separator.Root className="bg-gray-700 my-[15px] h-[1px]" />
        <div className="flex font-semibold text-gray-700 text-md sm:text-lg dark:text-white">
          <p>Home</p>
          <Separator.Root
            className="bg-gray-700 mx-[15px] w-[1px]"
            orientation="vertical"
          />
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}
