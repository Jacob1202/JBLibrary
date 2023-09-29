import Link from "next/link";

export default function InfoSection() {
  return (
    <div className="flex flex-col items-start sm:items-end gap-10">
      <div className="flex flex-row gap-4">
        <div className="w-[100px]  text-sm whitespace-nowrap">
          {"[About me]"}
        </div>
        <div className="w-full sm:w-[400px] md:w-[600px] lg:w-[800px]">
          <p className="text-justify text-lg">
            I&#39;m currently a software developer with a degree in Computer
            Science and Econometrics from Warsaw University of Life Sciences. I
            have a passion for learning, and I am deeply interested in topics
            like Machine Learning, Data Science, Software Development and
            Design. My hobbies include swimming, playing the piano, traveling
            and trying to figure things out.
          </p>
        </div>
      </div>
      <div className="flex flex-row sm:gap-4">
        <div className="w-[100px] text-sm">{"[Work]"}</div>
        <div className=" sm:w-[400px] md:w-[600px] lg:w-[800px]">
          <ul>
            <li>
              <Link href="/dotnet">Software development</Link>
            </li>

            <li>
              <Link href="/design">Design</Link>
            </li>
            <li>
              <Link href="/data">Data science</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
