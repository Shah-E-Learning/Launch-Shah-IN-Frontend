# 🔍 SEO Implementation Guide

This guide outlines how we handle Search Engine Optimization (SEO) in our Next.js App Router project. We use a combination of Next.js built-in Metadata API and custom helper functions to ensure our site is fully optimized for search engines and social media.

---

## 1. Page Metadata (`metadata`)

For **Server Components** (e.g., `page.tsx`, `layout.tsx`), we use the Next.js `Metadata` API. To streamline this, we have a helper function `constructMetadata` in `src/lib/seo.ts`.

### Usage in `page.tsx`

In any server-side page, export the `metadata` object using our helper:

```tsx
import { constructMetadata } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = constructMetadata({
  title: 'About Us | Project Name',
  description: 'Learn more about our premium services and offerings.',
  image: '/images/og/about-page.png', // Optional custom OG image
  keywords: 'about us, services, team', // Optional custom keywords
  route: '/about' // Canonical route
})

export default function AboutPage() {
  return <main>...</main>
}
```

### How `constructMetadata` works

It automatically sets:

- **Title**: Formats it (e.g., "Page Title | Site Name").
- **Meta Description**: For search results.
- **Open Graph (OG)**: For Facebook, LinkedIn, etc.
- **Twitter Card**: For Twitter previews.
- **Canonical URL**: Ensures the correct version of the page is indexed.
- **Robots**: Handles `noIndex` if specified.

---

## 2. Structured Data (JSON-LD)

We use **JSON-LD** (JavaScript Object Notation for Linked Data) to help search engines understand our content better (e.g., Local Business details, FAQs).

We use the `generateJSONLd` function from `src/lib/seo.ts`.

### Usage Example

You can inject this script in your `layout.tsx` or specific `page.tsx`:

```tsx
import { generateJSONLd } from '@/lib/seo'

export default function ContactPage() {
  const jsonLd = generateJSONLd(
    {
      business_name: 'My Business Name',
      contact_no: '+91 1234567890',
      address_line_1: '123 Business Street',
      address_line_2: 'Business Hub',
      state: 'State',
      country_code: 'IN',
      zip_code: '000000',
      facebook_url: 'https://facebook.com/...',
      instagram_url: 'https://instagram.com/...'
    },
    'city-name', // City
    'business-category', // Category
    'business-slug' // Business Slug
  )

  return (
    <section>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Page Content */}
    </section>
  )
}
```

---

## 3. Sitemaps (`sitemap.ts`)

We generate a `sitemap.xml` automatically using a `sitemap.ts` file in `src/app`. This tells search engines which pages to crawl.

**File:** `src/app/sitemap.ts`

```ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITEMAP_URL || 'https://example.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    }
    // Add dynamic routes here if needed (e.g., fetch products and map them)
  ]
}
```

---

## 4. Robots (`robots.ts`)

We control crawler access using a `robots.ts` file in `src/app`. This generates the `robots.txt` file.

**File:** `src/app/robots.ts`

```ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITEMAP_URL || 'https://example.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'] // Disallow sensitive paths
    },
    sitemap: `${baseUrl}/sitemap.xml`
  }
}
```

---

## 💡 Best Practices & Recommendations

1. **Dynamic Metadata**: For dynamic pages (e.g., `/shop/[productId]`), always fetch the product data inside `generateMetadata` to set the specific title and image for that product.

   ```tsx
   export async function generateMetadata({ params }): Promise<Metadata> {
     const product = await getProduct(params.productId)
     return constructMetadata({ title: product.name, image: product.image })
   }
   ```

2. **Canonical URLs**: Always ensure the `route` or `url` in metadata points to the canonical version of the page to avoid duplicate content issues.

3. **Image Optimization**: Ensure OG images are high quality (1200x630px recommended) and compressed.

4. **Testing**:
   - Use [Google Rich Results Test](https://search.google.com/test/rich-results) to validate JSON-LD.
   - Use [Opengraph.xyz](https://www.opengraph.xyz/) to preview how your links look on social media.
