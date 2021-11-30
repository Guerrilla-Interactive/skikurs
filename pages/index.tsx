import Container from "@components/layout/container";
import Layout from "@components/layout/layout";
import Head from "next/head";
import { SITE_NAME } from "@lib/constants";
import { getHeaderData } from "@lib/api/navigation/navigation";

import Intro from "@components/sections/intro";
import TheSecrets from "@components/sections/theSecrets";
import SkillLevels from "@components/sections/skill-levels";
import AboutSindre from "@components/sections/aboutSindre";
import ReviewSection from "@components/sections/reviewSection";


export default function Index({ preview, headerData }) {


  return (
    <>
      <Layout headerData={headerData} preview={preview}>
        <Head>
          <title>Forside | {SITE_NAME}</title>
        </Head>
        <Container>
          <Intro title="Norges beste skikurs" text="Dra på skikurs med den instruktøren i Norge som har flest 5-stjerners reviews på Facebook og Google i Norge." />
          <TheSecrets title="Lær hemmlighetene" />
          <SkillLevels title="For alle ferdighetsnivåer" />
          <AboutSindre title="En hilsen fra Sindre, instruktøren" />
          <ReviewSection title="Vi har over 500 tilbakemeldinger" />

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

  return {
    props: { preview, headerData },
    revalidate: 1000,
  };
}
