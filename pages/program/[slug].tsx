import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/layout/container";
import HappeningBody from "../../components/elements/happening/happening-body";
import MoreHappenings from "../../components/sections/more-happenings";
import AllInfoboxes from "@components/elements/happening/happening-all-infoboxes";
import HappeningHeader from "../../components/elements/happening/happening-header";
import SectionSeparator from "../../components/old/section-separator";
import Layout from "../../components/layout/layout";
import { getAllHappeningsWithSlug, getHappeningAndMoreHappenings } from "@lib/api/happenings";
import HappeningTitle from "../../components/elements/happening/happening-title";
import Head from "next/head";
import { SITE_NAME } from "../../lib/constants";
import LeftCurveHeaderBackground from "@components/elements/backgrounds/LeftCurveHeaderBackground";

export default function Happening({ happening, moreHappenings, preview }) {
  const router = useRouter();
  if (!router.isFallback && !happening?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>

        {router.isFallback ? (
          <HappeningTitle>Loading…</HappeningTitle>
        ) : (
          <>

            <article>
              <Head>
                <title>
                  {happening.title} | {SITE_NAME}
                </title>
                {/* <meta property="og:image" content={happening.ogImage.url} /> */}
              </Head>

              {/* Background element top */}
              <LeftCurveHeaderBackground />

              {/* Row 1 - Header*/}
              <div className="mt-32 mb-20">
                <HappeningHeader
                  title={happening.title}
                  subtitle={happening.subtitle}
                  coverImage={happening.coverImage}
                />
              </div>

              {/* Row 2 - Main Info*/}
              <div className="grid gap-12 md:grid-cols-2 ">

                {/* Col 1   */}
                <AllInfoboxes happenings={happening} />

                {/* Col 2 */}
                <div className="mt-[10rem]"><HappeningBody content={happening.body} /></div>


              </div>



              {/* Row 3 - Additional Info */}

              <div className="grid gap-12 mt-[10rem] md:grid-cols-2 ">
                {/* Col 1 */}
                <div className="max-w-xl">
                  <h3 className="mb-6 text-xl font-semibold">Title</h3>
                  <div>Spin Off samarbeider med PRODA om diverse danseklasser for profesjonelle. Klassene foregår i PRODAs lokaler på Rom for Dans i uke 21-22, og består av tidligere Spin Off-elever. Mer info og timeplan er tilgjengelig via proda.no/timeplan


                  </div>
                </div>

                {/* Col 2 */}
                <div className="max-w-xl">
                  <h3 className="mb-6 text-xl">Title</h3>
                  <div>Spin Off samarbeider med PRODA om diverse danseklasser for profesjonelle. Klassene foregår i PRODAs lokaler på Rom for Dans i uke 21-22, og består av tidligere Spin Off-elever. Mer info og timeplan er tilgjengelig via proda.no/timeplan
                  </div>
                </div>

              </div>




            </article>

            <SectionSeparator />
            {moreHappenings.length > 0 && <MoreHappenings happenings={moreHappenings} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getHappeningAndMoreHappenings(params.slug, preview);
  return {
    props: {
      preview,
      happening: data?.happening || null,
      moreHappenings: data?.moreHappenings || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allHappenings = await getAllHappeningsWithSlug();
  return {
    paths:
      allHappenings?.map((happening) => ({
        params: {
          slug: happening.slug,
        },
      })) || [],
    fallback: true,
  };
}
