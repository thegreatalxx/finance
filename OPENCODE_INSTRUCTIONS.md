# TheAlxLabs Finance Website - OpenCode Instructions

This document provides detailed instructions for OpenCode AI to build the TheAlxLabs Finance website using the provided content and media assets.

## 📁 Project Structure

```
TheAlxLabs_Finance_Learn/
├── README.md                          # Main overview
├── OPENCODE_INSTRUCTIONS.md          # This file
├── media/                             # All category images
│   ├── investing.webp
│   ├── saving.webp
│   ├── taxes.webp
│   ├── accounts.webp
│   ├── home_buying.webp
│   ├── retirement.webp
│   ├── crypto.webp
│   ├── options.png
│   └── borrowing.png
├── Investing/                         # 12 articles
├── Saving/                            # 12 articles
├── Taxes/                             # 12 articles
├── Accounts/                          # 11 articles
├── Home buying/                       # 10 articles
├── Retirement/                        # 10 articles
├── Crypto/                            # 2 articles
├── Options/                           # 12 articles
└── Borrowing/                         # 9 articles
```

## 🎯 Website Structure & Layout

### 1. Homepage / Landing Page
- **Hero Section**: Feature TheAlxLabs Finance branding
- **Category Grid**: Display all 9 categories with their respective images
- **Call-to-Action**: Encourage users to explore articles
- **Navigation**: Easy access to all categories

### 2. Category Pages
Each category should have:
- **Category Title** (e.g., "Investing")
- **Category Image** (from media folder)
- **Description**: Brief intro to the category
- **Article List**: All articles in that category as clickable links
- **Article Count**: Show number of articles in category

### 3. Article Pages
Each article should display:
- **Article Title** (as H1 heading)
- **Article Content** (full markdown text, properly formatted)
- **Navigation**: Previous/Next article links
- **Back to Category**: Link to parent category
- **Related Articles**: Show 3-5 related articles from same category

## 🖼️ Media Asset Usage

### Category Images
Use these images in the following locations:

| Category | Image File | Usage |
|----------|-----------|-------|
| Investing | `media/investing.webp` | Category hero, grid thumbnail |
| Saving | `media/saving.webp` | Category hero, grid thumbnail |
| Taxes | `media/taxes.webp` | Category hero, grid thumbnail |
| Accounts | `media/accounts.webp` | Category hero, grid thumbnail |
| Home buying | `media/home_buying.webp` | Category hero, grid thumbnail |
| Retirement | `media/retirement.webp` | Category hero, grid thumbnail |
| Crypto | `media/crypto.webp` | Category hero, grid thumbnail |
| Options | `media/options.png` | Category hero, grid thumbnail |
| Borrowing | `media/borrowing.png` | Category hero, grid thumbnail |

### Image Optimization
- Use responsive image sizes (mobile: 300px, tablet: 600px, desktop: 1200px)
- Implement lazy loading for performance
- Use proper alt text for accessibility
- Maintain aspect ratio: 16:9 for category images

## 📝 Content Formatting Guidelines

### Markdown to HTML Conversion
Convert markdown files to HTML with these rules:

1. **Headings**: 
   - `# Title` → `<h1>` (Article title)
   - `## Section` → `<h2>` (Main sections)
   - `### Subsection` → `<h3>` (Subsections)

2. **Text Formatting**:
   - `**bold**` → `<strong>`
   - `*italic*` → `<em>`
   - Regular text → `<p>`

3. **Lists**:
   - Unordered lists → `<ul><li>`
   - Ordered lists → `<ol><li>`

4. **Tables**:
   - Markdown tables → HTML `<table>` with proper `<thead>`, `<tbody>`
   - Add CSS classes for styling

5. **Links**:
   - `[text](url)` → `<a href="url">text</a>`
   - Internal links: Use relative paths for category/article navigation

6. **Blockquotes**:
   - `> quote` → `<blockquote>`

## 🎨 Design Recommendations

### Color Scheme
- **Primary**: Professional blue or green (finance-friendly)
- **Secondary**: Complementary neutral tone
- **Accent**: Highlight important information
- **Text**: Dark gray/black for readability
- **Background**: Clean white or light gray

### Typography
- **Headings**: Bold, larger font (24px-48px depending on level)
- **Body Text**: 16px-18px for readability
- **Line Height**: 1.6 for comfortable reading
- **Font Family**: Modern sans-serif (e.g., Inter, Segoe UI, Helvetica)

### Layout
- **Container Width**: Max 1200px for desktop
- **Responsive**: Mobile-first approach
- **Spacing**: Consistent padding/margins (8px grid system)
- **Card Design**: Use cards for article listings
- **Category Grid**: 3 columns on desktop, 2 on tablet, 1 on mobile

### Navigation
- **Top Navigation Bar**: Logo + Category Menu + Search
- **Breadcrumbs**: Show current location (Home > Category > Article)
- **Sidebar**: Optional category filter/navigation
- **Footer**: Links, copyright, contact info

## 🔍 Search & Discovery

### Features to Implement
1. **Search Bar**: Full-text search across all articles
2. **Category Filtering**: Filter articles by category
3. **Article Tags**: Tag articles by topic for cross-linking
4. **Related Articles**: Show similar content
5. **Most Popular**: Highlight frequently viewed articles

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1024px
- **Desktop**: 1025px+

### Mobile Optimization
- Hamburger menu for navigation
- Touch-friendly buttons (min 44px)
- Readable font sizes (min 16px)
- Single column layout
- Optimized images for mobile

## 🚀 Performance Optimization

1. **Image Optimization**:
   - Use WebP format with PNG fallback
   - Implement responsive images
   - Lazy load below-the-fold content

2. **Code Optimization**:
   - Minify CSS/JS
   - Remove unused styles
   - Implement code splitting

3. **Caching**:
   - Browser caching for static assets
   - Service worker for offline support

4. **SEO**:
   - Meta descriptions for each page
   - Open Graph tags for social sharing
   - Structured data (schema.org)
   - XML sitemap

## 📊 Article Metadata

Each article markdown file contains:
- **Title**: Article heading
- **Content**: Full article text with proper formatting
- **Category**: Parent category folder name
- **Related**: Articles in same category

### Suggested Metadata to Add
```
---
title: Article Title
category: Category Name
tags: [tag1, tag2, tag3]
readTime: 5 min read
difficulty: Beginner/Intermediate/Advanced
---
```

## 🔗 URL Structure

Recommended URL patterns:
- Homepage: `/`
- Category: `/category/{category-name}`
- Article: `/category/{category-name}/{article-slug}`
- Search: `/search?q={query}`

Example:
- `/category/investing`
- `/category/investing/how-the-stock-market-works`

## ✅ Quality Checklist

Before launching, ensure:
- [ ] All 90 articles are properly formatted and display correctly
- [ ] All 9 category images are loading properly
- [ ] Navigation works smoothly between categories and articles
- [ ] Mobile responsive design tested on multiple devices
- [ ] Search functionality works across all content
- [ ] Links are not broken (internal and external)
- [ ] Images are optimized and load quickly
- [ ] SEO meta tags are in place
- [ ] Accessibility standards met (WCAG 2.1)
- [ ] Performance metrics acceptable (Lighthouse score 90+)

## 🎯 Key Features to Implement

1. **Category Landing Pages**
   - Hero image with category title
   - Category description
   - List of all articles with snippets
   - Filter/sort options

2. **Article Detail Pages**
   - Full article content
   - Table of contents for long articles
   - Share buttons
   - Print functionality
   - Related articles sidebar

3. **Search & Discovery**
   - Full-text search
   - Category filters
   - Tag-based browsing
   - Popular articles section

4. **User Experience**
   - Smooth page transitions
   - Loading states
   - Error handling
   - 404 page

## 📞 Support & Maintenance

- Keep content updated regularly
- Monitor for broken links
- Track user engagement metrics
- Collect feedback for improvements
- Update articles as financial information changes

---

**Ready to build!** Use this structure and these guidelines to create a professional, user-friendly TheAlxLabs Finance website.
