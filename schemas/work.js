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
              layout1: 'layout1',
              layout2: 'layout2',
              layout3: 'layout3',
              layout4: 'layout4',
              layout5: 'layout5',
              images: 'images'
            },
            prepare ({ images, year, layout1, layout2, layout3, layout4, layout5 }) {
              let currentLayout = 'No Layout'
              images?.length == 1 && (currentLayout = layout1)
              images?.length == 2 && (currentLayout = layout2)
              images?.length == 3 && (currentLayout = layout3)
              images?.length == 4 && (currentLayout = layout4)
              images?.length == 5 && (currentLayout = layout5)
              return {
                title: `Slide`,
                subtitle: `${images?.length} Images - Layout: ${currentLayout}`,
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
              title: '1 Image Layout',
              name: 'layout1',
              type: 'string',
              description: 'What layout should this slide use (options dictated by the amount of images above)',
              hidden: ({ parent }) => parent?.images?.length != 1,
              initialValue: '4',
              options: {
                list: [
                  { title: "4 Col", value: "4" },
                  { title: "12 Col", value: "12" },
                ],
              }
            },
            {
              title: '2 Image Layout',
              name: 'layout2',
              type: 'string',
              description: 'What layout should this slide use (options dictated by the amount of images above)',
              hidden: ({ parent }) => parent?.images?.length != 2,
              initialValue: '4x2',
              options: {
                list: [
                  { title: "4 Col x 2", value: "4x2" },
                  { title: "6 Col + 3 Col", value: "6x3" },
                  { title: "3 Col + 6 Col", value: "3x6" },
                ],
              }
            },
            {
              title: '3 Image Layout',
              name: 'layout3',
              type: 'string',
              description: 'What layout should this slide use (options dictated by the amount of images above)',
              hidden: ({ parent }) => parent?.images?.length != 3,
              initialValue: '4x3',
              options: {
                list: [
                  { title: "4 Col x 3", value: "4x3" }
                ],
              }
            },
            {
              title: '4 Image Layout',
              name: 'layout4',
              type: 'string',
              description: 'What layout should this slide use (options dictated by the amount of images above)',
              hidden: ({ parent }) => parent?.images?.length != 4,
              initialValue: '4x2',
              options: {
                list: [
                  { title: "4 Col + 2 Col x3", value: "4x2" },
                  { title: "2 Col x3 + 4 Col", value: "2x4" }
                ],
              }
            },
            {
              title: '5 Image Layout',
              name: 'layout5',
              type: 'string',
              description: 'What layout should this slide use (options dictated by the amount of images above)',
              hidden: ({ parent }) => parent?.images?.length != 5,
              initialValue: '2x5',
              options: {
                list: [
                  { title: "2 Col x 5", value: "2x5" },
                  { title: "2 Col x 5 Split Left", value: "2x5Left" },
                  { title: "2 Col x 5 Split Right", value: "2x5Right" },
                ],
              }
            },
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