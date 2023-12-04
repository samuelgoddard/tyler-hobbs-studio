import { FiEdit3, FiPenTool } from 'react-icons/fi'

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
    // {
    //   title: 'Annotation Notes (Optional)',
    //   name: 'annotationNotes',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'text', title: 'Text', rows: 3
    //     },
    //   ],
    // },
    {
      title: 'Annotation Notes (Optional)',
      name: 'annotationNotesRich',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'content',
          icon: FiPenTool,
          fields: [
            { type: 'string', title: 'Number', name: 'number', description: 'The number of this note, eg: "2"' },
            { type: 'contentSimple', title: 'Text', name: 'content' }
          ],
          preview: {
            select: {
              content: 'content',
              number: 'number'
            },
            prepare(selection) {
              const {content, number } = selection
              return {
                title: `Text Block${number ? ` (${number})` : ''}`,
                subtitle: `${content[0].children[0].text}`
              }
            }
          }
        }
      ],
    }
  ],
  preview: {
    select: {
      text: 'text',
      annotationNotes: 'annotationNotes'
    },
    prepare(selection) {
      const {text} = selection
      return {
        title: `Text Block`,
        subtitle: `${text[0].children[0].text}`
      }
    }
  }
}