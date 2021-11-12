import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/layout/container";
import StoryBody from "../../components/elements/story/story-body";
import MoreStories from "../../components/sections/more-stories";
import Header from "../../components/sections/header";
import StoryHeader from "../../components/elements/story/story-header";
import Avatar from "../../components/elements/avatar";
import SectionSeparator from "../../components/old/section-separator";
import Layout from "../../components/layout/layout";
import { getAllStoriesWithSlug, getStoryAndMoreStories } from "@lib/api/stories";
import StoryTitle from "../../components/elements/story/story-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";

export default function Story({ story, moreStories, preview }) {
    const router = useRouter();
    if (!router.isFallback && !story?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Layout preview={preview}>
            <Container>
                <Header />
                {router.isFallback ? (
                    <StoryTitle>Loading…</StoryTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>
                                    {story.title} | Next.js Blog Example with {CMS_NAME}
                                </title>
                                {/* <meta property="og:image" content={story.ogImage.url} /> */}
                            </Head>
                            <StoryHeader
                                title={story.title}
                                coverImage={story.coverImage}
                                date={story.date}
                                author={story.author}
                            />
                            <StoryBody content={story.body} />
                        </article>

                        <SectionSeparator />
                        {moreStories.length > 0 && <MoreStories stories={moreStories} />}
                    </>
                )}
            </Container>
        </Layout>
    );
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getStoryAndMoreStories(params.slug, preview);
    return {
        props: {
            preview,
            story: data?.story || null,
            moreStories: data?.moreStories || null,
        },
        revalidate: 1,
    };
}

export async function getStaticPaths() {
    const allStories = await getAllStoriesWithSlug();
    return {
        paths:
            allStories?.map((story) => ({
                params: {
                    slug: story.slug,
                },
            })) || [],
        fallback: true,
    };
}
