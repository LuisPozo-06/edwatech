import { SITE_CONFIG } from '@/lib/constants'

export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    logo: `${SITE_CONFIG.url}/logo-edwartech.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.district,
      addressRegion: SITE_CONFIG.address.city,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.coordinates.lat,
      longitude: SITE_CONFIG.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '21:00',
      },
    ],
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.tiktok,
      SITE_CONFIG.social.youtube,
    ],
    priceRange: 'S/',
    areaServed: 'Lurín, Lima, Perú',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Reparación de equipos Apple',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de iPhone',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de MacBook',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de iPad',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de Apple Watch',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
