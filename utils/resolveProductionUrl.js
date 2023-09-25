// All Slugs go here...
const globalSlugs = {
  home: '/',
  work: '/works',
  words: '/words',
  exhibitions: '/exhibitions',
  about: '/about'
}

const secret = process.env.SANITY_STUDIO_SANITY_PREVIEW_SECRET
export const getGlobalSlug = (slug) => globalSlugs[slug]

// Change remote url...
const remoteURL = 'https://tyler-hobbs.vercel.app'
const localURL = 'http://localhost:3000'
export const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const createUrl = ({ slug, globalSlug }) => {
  if (!globalSlug || !previewURL) {
    console.warn('Missing slug or previewURL', { globalSlug, previewURL })
    return ''
  }
  let path = `${globalSlug}`
  if (slug) path += `/${slug.current}`
  return `${previewURL}/api/preview?secret=skllbNmtD9p68uRxbdS8JLyfzL0cgNIZ5aJ6MTFGezcH3LUCTU6XIrbQinhFsLIJqXUQKlXyEWcP51GzQ8O2jy9XU22Z9jweIt3MXwmCsIpAfTmrkfj4YcbO6ZPMECVagSPxbWkO8xeCf7X9gZ5CBPOx4pZOcliHv5vlZL0lurZdzkhWpAIq&slug=${path}`
}

export default function resolveProductionUrl (document) {
  const url = createUrl({ globalSlug: getGlobalSlug(document._type), slug: document.slug })
  return url
}
