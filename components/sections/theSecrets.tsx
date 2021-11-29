

export default function TheSecrets({ title }) {
    return (
        <section className=" text-black  relative z-20 h-[50vh] grid grid-cols-2 section ">
            <div>
                <div className="w-[20rem] rounded-full h-[20rem] bg-white">

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
