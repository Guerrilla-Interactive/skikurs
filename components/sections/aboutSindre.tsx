import Image from "next/image";
import about from "@images/about.png"


export default function AboutSindre({ title }) {
    return (
        <section className="relative z-20 grid grid-cols-12  text-black section px-[4rem]">
            <div className="col-span-5">
                <h3 className="text-4xl font-light mb-[2.5rem]">En hilsen fra Sindre, instruktøren</h3>
                <p className="text-2xl font-medium mb-[1.5rem]">Da jeg la opp som 23-åring hadde jeg allerede trent mange av de du i dag ser på TV om vinteren. Det gjør jeg fortsatt i dag, men nå også alle nivåer. </p>
                <p className="text-2xl  mb-[1.5rem]">Siden 2018 har jeg vært instruktør og teknikktrener på fulltid. Før det var det hobby. En hobby jeg har drevet med siden jeg var 16 år.</p>
                <p className="text-2xl  mb-[1.5rem]">Måten jeg lærer bort skiteknikk i dag er ikke noe som har blitt til gjennom år med målrettet utvikling. </p>
                <p className="text-2xl  mb-[1.5rem]">Jeg visste ikke da jeg startet at måten vi i dag lærer bort skiteknikk er så full av omveier, feil, og unødvendige metoder og utrykk. </p>
                <p className="text-2xl  mb-[1.5rem]">I stedet er det en metode som gradvis har formet seg over 15 år.</p>
                <button className="bg-[#00C5B9] mt-[2rem] text-2xl h-[4.5rem] text-white rounded-[1.5rem] px-[3.5rem] mr-[1.5rem]">Bli bedre kjent med Sindre</button>
            </div>
            <div className="col-span-1" />
            <div className="col-span-6">
                <div className="h-[35rem] bg-gray-300 w-full overflow-hidden rounded-[4rem]">
                    <Image src={about} layout="responsive" />
                </div>
                <p className="text-2xl mt-[1rem] text-center text-gray-500">Sindre i midten av bildet. Bildet tatt på kurs for viderekomne.</p>
            </div>


        </section>
    );
}
