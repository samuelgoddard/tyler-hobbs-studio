import { FiUser } from "react-icons/fi"

export default {
  title: 'Authors',
  name: 'authors',
  type: 'document',
  icon: FiUser,
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      name: 'name'
    },
    prepare ({ name }) {
      return {
        title: name
      }
    }
  }
}