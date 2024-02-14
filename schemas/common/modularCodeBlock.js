import 'ace-builds/src-noconflict/mode-clojure'
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
          {title: 'Java', value: 'java'},
          {title: 'Clojure', value: 'clojure', mode: 'clojure'},
          {title: 'Processing', value: 'processing', mode: 'java'},
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