import client, { previewClient } from '@lib/sanity'
const getClient = (preview) => (preview ? previewClient : client)


const storyFields = `
_id,
name,
title,
excerpt,
'slug': slug.current,
'coverImage': mainImage,
`


const getUniqueStories = (stories) => {
    const slugs = new Set()
    return stories.filter((story) => {
        if (slugs.has(story.slug)) {
            return false
        } else {
            slugs.add(story.slug)
            return true
        }
    })
}



export async function getPreviewStoriesBySlug(slug) {
    const data = await getClient(true).fetch(
        `*[_type == "story" && slug.current == $slug] | order(publishedAt desc){
    ${storyFields}
    body
  }`,
        { slug }
    )
    return data[0]
}



export async function getAllStoriesWithSlug() {
    const data = await client.fetch(`*[_type == "story"]{ 'slug': slug.current }`)
    return data
}

export async function getAllStoriesForHome(preview) {
    const results = await getClient(preview)
        .fetch(`*[_type == "story"] | order(publishedAt desc){
    ${storyFields}
  }`)
    return getUniqueStories(results)
}

export async function getStoryAndMoreStories(slug, preview) {
    const curClient = getClient(preview)
    const [story, moreStories] = await Promise.all([
        curClient.fetch(
            `*[_type == "story" && slug.current == $slug] | order(_updatedAt desc) {
      ${storyFields}
      body,
      'comments': *[
                    _type == "comment" && 
                    post._ref == ^._id && 
                    approved == true] {
        _id, 
        name, 
        email, 
        comment, 
        _createdAt
      }
    }`,
            { slug }
        )
            .then((res) => res?.[0]),
        curClient.fetch(
            `*[_type == "story" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
      ${storyFields}
      body,
    }[0...2]`,
            { slug }
        ),
    ])
    return { story, moreStories: getUniqueStories(moreStories) }
}
