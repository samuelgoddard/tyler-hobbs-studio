import { FiBookmark } from "react-icons/fi"

export default {
  title: 'Work Index',
  name: 'workIndex',
  type: 'document',
  icon: FiBookmark,
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title: title
      }
    }
  }
}