export const caseStudiesQuery = `*[_type == "caseStudy"] | order(publishedAt desc) {
  _id, title, slug, client, coverImage, tags, summary, publishedAt, featured
}`

export const featuredCaseStudiesQuery = `*[_type == "caseStudy" && featured == true] | order(publishedAt desc)[0...3] {
  _id, title, slug, client, coverImage, tags, summary, publishedAt, featured
}`

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc)[0...3] {
  _id, title, slug, coverImage, category, excerpt, publishedAt, readTime
}`

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id, name, role, photo, bio, linkedin
}`

export const testimonialsQuery = `*[_type == "testimonial" && featured == true] {
  _id, quote, authorName, authorRole, authorCompany, authorPhoto, companyLogo
}`
