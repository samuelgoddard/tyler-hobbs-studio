import { FiImage } from 'react-icons/fi'

export default {
  title: 'Image Grid Block',
  type: 'object',
  name: 'imageGridBlock',
  icon: FiImage,
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {type: 'defaultImage', title: 'Image'},
      ],
      options: {
        layout: 'grid',
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Columns',
      name: 'columns',
      type: 'string',
      description: 'How many columns should this grid have?',
      initialValue: "three",
      options: {
        list: [
          { title: "Two", value: "two" },
          { title: "Three", value: "three" },
          { title: "Four", value: "four" },
        ],
      }
    },
  ],
  preview: {
    select: {
      images: 'images',
      columns: 'columns'
    },
    prepare(selection) {
      const { images, columns } = selection
      return {
        title: `Images Grid Block (${images.length})`,
        subtitle: `Columns: ${columns}`,
        media: images[0]
      }
    }
  }
}