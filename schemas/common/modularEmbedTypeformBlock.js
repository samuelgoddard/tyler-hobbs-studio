import { FiCast } from 'react-icons/fi'

export default {
  title: 'Embed Block (Typeform)',
  type: 'object',
  name: 'embedTypeformBlock',
  icon: FiCast,
  fields: [
    {
      title: 'Typeform ID',
      name: 'typeformId',
      type: 'string',
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
        title: 'Embed Block (Typeform)',
      }
    }
  }
}