export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'client', type: 'string', title: 'Client Name' },
    { name: 'coverImage', type: 'image', title: 'Cover Image', options: { hotspot: true } },
    { name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] },
    { name: 'summary', type: 'text', title: 'Summary' },
    { name: 'publishedAt', type: 'datetime', title: 'Published At' },
    { name: 'featured', type: 'boolean', title: 'Featured', initialValue: false },
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'coverImage' },
  },
}
