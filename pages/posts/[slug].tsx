import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/layout/container";
import PostBody from "../../components/elements/post/post-body";

import Header from "../../components/sections/header";
import PostHeader from "../../components/elements/post/post-header";
import Avatar from "../../components/elements/avatar";
import SectionSeparator from "../../components/old/section-separator";
import Layout from "../../components/layout/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/elements/post/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import MorePosts from "@components/sections/more-posts";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>

        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.body} />
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MorePosts posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
