import { CMS_NAME, CMS_URL } from "@lib/constants";
import Image from "next/image";
import sindre from "@images/sindre.png"
import Snow from "@components/elements/backgrounds/snow";

export default function Intro({ title, text }) {
  return (
    <section className="relative bg-[#002683] section-full">
      <div className="grid grid-cols-12 max-h-[calc(20vh+50rem)] content-center h-[calc(20vh+50rem)] section-full-limited ">
        <div className="md:ml-[-10rem] xl:ml-[-5rem] 3xl:ml-[0] w-[60rem] col-span-5 mb-[-30vh] 2xl:bottom-[10rem] bottom-[-10vh] z-10 ">
          <Image
            src={sindre}
            alt="Picture of the author"
            layout="responsive"
            className=""
          />
        </div>

        <div className="grid col-start-6 col-end-12 content-start mt-[calc(5vh+2rem)] gap-3 ">
          <h1 className="mb-6 font-bold leading-tight tracking-tighter text-center text-white text-7xl md:leading-none md:text-left">{title}</h1>
          <p className="text-3xl mb-[3rem] max-w-2xl text-white">{text}</p>
          <div className="grid justify-start grid-flow-col ">
            <button className="bg-[#00C5B9] text-2xl h-[4.5rem] text-white rounded-[1.5rem] px-[3.5rem] mr-[1.5rem]">Se kursoversikt</button>
            <button className=" border-[1px] h-[4.5rem] text-2xl text-white rounded-[1.5rem] px-[3.5rem]">Ulike ferdighetsnivåer</button>
          </div>
        </div>
      </div>
      <Snow />
    </section >
  );
}
