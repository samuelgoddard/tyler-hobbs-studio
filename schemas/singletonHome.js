export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
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