import { FiExternalLink, FiLink } from "react-icons/fi";

export default {
  title: "Image",
  type: 'image',
  options: {
    hotspot: true,
    metadata: ["lqip"],
  },
  name: "defaultImage",
  fields: [
    {
      title: 'Alternative Text (Optional)',
      description: 'Used by screen readers to describe the image',
      name: 'alt',
      type: 'string'
    },
    // {
    //   title: 'Vimeo Video Override URL',
    //   description: 'Optionally override this image with a looping video from Vimeo',
    //   name: 'vimeoVideoOverrideUrl',
    //   type: 'url'
    // },
    {
      title: 'Caption (Optional)',
      description: 'Optional supporting caption',
      name: 'caption',
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
                    ]
                  }
                ]
              }
            ]
          },
        }
      ]
    }
  ]
  // preview: {
  //   select: {
  //     asset: 'asset',
  //     caption: 'caption',
  //     vimeoVideoOverrideUrl: 'vimeoVideoOverrideUrl'
  //   },
  //   prepare({ asset }) {
  //     return {
  //       title: 'Image',
  //       subtitle: 'Standard Image',
  //       media: asset
  //     }
  //   }
  // },
}