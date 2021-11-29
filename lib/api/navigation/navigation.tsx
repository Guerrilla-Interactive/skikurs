import client, { previewClient } from '@lib/sanity'
import groq from 'groq'
const getClient = (preview) => (preview ? previewClient : client)

export async function getHeaderData() {
    const data = await client.fetch(
        groq`*[_id == "header"][0] {
            headerNav->{
                sections[]{
                    menu->{
                        items[]{
                            ...,
                            navigationItemUrl{
                                externalUrl,
                                internalLink->{
                                    slug {
                                    current
                                    }
                                }
                            }
                        }
                    }
                }   
            },
        }`
    );
    return data.headerNav.sections[0].menu.items
}

