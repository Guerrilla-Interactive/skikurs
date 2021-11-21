import client, { previewClient } from '@lib/sanity'
const getClient = (preview) => (preview ? previewClient : client)






const happeningFields = `
_id,
_type,
name,
body,
infoboxes,
subtitle,
title,
excerpt,
textBottomLeft,
textBottomRight,
'slug': slug.current,
'coverImage': mainImage,
`


const getUniqueHappenings = (happenings) => {
    const slugs = new Set()
    return happenings.filter((happening) => {
        if (slugs.has(happening.slug)) {
            return false
        } else {
            slugs.add(happening.slug)
            return true
        }
    })
}



export async function getPreviewHappeningsBySlug(slug) {
    const data = await getClient(true).fetch(
        `*[_type == "happening" && slug.current == $slug] | order(publishedAt desc){
    ${happeningFields}
    body
  }`,
        { slug }
    )
    return data[0]
}



export async function getAllHappeningsWithSlug() {
    const data = await client.fetch(`*[_type == "happening"]{ 'slug': slug.current }`)
    return data
}

export async function getAllHappeningsForHome(preview) {
    const results = await getClient(preview)
        .fetch(`*[_type == "happening"] | order(publishedAt desc){
    ${happeningFields}
  }`)
    return getUniqueHappenings(results)
}

export async function getHappeningAndMoreHappenings(slug, preview) {
    const curClient = getClient(preview)
    const [happening, moreHappenings] = await Promise.all([
        curClient.fetch(
            `*[_type == "happening" && slug.current == $slug] | order(_updatedAt desc) {
      ${happeningFields}
      body,
    }`,
            { slug }
        )
            .then((res) => res?.[0]),
        curClient.fetch(
            `*[_type == "happening" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
      ${happeningFields}
    }`,
            { slug }
        ),
    ])
    return { happening, moreHappenings: getUniqueHappenings(moreHappenings) }
}
