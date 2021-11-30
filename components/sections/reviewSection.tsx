import Image from "next/image";
import about from "@images/about.png";
import reviews from "@images/reviews.png";
import reviewPicture from "@images/review-picture.png";



export default function reviewSection({ title }) {
    return (
        <section className="text-white bg-[#002683] section-full min-h-[35rem]">
            <div className="relative z-20 grid grid-cols-2 section-full ">

                <div className="mx-auto mt-[12.5vh] max-w-3xl ">
                    <h3 className="text-4xl font-semi mb-[2.5rem]">{title}</h3>
                    <p className="text-2xl mb-[2.5rem] font-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p>
                    <a className="text-2xl font-light underline opacity-80 "> Se tidligere elevers progresjon og tilbakemeldinger</a>
                    <div className="mt-[4rem]">

                        <Image className="" src={reviews} />
                    </div>
                </div>



                <div className="w-full overflow-hidden">

                    <Image src={reviewPicture} layout="responsive" />


                </div>
            </div>

        </section>
    );
}
