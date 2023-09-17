import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function ContactSection() {
  return (
    <div className="container mx-auto">
      <div className="p-10 w-full ">
        <h3 className="text-2xl font-semibold leading-none sm:text-4xl mb-6">
          Let's talk!
        </h3>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold flex flex-row items-center gap-2 hover:gap-4 transition-all duration-200 ease-in w-[225px] hover:bg-blue-800">
          Send me a message
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
