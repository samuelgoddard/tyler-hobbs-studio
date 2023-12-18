import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonAbout from './singletonAbout'
import singletonContact from './singletonContact'

// Documents
import work from './work'
import words from './words'
import pages from './pages'
import exhibitions from './exhibitions'
import authors from './authors'
import workCategories from './workCategories'
// import workSeries from './workSeries'
import wordsCategories from './wordsCategories'
import workIndex from './workIndex'

// Modular
import seo from './common/seo'
import defaultImage from './common/defaultImage'
import contentRich from './common/contentRich'
import contentSimple from './common/contentSimple'
import modularTextBlock from './common/modularTextBlock'
import modularHeadingBlock from './common/modularHeadingBlock'
import modularImageBlock from './common/modularImageBlock'
import modularBlockquoteBlock from './common/modularBlockquoteBlock'
import modularImageGridBlock from './common/modularImageGridBlock'
import modularEmbedBlock from './common/modularEmbedBlock'
import modularCodeBlock from './common/modularCodeBlock'
import modularListBlock from './common/modularListBlock'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonAbout,
    singletonContact,
    work,
    pages,
    workCategories,
    // workSeries,
    wordsCategories,
    workIndex,
    words,
    exhibitions,
    authors,
    defaultImage,
    contentRich,
    contentSimple,
    modularTextBlock,
    modularHeadingBlock,
    modularImageBlock,
    modularBlockquoteBlock,
    modularImageGridBlock,
    modularEmbedBlock,
    modularCodeBlock,
    modularListBlock,
    seo
  ]),
})
