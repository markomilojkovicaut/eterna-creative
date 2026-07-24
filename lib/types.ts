export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  category: string;
  coverImage: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  description: string;
  client: string;
  tags: string[];
  coverImage: string;
  liveUrl: string;
  results: string;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  difficulty: string;
  readTime: number;
  category: string;
}

export interface Template {
  slug: string;
  title: string;
  description: string;
  price: number;
  /** Display currency; defaults to EUR for paid templates. */
  currency?: "EUR" | "USD";
  tags: string[];
  previewImage: string;
  /** Legacy download / fallback path. */
  downloadUrl: string;
  isPaid: boolean;
  /** Optional live demo / product URL for paid app templates. */
  demoUrl?: string;
  /** Primary purchase / order destination (Bubble marketplace, checkout, book). */
  orderUrl?: string;
  /** CTA label — defaults to "Order". */
  orderLabel?: string;
  /** Platform badge e.g. Bubble. */
  platform?: string;
  /** Short shop subtitle under title. */
  subtitle?: string;
  /** Feature bullets for product page. */
  features?: { title: string; body: string }[];
  /** Soft note (e.g. extended pack coming soon). */
  note?: string;
  /** Optional compare-at or upcoming price line. */
  notePrice?: string;
}

export interface Job {
  slug: string;
  title: string;
  type: "full-time" | "contract" | "remote";
  description: string;
  requirements: string[];
  postedAt: string;
}
