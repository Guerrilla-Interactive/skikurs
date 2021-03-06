

export default function TheSecrets({ title }) {
    return (
        <section className="relative z-20 grid grid-cols-12 mb-[12.5rem] text-black section-full-contained">
            <div className="col-span-12 col-start-1 lg:col-span-4 lg:col-start-2 ">
                <div className="p-[5rem] mt-[-3rem] w-[25rem] h-[25rem] rounded-full bg-white">
                    <h6 className="text-sm">Lær av dem beste</h6>
                    <h3 className="text-2xl">Sindre Wiig Nordby</h3>

                    <ul className="leading-9 list-disc mt-[1rem] text-lg list-inside mb-[1rem]">
                        <li>6 tidligere NM gull</li>
                        <li>trener landslagsløpere</li>
                        <li>15 års erfaring</li>
                    </ul>

                    <a className="underline cursor-pointer">Les mer om Sindre Wiig Nordby</a>

                </div>

            </div>
            <div className="grid content-start max-w-2xl col-start-2 col-end-12 gap-10 mt-12 lg:mt-0 lg:col-start-8 lg:col-end-12">
                <h3 className="text-4xl font-light">{title}</h3>
                <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                </p>

                <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                </p>
            </div>

        </section>
    );
}
