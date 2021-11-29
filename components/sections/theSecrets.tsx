

export default function TheSecrets({ title }) {
    return (
        <section className=" text-black  relative z-20 h-[50vh] grid grid-cols-2 section ">
            <div>
                <div className="p-[5rem] mt-[-3rem] w-[25rem] h-[25rem] rounded-full bg-white">
                    <h6 className="text-sm">Lær av dem beste</h6>
                    <h3 className="text-2xl">Sindre Wiig Nordby</h3>
                    <div>
                        <ul className="list-disc ">
                            <li>6 tidligere NM gull</li>
                            <li>6 tidligere NM gull</li>
                            <li>6 tidligere NM gull</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="grid content-start max-w-2xl gap-6">
                <h3 className="text-2xl">{title}</h3>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                </p>

                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                </p>
            </div>

        </section>
    );
}
