import { FiList } from 'react-icons/fi'

export default {
  title: 'List Block',
  type: 'object',
  name: 'listBlock',
  icon: FiList,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      description: 'Optionally add heading text to this list block',
    },
    {
      title: 'List Items',
      type: 'array',
      name: 'listItems',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          icon: FiList,
          fields: [
            {
              title: 'Text',
              name: 'text',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              title: 'Text (Rich)',
              name: 'textRich',
              type: 'contentSimple',
            },
            {
              title: 'Year',
              name: 'year',
              type: 'string',
            },
            {
              title: 'Link?',
              name: 'link',
              description: 'Toggle this on if you want this list item to be a link',
              type: 'boolean',
              defaultValue: true
            },
            {
              title: 'Internal Link?',
              name: 'internal',
              description: 'Toggle this on if you want to link internally within the website, rather than link to an external source',
              type: 'boolean',
              hidden: ({ parent, value }) => !value && (parent?.link == false),
            },
            {
              name: 'internalLink',
              type: 'reference',
              hidden: ({ parent, value }) => !value && (parent?.link == false || parent?.internal == false),
              title: 'Internal Link',
              to: [
                {type: 'work'},
                {type: 'workIndex'},
                {type: 'words'},
                {type: 'exhibitions'},
                {type: 'pages'}
              ]
            },
            {
              title: 'External Link',
              hidden: ({ parent, value }) => !value && (parent?.link == false || parent?.internal == true),
              name: 'externalLink',
              type: 'url',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              })
            }
          ],
        }
      ],
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      listItems: 'listItems'
    },
    prepare(selection) {
      const {listItems, heading} = selection

      return {
        title: 'List Block',
        subtitle: `${heading ? `${heading} - ` : '' }${listItems.length} Items`
      }
    }
  }
}