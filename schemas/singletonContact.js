import { FiAtSign } from "react-icons/fi"

export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      name: 'note',
      type: 'note',
      options: {
        headline: 'Dev Note',
        message: 'Active Development - API May Change, message Sam if anything looks odd!'
      }
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Email Address',
      name: 'emailAddress',
      type: 'string'
    },
    {
      title: 'Socials',
      name: 'socials',
      type: 'array',
      of: [
        {
          type: "object",
          icon: FiAtSign,
          name: "social",
          fields: [
            {
              title: 'Platform',
              name: 'platform',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              title: 'URL',
              name: 'url',
              type: 'url',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}