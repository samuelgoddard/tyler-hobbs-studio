export default {
  title: 'About',
  name: 'about',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    // {
    //   title: "Content Sections",
    //   description: 'The modular content sections for this page, will auto-generate the menu at the top of the pange',
    //   name: "contentSections",
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'object',
    //       title: 'Item',
    //       name: "item",
    //       fields: [
    //         {
    //           title: "Title",
    //           name: "title",
    //           type: "string"
    //         },
    //         {
    //           title: "Content Blocks",
    //           description: 'The modular content blocks for this page',
    //           name: "contentBlocks",
    //           type: 'array',
    //           of: [
    //             {type: 'jumpNavSectionBlock', title: 'Jump Nav Section Block'},
    //             {type: 'textBlock', title: 'Text'},
    //             {type: 'headingBlock', title: 'Text Heading'},
    //             {type: 'imageBlock', title: 'Full Width Image'},
    //             {type: 'imageGridBlock', title: 'Image Grid'},
    //             {type: 'blockquoteBlock', title: 'Quote'},
    //             {type: 'embedBlock', title: 'Embed (Vimeo etc.)'},
    //             {type: 'codeBlock', title: 'Code'},
    //             {type: 'listBlock', title: 'List'}
    //           ]
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           title: 'title',
    //         },
    //         prepare ({ title }) {
    //           return {
    //             title: title,
    //           }
    //         }
    //       },
    //     },
    //   ]
    // },
    {
      title: "Content Blocks",
      description: 'The modular content blocks for this page',
      name: "contentBlocks",
      type: 'array',
      of: [
        {type: 'jumpNavSectionBlock', title: 'Jump Nav Section Block'},
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