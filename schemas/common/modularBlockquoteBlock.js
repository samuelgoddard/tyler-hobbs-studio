import { FiMessageCircle } from 'react-icons/fi'

export default {
  title: 'Quote Block',
  type: 'object',
  name: 'blockquoteBlock',
  icon: FiMessageCircle,
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      text: 'text'
    },
    prepare(selection) {
      const {text} = selection
      return {
        title: 'Quote Block',
        subtitle: `${text}`
      }
    }
  }
}