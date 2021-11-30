import Image from "next/image";
import about from "@images/about.png"


export default function AboutSindre({ title }) {
    return (
        <section className="relative z-20 grid lg:grid-cols-12 text-black section-full-contained  mb-[10rem]">
            <div className="lg:col-start-2 lg:col-end-7">
                <h3 className="text-4xl font-light mb-[2.5rem]">{title}</h3>
                <p className="text-xl font-medium mb-[1.5rem]">Da jeg la opp som 23-åring hadde jeg allerede trent mange av de du i dag ser på TV om vinteren. Det gjør jeg fortsatt i dag, men nå også alle nivåer. </p>
                <p className="text-xl  mb-[1.5rem]">Siden 2018 har jeg vært instruktør og teknikktrener på fulltid. Før det var det hobby. En hobby jeg har drevet med siden jeg var 16 år.</p>
                <p className="text-xl  mb-[1.5rem]">Måten jeg lærer bort skiteknikk i dag er ikke noe som har blitt til gjennom år med målrettet utvikling. </p>
                <p className="text-xl  mb-[1.5rem]">Jeg visste ikke da jeg startet at måten vi i dag lærer bort skiteknikk er så full av omveier, feil, og unødvendige metoder og utrykk. </p>
                <p className="text-xl  mb-[1.5rem]">I stedet er det en metode som gradvis har formet seg over 15 år.</p>
                <button className="bg-[#00C5B9] mt-[2rem] text-2xl h-[4.5rem] text-white rounded-[1.5rem] px-[3.5rem] mr-[1.5rem]">Bli bedre kjent med Sindre</button>
            </div>
            <div className="lg:col-start-8 lg:col-end-12">
                <div className="max-h-[35rem] relative overflow-hidden rounded-[4rem]">
                    <Image src={about} layout="responsive" />
                </div>
                <p className="text-xl mt-[1rem] text-center text-gray-500">Sindre i midten av bildet. Bildet tatt på kurs for viderekomne.</p>
            </div>


        </section>
    );
}
