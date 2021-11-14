import Container from "@components/layout/container";

import MoreStories from "@components/sections/more-stories";
import MoreHappenings from "@components/sections/more-happenings";

import Intro from "@components/sections/intro";
import Layout from "@components/layout/layout";

import { getAllStoriesForHome } from "@lib/api/stories";
import { getAllHappeningsForHome } from "@lib/api/happenings";
import Head from "next/head";
import { CMS_NAME } from "@lib/constants";
import LeftCurveHeaderBackground from "@components/elements/backgrounds/LeftCurveHeaderBackground";

export default function Index({ allStories, allHappenings, preview }) {

  const moreStories = allStories.slice(0);
  const moreHappenings = allHappenings.slice(0);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <LeftCurveHeaderBackground />
          <div className="md:max-w-[60vw]">
            <h4 className="text-3xl text-white text-opacity-70">Hurra! Spin Off er 20 år!</h4>
            <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tighter text-center text-white md:text-7xl lg:text-8xl md:leading-none md:text-left">Velkommen til <br /> Spin Off festivalen </h1>
          </div>
          {moreHappenings.length > 0 && <MoreHappenings happenings={moreHappenings} />}
          {moreStories.length > 0 && <MoreStories stories={moreStories} />}

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



