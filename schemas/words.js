import { FiInfo, FiLink, FiLayers, FiImage } from 'react-icons/fi'
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
        {type: 'imageBlock', title: 'Single Image'},
        {type: 'imageGridBlock', title: 'Image Grid'},
        {type: 'blockquoteBlock', title: 'Quote'},
        {type: 'embedBlock', title: 'Embed (Vimeo etc.)'}
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