import { FiCast } from 'react-icons/fi'

export default {
  title: 'Embed Block (Vimeo etc)',
  type: 'object',
  name: 'embedBlock',
  icon: FiCast,
  fields: [
    {
      title: 'Embed Code',
      name: 'embedCode',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      title: 'Width',
      name: 'width',
      type: 'string',
      description: 'How many columns should this embed fill',
      initialValue: '10',
      options: {
        list: [
          { title: "6", value: "6" },
          { title: "10", value: "10" },
        ],
      },
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Embed Block',
      }
    }
  }
}