# 🚀 Amit Kumawat's Portfolio

A modern, responsive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Features a beautiful dark mode, smooth animations, and optimized performance.

## ✨ Features

### 🎨 Design & UX
- **Modern UI/UX** with gradient effects and smooth animations
- **Dark/Light Mode** with system preference detection using next-themes
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Smooth Scrolling** with Intersection Observer animations
- **Fast Performance** - Optimized for Lighthouse scores

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About** - Professional summary with key statistics
3. **Experience** - Detailed work experience at Cvent and SwiftBL
4. **Skills** - Comprehensive technical skills organized by category
5. **Projects** - Showcase of major projects with highlights
6. **Contact** - Multiple contact methods (Email, LinkedIn, GitHub, WhatsApp)
7. **Footer** - Quick navigation and social links

### 🔗 Contact Integration
- **Email** - Direct email link
- **LinkedIn** - Professional networking profile
- **GitHub** - Portfolio of code repositories
- **WhatsApp** - Quick messaging

### 📄 Features
- **Resume Download** - Easy access to download resume
- **Smooth Animations** - Framer Motion powered transitions
- **Mobile Menu** - Responsive navigation on mobile
- **SEO Optimized** - Proper metadata and Open Graph tags
- **Vercel Ready** - Easy deployment configuration

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 16.1.6
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.34.3
- **Theme Management**: next-themes 0.4.6
- **Icons**: Lucide React, React Icons
- **Intersection Observer**: react-intersection-observer 9.13.0

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio-amitk.git
cd portfolio-amitk
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:3000`

## 🚀 Building & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

Vercel automatically handles the build and deployment. Your site will be live in minutes!

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the .next folder
```

**Docker:**
```bash
docker build -t portfolio-amitk .
docker run -p 3000:3000 portfolio-amitk
```

## 📁 Project Structure

```
portfolio-amitk/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx          # Navigation bar with theme toggle
│   ├── Hero.tsx            # Hero section with CTA
│   ├── About.tsx           # About section with stats
│   ├── Experience.tsx      # Work experience timeline
│   ├── Skills.tsx          # Technical skills showcase
│   ├── Projects.tsx        # Project portfolio
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer with links
├── public/
│   ├── Amit_Kumawat_Resume_v2.pdf  # Resume file
│   └── images/             # Project images and assets
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## 🎨 Customization

### Update Personal Information

Edit `components/Hero.tsx`:
```typescript
// Update name, title, and description
<h1>Your Name</h1>
<p>Your Title</p>
```

Edit `components/About.tsx`:
```typescript
// Update about text and statistics
```

Edit `components/Experience.tsx`:
```typescript
// Update work experience details
```

### Update Resume
Replace `public/Amit_Kumawat_Resume_v2.pdf` with your resume file.

### Update Colors
Edit `tailwind.config.js` to customize the color scheme.

### Update Social Links
Update all component links:
- GitHub URL
- LinkedIn URL
- Email address
- WhatsApp number

## 🌙 Dark Mode

Dark mode is automatically enabled based on system preferences. Users can toggle with the theme button in the navbar.

To customize colors for dark mode, edit the `dark:` prefixed classes in components.

## 📊 Performance Optimizations

- **Image Optimization** - WebP and AVIF formats
- **Code Splitting** - Automatic route-based splitting
- **CSS Minification** - Tailwind CSS optimization
- **Lazy Loading** - Components load on scroll
- **Static Generation** - Pre-rendered pages

## 📈 SEO

The portfolio includes:
- Open Graph meta tags
- Twitter Card meta tags
- Structured metadata
- Mobile viewport configuration
- Optimized page titles and descriptions

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📝 License

This project is open source and available under the MIT License.

## 📞 Support

If you encounter any issues or have questions, feel free to:
- Open an issue on GitHub
- Contact via email
- Reach out on LinkedIn

---

**Built with ❤️ using Next.js, TypeScript & Tailwind CSS**

Deployed on Vercel for optimal performance and reliability.

