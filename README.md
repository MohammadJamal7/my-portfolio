# 🚀 Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Perfect for freelancers and developers to showcase their skills and projects.

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth animations and hover effects
- **SEO Optimized**: Built with Next.js for excellent performance
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first styling for rapid development

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Animations**: CSS Transitions & Intersection Observer

## 🎨 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal story, stats, and professional photo placeholder
3. **Skills**: Interactive skill bars with technology categories
4. **Projects**: Filterable project gallery with modal details
5. **Contact**: Professional contact form and social links

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Customization Guide

### 1. Personal Information
Update the following files with your information:

**Navigation.tsx** (Line 18):
```tsx
<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
  YourName
</span>
```

**Hero.tsx** (Lines 12-15):
```tsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
  <span className="block">Full-Stack</span>
  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
    Developer
  </span>
</h1>
```

### 2. Skills Section
Edit `Skills.tsx` to update your technologies:

```tsx
const skills = [
  {
    category: 'Mobile Development',
    technologies: [
      { name: 'Flutter', level: 95, color: 'from-blue-400 to-blue-600' },
      { name: 'Dart', level: 90, color: 'from-blue-500 to-blue-700' },
      // Add your skills here
    ]
  },
  // Add more categories
];
```

### 3. Projects Section
Update `Projects.tsx` with your actual projects:

```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Web',
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true
  },
  // Add more projects
];
```

### 4. Contact Information
Update `Contact.tsx` with your details:

```tsx
// Update email, location, and social links
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    // ... rest of the configuration
  },
  // Add your social links
];
```

### 5. About Section
Customize `About.tsx` with your story and statistics:

```tsx
// Update the description paragraphs
<p className="mb-6">
  Your personal story and experience...
</p>

// Update the statistics
<div className="grid grid-cols-2 gap-6">
  <div className="bg-slate-700/50 p-6 rounded-lg">
    <h3 className="text-2xl font-bold text-purple-400 mb-2">50+</h3>
    <p className="text-gray-300">Projects Completed</p>
  </div>
  // Update with your actual stats
</div>
```

## 🎨 Styling Customization

### Color Scheme
The portfolio uses a purple-pink gradient theme. To change colors:

1. **Primary Colors**: Update gradient classes in components
2. **Background**: Modify `globals.css` root variables
3. **Accent Colors**: Change Tailwind color classes throughout components

### Typography
- **Font Family**: Update in `globals.css` body selector
- **Font Sizes**: Modify Tailwind text size classes
- **Font Weights**: Update font weight classes

### Animations
- **Scroll Animations**: Controlled by Intersection Observer in each component
- **Hover Effects**: CSS transitions in Tailwind classes
- **Custom Animations**: Defined in `globals.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: Default (320px+)
- **Tablet**: `sm:` (640px+)
- **Desktop**: `md:` (768px+)
- **Large Desktop**: `lg:` (1024px+)

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder

### Other Platforms
- **Heroku**: Add `package.json` scripts
- **AWS**: Use S3 + CloudFront
- **DigitalOcean**: Use App Platform

## 📈 Performance Optimization

- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Implemented for components
- **SEO**: Meta tags and structured data

## 🔧 Advanced Customization

### Adding New Sections
1. Create new component in `app/components/`
2. Import and add to `page.tsx`
3. Add navigation link in `Navigation.tsx`

### Custom Animations
1. Define keyframes in `globals.css`
2. Apply classes in components
3. Use Framer Motion for complex animations

### Database Integration
- **Contentful**: For CMS integration
- **Sanity**: For headless CMS
- **Strapi**: For custom backend

## 📞 Support

For questions or customization help:
- **Email**: your.email@example.com
- **GitHub**: Create an issue
- **LinkedIn**: Connect for professional inquiries

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for developers who want to showcase their skills professionally.**