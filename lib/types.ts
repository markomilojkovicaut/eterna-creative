export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface CaseStudy {
  _id: string
  title: string
  slug: SanitySlug
  client: string
  coverImage?: SanityImage
  tags: string[]
  summary: string
  publishedAt: string
  featured: boolean
}

export interface BlogPost {
  _id: string
  title: string
  slug: SanitySlug
  coverImage?: SanityImage
  category: string
  excerpt: string
  body?: unknown[]
  publishedAt: string
  readTime: number
}

export interface TeamMember {
  _id: string
  name: string
  role: string
  photo?: SanityImage
  bio: string
  linkedin?: string
  order: number
}

export interface Testimonial {
  _id: string
  quote: string
  authorName: string
  authorRole: string
  authorCompany: string
  authorPhoto?: SanityImage
  companyLogo?: SanityImage
  featured: boolean
}
