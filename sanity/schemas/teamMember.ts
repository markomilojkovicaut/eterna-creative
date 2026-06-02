export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'role', type: 'string', title: 'Role' },
    { name: 'photo', type: 'image', title: 'Photo', options: { hotspot: true } },
    { name: 'bio', type: 'text', title: 'Bio' },
    { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
    { name: 'order', type: 'number', title: 'Display Order' },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
}
