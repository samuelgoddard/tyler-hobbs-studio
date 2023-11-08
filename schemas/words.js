import { FiInfo, FiLink, FiLayers, FiImage, FiExternalLink } from 'react-icons/fi'
import slugify from '../utils/slugify'

export default {
  title: "Words",
  name: 'words',
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
      description: "The name of this entry",
      name: "title",
      type: "string",
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: "Published Date",
      name: "publishedDate",
      type: "date",
      options: {
        dateFormat: 'DD MMMM YYYY',
        calendarTodayLabel: 'Today'
      },
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: "Last Updated Date",
      name: "lastUpdatedDate",
      description: "If set, will show a second date for when this articles was last updated",
      type: "date",
      options: {
        dateFormat: 'DD MMMM YYYY',
        calendarTodayLabel: 'Today'
      },
      group: "info"
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'authors'}],
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'wordsCategories'}],
      group: "info",
      validation: Rule => Rule.required()
    },
    {
      title: 'Links',
      name: 'links',
      description: "Optionally add either internal or external links for this article which will appear in the sideba",
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
      title: "Teaser Image",
      description: "The teaser image that will display on the words index page on hover, ideally square aspect ratio",
      name: "teaserImage",
      type: "defaultImage",
      group: "images"
    },
    {
      title: "Hero Image",
      description: "The hero image that will display at the top of this article, ideally landscape ratio",
      name: "heroImage",
      type: "defaultImage",
      group: "images"
    },
    {
      title: "Content Blocks",
      description: 'The modular content blocks for this article',
      name: "contentBlocks",
      type: 'array',
      of: [
        {type: 'textBlock', title: 'Text'},
        {type: 'headingBlock', title: 'Text Heading'},
        {type: 'imageBlock', title: 'Full Width Image'},
        {type: 'imageGridBlock', title: 'Image Grid'},
        {type: 'blockquoteBlock', title: 'Quote'},
        {type: 'embedBlock', title: 'Embed (Vimeo etc.)'},
        {type: 'codeBlock', title: 'Code'},
        {type: 'listBlock', title: 'List'}
      ],
      group: "content"
    },
    {
      title: 'Related Articles',
      name: 'relatedArticles',
      description: "Optionally manually relate articles to this article, if left blank will show a natural ascending list of 'next' articles",
      group: 'info',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'words'}
          ]
        }
      ]
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
      teaserImage: 'teaserImage',
      author: 'author.name'
    },
    prepare ({ title, teaserImage, author }) {
      return {
        title: title,
        subtitle: `By: ${author}`,
        media: teaserImage
      }
    }
  }
}