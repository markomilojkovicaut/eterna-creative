export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'quote', type: 'text', title: 'Quote' },
    { name: 'authorName', type: 'string', title: 'Author Name' },
    { name: 'authorRole', type: 'string', title: 'Author Role' },
    { name: 'authorCompany', type: 'string', title: 'Author Company' },
    { name: 'authorPhoto', type: 'image', title: 'Author Photo', options: { hotspot: true } },
    { name: 'companyLogo', type: 'image', title: 'Company Logo' },
    { name: 'featured', type: 'boolean', title: 'Featured', initialValue: false },
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'authorCompany', media: 'authorPhoto' },
  },
}
