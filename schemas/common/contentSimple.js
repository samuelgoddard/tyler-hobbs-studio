import { FiExternalLink, FiLink } from "react-icons/fi";

export default {
  name: 'contentSimple',
  title: 'Content Simple',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
      ],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            icon: FiExternalLink,
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            icon: FiLink,
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  {type: 'work'},
                  {type: 'words'},
                  {type: 'exhibitions'},
                  {type: 'pages'}
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}