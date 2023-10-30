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
      options: {
        languageAlternatives: [
          {title: 'Clojure', value: 'java'},
          {title: 'Processing', value: 'sh'},
          {title: 'Psuedo Code', value: 'csharp'},
        ],
      },
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