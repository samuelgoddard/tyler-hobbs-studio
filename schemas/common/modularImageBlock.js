import { FiImage } from 'react-icons/fi'

export default {
  title: 'Full Width Single Image Block',
  type: 'object',
  name: 'imageBlock',
  icon: FiImage,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      image: 'image'
    },
    prepare(selection) {
      const { image } = selection
      return {
        title: 'Full Width Single Image Block',
        media: image
      }
    }
  }
}