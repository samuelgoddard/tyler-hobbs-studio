import { FiExternalLink, FiLink } from "react-icons/fi";

export default {
  name: 'contentRich',
  title: 'Content Rich',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
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
                title: 'URL',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
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
            validation: Rule => Rule.required(),
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