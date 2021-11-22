import Container from "@components/layout/container";

import MoreStories from "@components/sections/more-stories";
import MoreHappenings from "@components/sections/more-happenings";


import Layout from "@components/layout/layout";

import { getAllStoriesForHome } from "@lib/api/stories";
import { getAllHappeningsForHome } from "@lib/api/happenings";
import Head from "next/head";
import { SITE_NAME } from "@lib/constants";
import LeftCurveHeaderBackground from "@components/elements/backgrounds/LeftCurveHeaderBackground";
import RightCurveHeaderBackground from "@components/elements/backgrounds/RightCurveHeaderBackground";
import MoreHappeningsTwo from "@components/sections/more-happenings-2";

export default function Index({ allStories, allHappenings, preview }) {

    const moreStories = allStories.slice(0);

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>Forside | {SITE_NAME}</title>
                </Head>
                <Container>
                    <RightCurveHeaderBackground />
                    <section className="grid grid-cols-2 section mt-[12.5rem] ">
                        <div>  <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tighter text-center text-white md:text-7xl lg:text-8xl md:leading-none md:text-left">Festivalprogrammet </h1>
                            <h4 className="text-3xl text-white text-opacity-70">Hvor, når og hva</h4></div>

                        <div className=" max-w-xl mt-[20vh] text-xl"> <p className="text-white">20-årsjubileet til Spin Off skal feires med brask og bram, og det blir mye spennende å oppleve. Her kan du lese mer om hva, hvor og når ting skjer i festivaluka!</p></div>

                    </section>
                    <div className="mt-[5rem] mb-[10.5rem]">
                        <section id="program-flow" className="grid grid-cols-2 section min-h-[55rem] pb-[3rem] ">
                            {allHappenings.length > 0 && <MoreHappeningsTwo happenings={allHappenings} />}
                        </section>
                    </div>


                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps({ preview = false }) {

    const allStories = await getAllStoriesForHome(preview);
    const allHappenings = await getAllHappeningsForHome(preview);
    return {
        props: { allStories, allHappenings, preview },
        revalidate: 1,
    };
}



