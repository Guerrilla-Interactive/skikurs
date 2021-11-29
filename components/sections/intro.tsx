import { CMS_NAME, CMS_URL } from "@lib/constants";
import Image from "next/image";
import sindre from "@images/sindre.png"
import Snow from "@components/elements/backgrounds/snow";

export default function Intro({ title, text }) {
  return (
    <section className="bg-blue-900 section-full grid h-[60rem] content-center relative">
      <section className="z-10 grid justify-end section">
        <div className="max-w-2xl mr-[15vw]">
          <h1 className="mb-6 font-bold leading-tight tracking-tighter text-center text-white text-7xl md:leading-none md:text-left">{title}</h1>
          <p className="text-3xl text-white">{text}</p>
        </div>
      </section>
      <div className="absolute w-[40%] bottom-[-15vh] z-10 ">
        <Image
          src={sindre}
          alt="Picture of the author"
          className="absolute bottom-0"
          width={900}
          height={1000}
          layout="responsive"
        />
      </div>

      <div> <Snow /> </div>
    </section>
  );
}
