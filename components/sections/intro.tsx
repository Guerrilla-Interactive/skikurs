import { CMS_NAME, CMS_URL } from "@lib/constants";
import Image from "next/image";
import sindre from "@images/sindre.png"
import Snow from "@components/elements/backgrounds/snow";

export default function Intro({ title, text }) {
  return (
    <section className="relative grid grid-cols-12 max-h-[calc(50vh+35rem)] content-center h-[calc(40vh+35rem)]  bg-blue-900 section-full">

      <div className=" w-[60vw] col-span-5 mb-[-30vh] 2xl:bottom-[10rem] 2xl:left-[-10rem] 3xl:w-[50.5vw] 4xl:w-[50.5vw] 5xl:w-[45vw] 6xl:w-[42vw] bottom-[-10vh] z-10 ">
        <Image
          src={sindre}
          alt="Picture of the author"
          layout="responsive"
        />
      </div>

      <div className="grid col-span-7 content-start max-w-2xl mt-[5vh] gap-3 ">
        <h1 className="mb-6 font-bold leading-tight tracking-tighter text-center text-white text-7xl md:leading-none md:text-left">{title}</h1>
        <p className="text-3xl mb-[3rem] text-white">{text}</p>
        <div className="grid-flow-col ">
          <button className="bg-[#00C5B9] h-[3.5rem] text-white rounded-[1.5rem] px-[4rem] mr-[2rem]">Se kursoversikt</button>
          <button className=" border-2 h-[3.5rem] text-white rounded-[1.5rem] px-[4rem]">Se ulike ferdighetsnivåer</button>
        </div>
      </div>

      <Snow />
    </section >
  );
}
