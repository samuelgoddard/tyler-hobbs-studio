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
      title: 'Width',
      name: 'width',
      type: 'string',
      description: 'How much width should this grid fill? (Will default to Six)',
      initialValue: "six",
      options: {
        list: [
          { title: "Ten Cols", value: "ten" },
          { title: "Six Cols", value: "six" },
        ],
      }
    },
    {
      title: 'Columns',
      name: 'columns',
      type: 'string',
      description: 'How many columns should this grid have? (Will default to 3)',
      initialValue: "three",
      options: {
        list: [
          { title: "One", value: "one" },
          { title: "Two", value: "two" },
          { title: "Three", value: "three" },
          { title: "Four", value: "four" },
          { title: "Five", value: "five" },
        ],
      }
    },
  ],
  preview: {
    select: {
      images: 'images',
      width: 'width',
      columns: 'columns'
    },
    prepare(selection) {
      const { images, columns, width } = selection
      return {
        title: `Images Grid Block (${images.length})`,
        subtitle: `${width ? `Width: ${width} - ` : ``}Columns: ${columns}`,
        media: images[0]
      }
    }
  }
}