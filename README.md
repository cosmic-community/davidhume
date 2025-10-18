# Professional Services Showcase

![App Preview](https://imgix.cosmicjs.com/542fbf80-ac4d-11f0-be7c-6543f3acb6d3-photo-1460925895917-afdab827c52f-1760810856828.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A sophisticated company website showcasing your services, team, testimonials, and case studies. Built with Next.js 15 and powered by Cosmic CMS, this application presents your business story with elegance and impact.

## ✨ Features

- **Dynamic Service Showcase** - Present services with rich descriptions, pricing, and key features
- **Team Member Profiles** - Highlight expertise with photos, bios, and social links
- **Client Testimonials** - Build trust with authentic feedback and star ratings
- **Case Study Portfolio** - Demonstrate success with detailed project breakdowns
- **Responsive Design** - Seamless experience across all devices
- **SEO Optimized** - Built-in metadata and semantic HTML
- **Real-time Content** - Updates from Cosmic instantly reflect on the site
- **Performance Optimized** - Fast loading with imgix image optimization

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68f3d5e6e55497332b240089&clone_repository=68f3d839a520abe83a762036)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies: "A beleza das coisas existe no espírito de quem as contempla" (David Hume)"

### Code Generation Prompt

> Based on the content model I created for "Create a content model for a company website with services, team members, testimonials, and case studies: "A beleza das coisas existe no espírito de quem as contempla" (David Hume)", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **React Icons** - Icon library for UI elements

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account with bucket access

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({
    type: 'services'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(0)

const services = response.objects as Service[]
```

### Fetching Team Members

```typescript
const response = await cosmic.objects
  .find({
    type: 'team-members'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(0)

const team = response.objects as TeamMember[]
```

### Fetching Case Studies with Related Services

```typescript
const response = await cosmic.objects
  .find({
    type: 'case-studies'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes related service data

const caseStudies = response.objects as CaseStudy[]
```

## 🎨 Cosmic CMS Integration

This application uses the following Cosmic object types:

- **Services** - Service offerings with descriptions, pricing, and features
- **Team Members** - Team profiles with photos, bios, and social links
- **Testimonials** - Client reviews with ratings and company information
- **Case Studies** - Project showcases with challenges, solutions, and results

All content is fetched server-side for optimal performance and SEO.

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy!

## 📝 License

MIT License - feel free to use this project for your own purposes.

<!-- README_END -->