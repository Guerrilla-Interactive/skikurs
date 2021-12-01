import Image from "next/image";
import Check from "@components/elements/backgrounds/check";


import gavekort from "@images/gavekort.png";


export default function GiftCardSection({ title }) {
    return (
        <section className="relative z-20 grid grid-cols-12 text-black section-full-contained  mb-[10rem]">
            <div className="col-start-2 col-end-12 lg:col-end-6">
                <h3 className="text-4xl font-light mb-[2.5rem]">{title}</h3>
                <p className="text-xl  mb-[1.5rem]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                <div className="grid grid-flow-row gap-6 mt-12">
                    <div className="grid justify-start grid-flow-col gap-8">
                        <div><Check /></div>
                        <div className="text-xl">Kan brukes på alle skikurs</div>
                    </div>
                    <div className="grid justify-start grid-flow-col gap-8">
                        <div><Check /></div>
                        <div className="text-xl">Elektronisk gavekort</div>
                    </div>
                    <div className="grid-flow-col"></div>

                </div>
                <button className="bg-[#00C5B9] mt-[2rem] text-xl h-[4.5rem] text-white rounded-[1.5rem] px-[3.5rem] mr-[1.5rem]">Se gavekort alternativer</button>
            </div>
            <div className="order-first col-start-2 col-end-12 lg:order-last lg:col-start-7 lg:col-end-12 mb-9">
                <div className="max-h-[35rem] relative overflow-hidden rounded-[4rem]">
                    <Image src={gavekort} layout="responsive" />
                </div>

            </div>


        </section>
    );
}
