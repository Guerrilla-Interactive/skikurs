import Container from "@components/layout/container";
import MorePosts from "@components/sections/more-posts";
import MoreStories from "@components/sections/more-stories";

import Intro from "@components/sections/intro";
import Layout from "@components/layout/layout";
import { getAllPostsForHome } from "@lib/api";
import { getAllStoriesForHome } from "@lib/api/stories";
import Head from "next/head";
import { CMS_NAME } from "@lib/constants";

export default function Index({ allPosts, allStories, preview }) {
  const morePosts = allPosts.slice(1);
  const moreStories = allStories.slice(0);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />

          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
          {moreStories.length > 0 && <MoreStories stories={moreStories} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const allStories = await getAllStoriesForHome(preview);
  return {
    props: { allPosts, allStories, preview },
    revalidate: 1,
  };
}



