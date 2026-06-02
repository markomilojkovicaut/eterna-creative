export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'coverImage', type: 'image', title: 'Cover Image', options: { hotspot: true } },
    { name: 'category', type: 'string', title: 'Category' },
    { name: 'excerpt', type: 'text', title: 'Excerpt' },
    { name: 'body', type: 'array', title: 'Body', of: [{ type: 'block' }] },
    { name: 'publishedAt', type: 'datetime', title: 'Published At' },
    { name: 'readTime', type: 'number', title: 'Read Time (minutes)' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
}
