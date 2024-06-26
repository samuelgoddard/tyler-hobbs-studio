import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

import {
  FiHome,
  FiCamera,
  FiEdit,
  FiUser,
  FiPackage,
  FiSmile,
  FiBookmark,
  FiMail,
  FiLayers,
  FiBookOpen,
  FiList,
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      // S.listItem().title('Works').child(S.documentTypeList('work').title('Works')).icon(FiCamera),
      S.listItem()
        .title('Works')
        .child(
          S.list()
            .title('Works')
            .items([
              S.listItem().title('Index').child(S.editor().id('workIndex').schemaType('workIndex').documentId('workIndex').views(getPreview('workIndex'))).icon(FiHome),

              S.divider(),

              S.listItem().title('Works').child(S.documentTypeList('work').title('Works')).icon(FiCamera),
              // S.divider(),
              // S.listItem().title('Series').child(S.documentTypeList('workSeries').title('Series')).icon(FiLayers),
              S.divider(),
              S.listItem().title('Categories').child(S.documentTypeList('workCategories').title('Categories')).icon(FiBookmark),
              S.divider(),
              orderableDocumentListDeskItem({
                type: 'work',
                title: 'Digital Work (Ordering)',
                icon: FiList,
                // Required if using multiple lists of the same 'type'
                id: 'digital-work-ordering',
                // See notes on adding a `filter` below
                filter: `category->slug.current == $slug`,
                params: {
                  slug: 'digital'
                },
              }),
              S.divider(),
              orderableDocumentListDeskItem({
                type: 'work',
                title: 'Physical Work (Ordering)',
                icon: FiList,
                // Required if using multiple lists of the same 'type'
                id: 'physical-work-ordering',
                // See notes on adding a `filter` below
                filter: `category->slug.current == $slug`,
                params: {
                  slug: 'physical'
                },
              }),
              S.divider(),
              orderableDocumentListDeskItem({
                type: 'work',
                title: 'Spacial Work (Ordering)',
                icon: FiList,
                // Required if using multiple lists of the same 'type'
                id: 'spacial-work-ordering',
                // See notes on adding a `filter` below
                filter: `category->slug.current == $slug`,
                params: {
                  slug: 'spatial'
                },
              }),
            ])),
      S.divider(),
      S.listItem().title('Exhibitions').child(S.documentTypeList('exhibitions').title('Exhibitions')).icon(FiPackage),
      S.divider(),
      S.listItem()
        .title('Words')
        .child(
          S.list()
            .title('Words')
            .items([
              S.listItem().title('Articles').child(S.documentTypeList('words').title('Articles')).icon(FiEdit),
              S.divider(),
              S.listItem().title('Authors').child(S.documentTypeList('authors').title('Authors')).icon(FiUser),
              S.divider(),
              S.listItem().title('Categories').child(S.documentTypeList('wordsCategories').title('Categories')).icon(FiBookmark)
            ])),
      S.divider(),            
      S.listItem().title('About').child(S.editor().id('about').schemaType('about').documentId('singleton-about').views(getPreview('about'))).icon(FiSmile),
      S.divider(),
      S.listItem().title('Page Builder').child(S.documentTypeList('pages').title('Page Builder')).icon(FiBookOpen),
      S.divider(),            
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact').views(getPreview('contact'))).icon(FiMail),
    ]);