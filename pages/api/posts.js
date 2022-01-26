const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
})

export async function fetchEntries(slug) {
    const entries = await client.getEntries()
    if (entries.items) {
        if (slug) {
            return entries.items.find(item => item.fields.slug === slug)
        }
        return entries.items.filter(i => i.fields.active);
    }
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
