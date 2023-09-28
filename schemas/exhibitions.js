import { FiInfo, FiLink, FiImage, FiLayers, FiLink2, FiExternalLink } from 'react-icons/fi'
import slugify from '../utils/slugify'

export default {
  title: "Exhibitions",
  name: 'exhibitions',
  type: "document",
  groups: [
    {
      title: 'Info',
      name: 'info',
      default: true,
      icon: FiInfo
    },
    {
      title: 'Images',
      name: 'images',
      icon: FiImage
    },
    {
      title: 'Content',
      name: 'content',
      icon: FiLayers
    },
    {
      title: 'SEO / Share',
      name: 'seo',
      icon: FiLink
    }
  ],
  fields: [
    // Info
    {
      name: 'note',
      type: 'note',
      group: "info",
      options: {
        headline: 'Dev Note',
        message: 'Active Development - API May Change, message Sam if anything looks odd!'
      }
    },
    {
      title: "Title",
      description: "The name of this exhibition",
      name: "title",
      type: "string",
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: "Gallery",
      description: "The name of the gallery for this exhibition",
      name: "gallery",
      type: "string",
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: "Location",
      description: "The location of the gallery for this exhibition",
      name: "location",
      type: "string",
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: "Year",
      description: "The year this exhibition took place",
      name: "year",
      type: "string",
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: 'Links',
      name: 'links',
      description: "Optionally add either internal or external links for this exhibition",
      group: 'info',
      type: 'array',
      of: [
        {
          type: "object",
          name: "link",
          fields: [
            {
              title: 'Internal Link?',
              name: 'internal',
              description: 'Toggle this on if you want to link internally within the website, rather than link to an external source',
              type: 'boolean',
              validation: Rule => Rule.required()
            },
            {
              title: 'Link Text',
              name: 'linkText',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'internalLink',
              type: 'reference',
              hidden: ({ parent, value }) => !value && (parent?.internal == false),
              title: 'Internal Link',
              to: [
                {type: 'work'},
                {type: 'words'},
                {type: 'exhibitions'},
              ]
            },
            {
              title: 'External Link',
              hidden: ({ parent, value }) => !value && (parent?.internal == true),
              name: 'externalLink',
              type: 'url',
            }
          ],
          preview: {
            select: {
              title: 'linkText',
              internal: 'internal'
            },
            prepare ({ title, internal }) {
              return {
                title: title,
                subtitle: internal ? 'Internal Link' : 'External Link', 
                media: internal ? FiLink : FiExternalLink
              }
            }
          }
        }
      ]
    },
    {
      title: "Teaser Image",
      description: "The teaser image that will display on the exhibition index page, ideally landscape ratio",
      name: "teaserImage",
      type: "defaultImage",
      group: "images"
    },
    {
      title: 'Hero Image(s)',
      name: 'heroImages',
      type: 'array',
      group: "images",
      description: "The hero image(s) that will display at the top of this exhibition page, ideally landscape ratio, if multiple are added will turn into a carousel",
      of: [
        {type: 'defaultImage', title: 'Image'},
      ],
      options: {
        layout: 'grid',
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Content Blocks",
      description: 'The modular content blocks for this exhibition page',
      name: "contentBlocks",
      type: 'array',
      of: [
        {type: 'textBlock', title: 'Text'},
        {type: 'headingBlock', title: 'Text Heading'},
        {type: 'imageBlock', title: 'Single Image'},
        {type: 'imageGridBlock', title: 'Image Grid'},
        {type: 'blockquoteBlock', title: 'Quote'},
        {type: 'embedBlock', title: 'Embed (Vimeo etc.)'},
        {type: 'codeBlock', title: 'Code'},
        {type: 'listBlock', title: 'List'}
      ],
      group: "content"
    },
    {
      name: 'slug',
      type: 'slug',
      group: 'info',
      title: 'Slug',
      description: 'This is required for page routing and can be auto-generated by pressing "generate"',
      options: {
        source: (doc) => {
          let titleSlug = ''
          let campaignSlug = ''
          if (doc.title) {
            titleSlug = `${doc.title}`
          } else {
            titleSlug = ''
          }

          if (doc.campaignTitle) {
            campaignSlug = `-${doc.campaignTitle}`
          } else {
            campaignSlug = ''
          }

          return `${titleSlug}${campaignSlug}`;
        },
        maxLength: 96,
        slugify: (input) => slugify(`${input}`)
      },
      validation: Rule => Rule.required()
    },
    // SEO
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      options: {
        collapsible: false
      },
      group: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title',
      gallery: 'gallery',
      location: 'location',
      teaserImage: 'teaserImage'
    },
    prepare ({ title, teaserImage, gallery, location }) {
      return {
        title: title,
        subtitle: `${gallery}, ${location}`,
        media: teaserImage
      }
    }
  }
}