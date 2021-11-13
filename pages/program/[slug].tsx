import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/layout/container";
import HappeningBody from "../../components/elements/happening/happening-body";
import MoreHappenings from "../../components/sections/more-happenings";
import Header from "../../components/sections/header";
import HappeningHeader from "../../components/elements/happening/happening-header";
import Avatar from "../../components/elements/avatar";
import SectionSeparator from "../../components/old/section-separator";
import Layout from "../../components/layout/layout";
import { getAllHappeningsWithSlug, getHappeningAndMoreHappenings } from "@lib/api/happenings";
import HappeningTitle from "../../components/elements/happening/happening-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";

export default function Happening({ happening, moreHappenings, preview }) {
  const router = useRouter();
  if (!router.isFallback && !happening?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <HappeningTitle>Loading…</HappeningTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {happening.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={happening.ogImage.url} /> */}
              </Head>
              <HappeningHeader
                title={happening.title}
                coverImage={happening.coverImage}
                date={happening.date}
                author={happening.author}
              />
              <HappeningBody content={happening.body} />
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
