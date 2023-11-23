import { FiImage, FiInfo, FiLink, FiExternalLink } from 'react-icons/fi'
import slugify from '../utils/slugify'

export default {
  title: "Work",
  name: 'work',
  type: "document",
  groups: [
    {
      title: 'Info',
      name: 'info',
      default: true,
      icon: FiInfo
    },
    {
      title: 'Teaser',
      name: 'teaser',
      icon: FiImage
    },
    {
      title: 'Gallery Slides',
      name: 'gallery',
      icon: FiImage
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
      description: "The name of this project",
      name: "title",
      type: "string",
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: "Year",
      name: "year",
      type: "string",
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: "Dims (w x h)",
      description: "The dims for this project, eg: '48 x 60” (121.9 X 152.4 cm)'",
      name: "dims",
      type: "string",
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: "Media",
      description: "The media for this project, eg: 'Paint on panel with matching non-fungible token'",
      name: "media",
      type: "string",
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: "Iterations",
      description: "Amount of iterations on this work piece",
      name: "iterations",
      type: "string",
      group: "info"
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'workCategories'}],
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: "Series?",
      description: "Is this work piece part of a series?",
      name: "series",
      type: "boolean",
      group: "info"
    },
    {
      title: 'Links',
      name: 'links',
      description: "Optionally add either internal or external links for this works piece",
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
                {type: 'pages'}
              ]
            },
            {
              title: 'External Link',
              hidden: ({ parent, value }) => !value && (parent?.internal == true),
              name: 'externalLink',
              type: 'url',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              })
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
      title: "Text",
      name: "text",
      type: "contentSimple",
      group: "info"
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
    // Gallery
    {
      title: "Gallery Slides",
      name: "gallerySlides",
      type: "array",
      group: "gallery",
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          icon: FiImage,
          preview: {
            select: {
              teaserImage: 'teaserImage',
              containerWidth: 'containerWidth',
              images: 'images'
            },
            prepare ({ images, containerWidth }) {
              return {
                title: `Slide`,
                subtitle: `${images?.length} Images - Layout: ${containerWidth && `${containerWidth} Columns`}`,
                media: images && images[0]
              }
            }
          },
          fields: [
            {
              title: 'Image(s)',
              name: 'images',
              type: 'array',
              description: "The image(s) for this slide, the amount will dictate the configuration options below",
              of: [
                {
                  type: 'defaultImage', title: 'Image',
                },
              ],
              options: {
                layout: 'grid',
              },
              validation: Rule => Rule.required().min(1).max(5)
            },
            {
              title: 'Container Width',
              name: 'containerWidth',
              type: 'string',
              description: 'How many columns should this slide fill',
              initialValue: '6',
              options: {
                list: [
                  { title: "4", value: "4" },
                  { title: "6", value: "6" },
                  { title: "8", value: "8" },
                  { title: "10", value: "10" },
                  { title: "12", value: "12" },
                ],
              }
            },
            {
              title: 'Alignment',
              name: 'alignment',
              type: 'string',
              description: 'How should the images align?',
              initialValue: 'center',
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Center", value: "center" },
                  { title: "Right", value: "right" }
                ],
              }
            }
          ]
        }
      ],
    },
    // Teaser
    {
      title: "Teaser Image",
      description: "The teaser image that will display on the works index page",
      name: "teaserImage",
      type: "defaultImage",
      group: "teaser"
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
      teaserImage: 'teaserImage',
      year: 'year',
      cat: 'category.title'
    },
    prepare ({ title, teaserImage, year, cat}) {
      return {
        title: title,
        subtitle: `${year}${cat ? ` - ${cat}` : ''}`,
        media: teaserImage
      }
    }
  }
}