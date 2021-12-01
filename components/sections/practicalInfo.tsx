import Image from "next/image";

import skill from "@images/skill.png"
import skill2 from "@images/skill-2.png"
import skill3 from "@images/skill-3.png"


export default function PracticalInfo({ title }) {
    return (
        <section className="relative z-20 grid grid-cols-12 mb-40 text-black section-full-contained">
            <div className="col-start-2 col-end-4"> <h2 className="text-5xl font-thin"> {title} </h2></div>
            <div className="col-start-7 col-end-12">
                <div className="mb-[8rem]">
                    <h3 className="mb-8 text-4xl ">Hvor er oppmøtet for skikurset?</h3>
                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                    </p>
                </div>

                <div className="mb-[8rem]">
                    <h3 className="mb-8 text-4xl ">Hva bør jeg ta med meg?</h3>
                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                    </p>
                </div>

                <div className="mb-[8rem]">
                    <h3 className="mb-8 text-4xl ">Hvilke aldersgrupper er dere tilpasset?</h3>
                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                    </p>
                </div>

                <div className="mb-[8rem]">
                    <h3 className="mb-8 text-4xl ">Hva er kvadratroten på mening?</h3>
                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                    </p>
                </div>



            </div>


        </section >
    );
}
