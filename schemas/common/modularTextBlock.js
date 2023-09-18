import { FiEdit3 } from 'react-icons/fi'

export default {
  title: 'Text Block',
  type: 'object',
  name: 'textBlock',
  icon: FiEdit3,
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'contentRich',
      validation: Rule => Rule.required()
    },
    {
      title: 'Annotation Notes (Optional)',
      name: 'annotationNotes',
      type: 'array',
      of: [
        {
          type: 'text', title: 'Text', rows: 3
        },
      ],
    }
  ],
  preview: {
    select: {
      text: 'text'
    },
    prepare(selection) {
      const {text} = selection
      return {
        title: 'Text Block',
        subtitle: `${text[0].children[0].text}`
      }
    }
  }
}