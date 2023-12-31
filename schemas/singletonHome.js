export default {
  title: 'Home',
  name: 'home',
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
      title: 'Randomized Images Bucket',
      name: 'randomisedImagesBucket',
      type: 'array',
      of: [
        {type: 'defaultImage', title: 'Image'},
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      title: 'Randomized Headshots Bucket',
      name: 'randomisedHeadshotsBucket',
      type: 'array',
      of: [
        {type: 'defaultImage', title: 'Image'},
      ],
      options: {
        layout: 'grid',
      },
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