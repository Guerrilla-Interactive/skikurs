import Container from "@components/layout/container";

import MoreStories from "@components/sections/more-stories";
import MoreHappenings from "@components/sections/more-happenings";


import Layout from "@components/layout/layout";

import { getAllStoriesForHome } from "@lib/api/stories";
import { getAllHappeningsForHome } from "@lib/api/happenings";
import Head from "next/head";
import { SITE_NAME } from "@lib/constants";




import client, { previewClient } from '@lib/sanity'
const getClient = (preview) => (preview ? previewClient : client)
import groq from "groq";


import { getHeaderData } from "@lib/api/navigation/navigation";

import Intro from "@components/sections/intro";




export default function Index({ preview, data, headerData, getNavigation }) {


  return (
    <>
      <Layout headerData={headerData} preview={preview}>
        <Head>
          <title>Forside | {SITE_NAME}</title>
        </Head>
        <Container>
          <Intro title="Norges beste skikurs" text="Dra på skikurs med den instruktøren i Norge som har flest 5-stjerners reviews på Facebook og Google i Norge." />
          <section className="">
            <div className="mt-[22.5rem]">
            </div>
          </section>


        </Container>
      </Layout>
    </>
  );
}



export async function getStaticProps({ preview = false }) {
  // From the Starter template
  // const allPosts = await getAllPostsForHome(preview)

  // Custom API Fetches
  const headerData = await getHeaderData();
  const navigation = JSON.stringify(headerData);


  return {
    props: { preview, headerData },
    revalidate: 1000,
  };
}
