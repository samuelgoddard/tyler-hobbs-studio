import { FiFolderPlus } from 'react-icons/fi'

export default {
  title: 'Jump Nav Section Block',
  type: 'object',
  name: 'jumpNavSectionBlock',
  icon: FiFolderPlus,
  fields: [
    {
      title: 'Title',
      name: 'title',
      description: "The title of this 'section' whcih will appear in the auto-generated header nav",
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection

      return {
        title: '** - Jump Nav Section Block - **',
        subtitle: title
      }
    }
  }
}