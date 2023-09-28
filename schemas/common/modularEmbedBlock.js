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