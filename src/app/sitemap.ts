import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drxhomecare.com'

  const services = [
    'icu-at-home',
    'nursing-care',
    'caretaker',
    'elder-care',
    'doctor-visit',
    'lab-test',
    'medical-equipment',
    'ambulance',
    'physiotherapy',
    'injection-services',
    'iv-infusion',
    'wound-dressing',
    'bedridden-care',
  ]

  const serviceUrls: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/equipments`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/card`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...serviceUrls,
  ]
}
