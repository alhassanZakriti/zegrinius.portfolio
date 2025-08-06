# Blog System Documentation

## Overview

The portfolio now includes a comprehensive blog system with the following features:

### Features
- **Blog section on home page**: Shows featured articles
- **Dedicated blog page**: Full blog with search and filtering
- **Individual blog posts**: Detailed article pages
- **Search functionality**: Search by title, content, tags, or subject
- **Subject filtering**: Filter articles by category (Web Development, Design, etc.)
- **Responsive design**: Works on all device sizes
- **SEO-friendly URLs**: Clean URLs for each blog post

## File Structure

```
src/
├── components/
│   └── Blog.tsx              # Blog section for home page
├── pages/
│   ├── BlogPage.tsx          # Main blog page with search/filter
│   └── BlogPost.tsx          # Individual blog post page
├── data/
│   └── blog.ts               # Blog data and helper functions
public/assets/blog/           # Blog post images
```

## Blog Data Structure

Each blog post has the following structure:

```typescript
interface BlogPost {
  id: string
  slug: string              // URL slug
  title: string
  excerpt: string          // Short description
  content: string          // Full article content (markdown-like)
  author: string
  publishedAt: string      // Date in YYYY-MM-DD format
  readTime: string         // e.g., "5 min read"
  featuredImage: string    // Path to featured image
  tags: string[]           // Article tags
  subject: string          // Category (Web Development, Design, etc.)
  featured?: boolean       // Show on home page if true
}
```

## Adding New Blog Posts

1. **Add blog post data** to `src/data/blog.ts`:
   ```typescript
   {
     id: "6",
     slug: "my-new-article",
     title: "My New Article Title",
     excerpt: "Brief description of the article...",
     content: \`# Article Title
     
     Article content goes here. You can use markdown-like syntax:
     
     ## Subheading
     
     - Bullet points
     - **Bold text**
     - *Italic text*
     - \`code snippets\`
     
     \`\`\`javascript
     // Code blocks
     const example = "hello world";
     \`\`\`
     \`,
     author: "Your Name",
     publishedAt: "2025-01-20",
     readTime: "7 min read",
     featuredImage: "/assets/blog/my-new-article.jpg",
     tags: ["tag1", "tag2", "tag3"],
     subject: "Web Development",
     featured: true
   }
   ```

2. **Add featured image** to `public/assets/blog/` with the filename referenced in `featuredImage`

3. **Recommended image dimensions**: 1200x600 pixels for best results

## Content Formatting

The blog system supports markdown-like syntax:

- `# Heading 1` → Large heading
- `## Heading 2` → Medium heading  
- `### Heading 3` → Small heading
- `**bold text**` → **Bold text**
- `*italic text*` → *Italic text*
- `` `code` `` → Inline code
- ``` code blocks ``` → Code blocks with syntax highlighting
- `- List item` → Bullet points

## Navigation

- **Home page**: Shows featured blog posts in the blog section
- **Blog page** (`/blog`): Shows all posts with search and filtering
- **Individual posts** (`/blog/article-slug`): Full article view
- **Header navigation**: Blog link added to main navigation

## Customization

### Adding New Subjects
Edit the subjects in `src/data/blog.ts` by adding articles with new subject values. The filter will automatically include them.

### Styling
Blog-specific styles are in `src/index.css` under the `.blog-content` class.

### Search Logic
Search function looks through:
- Post titles
- Post excerpts  
- Post tags
- Post subjects

### Featured Posts
Set `featured: true` in blog post data to show on home page.

## Development

The blog system is fully integrated with:
- React Router for navigation
- Responsive design with Tailwind CSS
- Lucide icons
- Smooth scrolling navigation

## Image Management

Place blog images in `public/assets/blog/` and reference them as `/assets/blog/filename.jpg` in the blog post data.
