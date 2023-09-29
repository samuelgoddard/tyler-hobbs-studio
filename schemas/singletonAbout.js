export default {
  title: 'About',
  name: 'about',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      name: 'note',
      type: 'note',
      options: {
        headline: 'Dev Note',
        message: 'Active Development - API May Change, message Sam if anything looks odd!'
      }
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: "Content Blocks",
      description: 'The modular content blocks for this page',
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
      ]
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}