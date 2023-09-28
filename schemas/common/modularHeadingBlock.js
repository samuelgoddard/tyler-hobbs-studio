import { FiEdit3 } from 'react-icons/fi'

export default {
  title: 'Text Heading Block',
  type: 'object',
  name: 'headingBlock',
  icon: FiEdit3,
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
        title: 'Text Heading Block',
        subtitle: text
      }
    }
  }
}