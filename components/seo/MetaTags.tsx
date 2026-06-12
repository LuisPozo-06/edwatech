import { SITE_CONFIG, META_DEFAULTS } from '@/lib/constants'

interface MetaTagsProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  path?: string
}

export function MetaTags({ title, description, keywords, ogImage, path = '' }: MetaTagsProps) {
  const fullTitle = title || META_DEFAULTS.title
  const fullDescription = description || META_DEFAULTS.description
  const fullKeywords = keywords || META_DEFAULTS.keywords
  const image = ogImage || META_DEFAULTS.ogImage
  const url = `${SITE_CONFIG.url}${path}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1A1A1A" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="es_PE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
    </>
  )
}
