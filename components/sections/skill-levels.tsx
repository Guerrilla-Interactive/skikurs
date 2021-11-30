import Image from "next/image";

import skill from "@images/skill.png"
import skill2 from "@images/skill-2.png"
import skill3 from "@images/skill-3.png"


export default function SkillLevels({ title }) {
    return (
        <section className="relative z-20 grid lg:grid-cols-12 text-black section-full-contained mb-[15.5rem]">
            <h2 className="text-5xl text-center mb-[5rem] font-light col-span-full">{title}</h2>
            <div className="grid col-start-2 col-end-12 gap-16 lg:grid-cols-3">
                <div className="bg-gray-200  rounded-[4rem] overflow-hidden shadow-sm">
                    <div className="max-h-[23.5rem] bg-gray-300 overflow-hidden">
                        <Image src={skill} layout="responsive" />
                    </div>
                    <div className="bg-white text-center px-[4rem]">
                        <h3 className="text-3xl pt-[2.5rem]"> Nybegynner</h3>
                        <h5 className="text-2xl text-gray-400 pt-[0.5rem]"> 4-8 deltakere</h5>
                        <p className="text-2xl  pt-[1.5rem] mb-[2rem]"> Du har aldri gått på ski før, evt mindre enn 5 skiturer.</p>
                        <button className=" border-[1px] border-black h-[4.5rem] text-2xl rounded-[1.5rem] px-[4rem] mb-[3.5rem]">Les mer</button>
                    </div>
                </div>

                <div className="bg-gray-200  rounded-[4rem] overflow-hidden shadow-sm">
                    <div className="max-h-[23.5rem] bg-gray-300 overflow-hidden">
                        <Image src={skill2} layout="responsive" />
                    </div>
                    <div className="bg-white text-center px-[4rem]">
                        <h3 className="text-3xl pt-[2.5rem]"> Nybegynner</h3>
                        <h5 className="text-2xl text-gray-400 pt-[0.5rem]"> 4-8 deltakere</h5>
                        <p className="text-2xl  pt-[1.5rem] mb-[2rem]"> Du har aldri gått på ski før, evt mindre enn 5 skiturer.</p>
                        <button className=" border-[1px] border-black h-[4.5rem] text-2xl rounded-[1.5rem] px-[4rem] mb-[3.5rem]">Les mer</button>
                    </div>
                </div>

                <div className="bg-gray-200  rounded-[4rem] overflow-hidden shadow-sm">
                    <div className="max-h-[23.5rem] bg-gray-300 overflow-hidden">
                        <Image src={skill3} layout="responsive" />
                    </div>
                    <div className="bg-white text-center px-[4rem]">
                        <h3 className="text-3xl pt-[2.5rem]"> Nybegynner</h3>
                        <h5 className="text-2xl text-gray-400 pt-[0.5rem]"> 4-8 deltakere</h5>
                        <p className="text-2xl  pt-[1.5rem] mb-[2rem]"> Du har aldri gått på ski før, evt mindre enn 5 skiturer.</p>
                        <button className=" border-[1px] border-black h-[4.5rem] text-2xl rounded-[1.5rem] px-[4rem] mb-[3.5rem]">Les mer</button>
                    </div>
                </div>




            </div>

        </section>
    );
}
