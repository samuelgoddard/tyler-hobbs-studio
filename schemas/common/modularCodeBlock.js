import { FiCode } from 'react-icons/fi'

export default {
  title: 'Code Block',
  type: 'object',
  name: 'codeBlock',
  icon: FiCode,
  fields: [
    {
      title: 'Code',
      name: 'code',
      type: 'code',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Code Block',
      }
    }
  }
}