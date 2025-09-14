# Simon's Portfolio

A modern, minimalist portfolio website built with Astro, showcasing Simon Plutz's work in game development and software engineering.

## 🚀 Technology Stack
- **Framework**: Astro 5.11.0
- **Styling**: TailwindCSS 4.1.10
- **Components**: React 18.3.1
- **Content**: MDX with content collections
- **Deployment**: Netlify
- **Hosting**: GitHub

## 📁 Project Structure
- `src/` - Astro source files and components
- `src/content/` - Content collections (jobs, posts, talks, links)
- `src/components/` - Reusable UI components
- `src/pages/` - Route pages
- `public/` - Static assets
- `archived-hugo-portfolio/` - Previous Hugo-based portfolio (archived)

## 🎯 Features
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Dark/Light Theme**: Automatic theme switching
- **Content Management**: Structured content collections
- **SEO Optimized**: Built-in sitemap and meta tags
- **Professional Portfolio**: Showcases projects, experience, and skills

## 🚀 Netlify Deployment

### Prerequisites
- GitHub repository connected to Netlify
- Custom domain: `psi-mon.com`

### Build Configuration
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18 (specified in `.nvmrc`)

### Environment Variables
No additional environment variables required.

### Automatic Deployment
1. Push changes to GitHub
2. Netlify automatically detects changes
3. Builds and deploys to `psi-mon.com`
4. Updates are live within minutes

## 🛠️ Local Development

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
- **URL**: http://localhost:4321
- **Hot Reload**: Automatic refresh on file changes
- **Build Preview**: Test production build locally

## 🔧 Configuration Files

### Netlify Configuration (`netlify.toml`)
- Build settings and commands
- Redirects for SPA routing
- Security headers
- Asset caching rules

### Astro Configuration (`astro.config.mjs`)
- Site URL and settings
- Integrations (React, MDX, Sitemap)
- Build optimizations
- Font configurations

### TailwindCSS (`tailwind.config.mjs`)
- Utility-first CSS framework
- Custom design system
- Responsive breakpoints

## 📱 Portfolio Sections

### Homepage
- Personal introduction and summary
- Professional background
- Contact information

### Work Experience
- **Reboot Studio**: Senior Software Engineer (2022-Present)
- **Sofia Games**: Software Engineer (2020-2021)

### Projects
- Game development showcase
- Technical implementations
- Performance optimizations

### Education
- Computer Science background
- Technical skills and certifications
- Professional development

### Writing
- Technical blog posts
- Game development insights
- Industry knowledge sharing

## 🎨 Design Features

### Theme System
- Automatic dark/light mode detection
- Smooth transitions between themes
- Consistent color scheme

### Typography
- Inter font family
- Optimized for readability
- Responsive text sizing

### Components
- Reusable UI components
- Consistent design patterns
- Accessibility focused

## 🚧 Current Status
✅ **Astro Migration**: Successfully migrated from Hugo
✅ **Content Updates**: Professional portfolio content added
✅ **Netlify Ready**: Full deployment configuration
✅ **Responsive Design**: Mobile and desktop optimized
✅ **Performance**: Optimized for fast loading

## 📈 Performance Metrics
- **Build Time**: Optimized for fast builds
- **Bundle Size**: Minimal JavaScript footprint
- **Loading Speed**: Optimized assets and caching
- **SEO Score**: Built-in optimization features

## 🔗 Links
- **Live Site**: https://psi-mon.com
- **GitHub**: https://github.com/splutz

## 📝 License
This project is for Simon Plutz's personal portfolio use.

---

Built with ❤️ using Astro and TailwindCSS

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5cde995-3580-4fb4-aad8-5e6513d26647/deploy-status)](https://app.netlify.com/projects/reverent-hugle-d42410/deploys)