import Image from "next/image";
import about from "@images/about.png";
import reviews from "@images/reviews.png";
import reviewPicture from "@images/review-picture.png";



export default function reviewSection({ title }) {
    return (
        <section className="text-white bg-[#002683] section-full ">
            <div className="relative z-20 grid lg:grid-cols-12 max-h-[100vh] ">

                <div className="mx-auto mt-[200px] max-w-3xl col-start-2 col-end-6 max-h-[100vh]">
                    <h3 className="text-4xl font-semi mb-[2.5rem]">{title}</h3>
                    <p className="text-2xl mb-[2.5rem] font-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p>
                    <a className="text-2xl font-light underline opacity-80 "> Se tidligere elevers progresjon og tilbakemeldinger</a>
                    <div className="h-[30rem] mt-[4rem] ">
                        <Image className="" src={reviews} />
                    </div>
                </div>



                <div className="relative col-start-7 col-end-13 max-h-[100vh] overflow-hidden">

                    <Image src={reviewPicture} layout="fill" />


                </div>
            </div>

        </section>
    );
}
