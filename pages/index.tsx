import Container from "@components/layout/container";

import MoreStories from "@components/sections/more-stories";
import MoreHappenings from "@components/sections/more-happenings";

import Intro from "@components/sections/intro";
import Layout from "@components/layout/layout";

import { getAllStoriesForHome } from "@lib/api/stories";
import { getAllHappeningsForHome } from "@lib/api/happenings";
import Head from "next/head";
import { CMS_NAME } from "@lib/constants";

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



