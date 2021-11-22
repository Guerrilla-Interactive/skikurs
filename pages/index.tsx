import Container from "@components/layout/container";

import MoreStories from "@components/sections/more-stories";
import MoreHappenings from "@components/sections/more-happenings";

import Intro from "@components/sections/intro";
import Layout from "@components/layout/layout";

import { getAllStoriesForHome } from "@lib/api/stories";
import { getAllHappeningsForHome } from "@lib/api/happenings";
import Head from "next/head";
import { SITE_NAME } from "@lib/constants";
import LeftCurveHeaderBackground from "@components/elements/backgrounds/LeftCurveHeaderBackground";
import RightCurveHeaderBackground from "@components/elements/backgrounds/RightCurveHeaderBackground";
import RightCurveHeaderBackgroundTwo from "@components/elements/backgrounds/RightCurveHeaderBackground-2";



export default function Index({ allStories, allHappenings, preview }) {

  const moreStories = allStories.slice(0);

  return (
    <>

      <style jsx global>{`
        html {
          background: black;
        }
        button {
          border: 1px solid white;
        }
      `}</style>


      <Layout preview={preview}>
        <Head>
          <title>Forside | {SITE_NAME}</title>
        </Head>
        <Container>
          <RightCurveHeaderBackgroundTwo />
          <section className="z-10 section mt-[12.5rem]">
            <h4 className="text-3xl text-white text-opacity-70">Hurra! Spin Off er 20 år!</h4>
            <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tighter text-center text-white md:text-7xl lg:text-8xl md:leading-none md:text-left">Velkommen til <br /> Spin Off festivalen </h1>
          </section>
          <section className="">
            <div className="mt-[22.5rem]">
              {allHappenings.length > 0 && <MoreHappenings happenings={allHappenings} />}
            </div>
          </section>


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



