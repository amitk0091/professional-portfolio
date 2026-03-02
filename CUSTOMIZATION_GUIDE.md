# 🎯 Portfolio Features & Customization Guide

## 🌟 All Features Included

### 1. Hero Section
**File**: `components/Hero.tsx`

**Features**:
- Animated gradient text heading
- Professional subtitle
- Call-to-action buttons:
  - GitHub link
  - LinkedIn link
  - Email link
  - WhatsApp link
- Resume download button
- Scroll indicator with animation
- Smooth scroll to next section

**What to Update**:
```typescript
// Your name
<h1>Your Name Here</h1>

// Your title
<p>Your Job Title</p>

// Your description
<p>Your professional description</p>

// Update links in buttons (search for github.com/amitk0091, etc)
```

---

### 2. About Section
**File**: `components/About.tsx`

**Features**:
- Professional summary
- Education information with CGPA
- Years of experience
- Key statistics in colored cards:
  - LeetCode stats
  - GeeksforGeeks stats
  - Achievements
  - Experience years

**What to Update**:
```typescript
// About paragraph 1 - Your summary
<p>I'm a passionate Software Engineer with...</p>

// About paragraph 2 - Your experience
<p>With X years of professional experience...</p>

// About paragraph 3 - Your specialization
<p>I'm proficient in...</p>

// About paragraph 4 - Your achievements
<p>Beyond coding, I'm an avid...</p>

// Update statistics in the cards
<div class="text-3xl font-bold">1300+</div> // Your number
```

---

### 3. Experience Section
**File**: `components/Experience.tsx`

**Features**:
- Timeline-style layout
- Multiple experience entries with:
  - Job title
  - Company name
  - Duration (From - To)
  - Location
  - Highlights as bullet points

**What to Update**:
```typescript
// Replace the experiences array:
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    duration: "Month Year – Present",
    location: "City/Remote",
    highlights: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3",
    ],
  },
  // Add more experiences...
];
```

---

### 4. Skills Section
**File**: `components/Skills.tsx`

**Features**:
- 6 skill categories with gradient colors
- Individual skill badges
- 3 proficiency highlights (Backend, Frontend, Problem Solving)
- Interactive hover effects

**What to Update**:
```typescript
// Update each category:
const skillCategories = [
  {
    name: "Your Category Name",
    skills: [
      "Skill 1",
      "Skill 2",
      "Skill 3",
      // Add more skills
    ],
    color: "from-blue-500 to-cyan-500", // Change gradient colors
  },
  // Update other categories...
];

// Update proficiency highlights:
<h4>Your Proficiency Title</h4>
<p>Your skills description</p>
```

---

### 5. Projects Section
**File**: `components/Projects.tsx`

**Features**:
- Featured projects with:
  - Project title
  - Detailed description
  - Key highlights (bullet points)
  - Technologies used (badges)
  - External links
- Link to GitHub profile

**What to Update**:
```typescript
// Update projects array:
const projects = [
  {
    title: "Your Project Name",
    description: "What this project does...",
    technologies: [
      "Tech 1",
      "Tech 2",
      "Tech 3",
    ],
    highlights: [
      "Key achievement 1",
      "Key achievement 2",
      "Key achievement 3",
    ],
    color: "from-blue-500 to-cyan-500", // Gradient colors
    website: "https://project-url.com", // Optional
  },
  // Add more projects...
];
```

---

### 6. Contact Section
**File**: `components/Contact.tsx`

**Features**:
- 4 contact method cards:
  - Email with icon
  - LinkedIn with icon
  - GitHub with icon
  - WhatsApp with icon
- Call-to-action section
- Email and LinkedIn action buttons

**What to Update**:
```typescript
// All contact methods are in one array:
const contactMethods = [
  {
    title: "Email",
    href: "mailto:your-email@example.com", // Change email
    label: "your-email@example.com",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/your-linkedin-url", // Change URL
    label: "your-linkedin-id",
  },
  {
    title: "GitHub",
    href: "https://github.com/your-github-username", // Change URL
    label: "your-github-username",
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/your-phone-number", // Change number
    label: "+91-XXXXXXXXXX",
  },
];
```

---

### 7. Navigation Bar
**File**: `components/Navbar.tsx`

**Features**:
- Fixed header that stays at top
- Links to all sections
- Dark/Light mode toggle with icon
- Mobile hamburger menu
- Smooth scroll to sections

**What to Update** (Usually no changes needed):
- The navigation links are automatic (point to section IDs)
- Theme toggle works automatically

---

### 8. Footer
**File**: `components/Footer.tsx`

**Features**:
- Quick navigation links
- Social media icons
- Resource links (Resume, LeetCode, GitHub)
- Scroll-to-top button
- Copyright notice

**What to Update**:
```typescript
// Update year in copyright:
© {currentYear} Your Name. All rights reserved.

// Update social links:
href="https://github.com/your-username" // Change URLs
href="https://linkedin.com/in/your-profile" // Change URLs
href="mailto:your-email@example.com" // Change email
href="https://wa.me/your-number" // Change number
```

---

## 🎨 Design Customizations

### Colors
**File**: `tailwind.config.js` or use Tailwind CSS classes directly

Change gradient colors throughout:
```css
/* Replace these gradients */
from-blue-600 to-purple-600    /* Primary gradient */
from-blue-500 to-cyan-500      /* Section gradients */
from-green-500 to-emerald-500  /* Different colors */
```

### Fonts
**File**: `app/layout.tsx`

Import different Google Fonts:
```typescript
import { Your_Font_Name } from "next/font/google";

const yourFont = Your_Font_Name({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

### Spacing & Layout
Edit Tailwind classes in components:
```xml
<!-- Reduce padding -->
<div className="p-4">        <!-- Was p-8 -->

<!-- Change grid columns -->
<div className="md:grid-cols-2"> <!-- Was md:grid-cols-3 -->

<!-- Adjust text sizes -->
<h1 className="text-4xl">      <!-- Was text-5xl -->
```

---

## 📄 Resume Update

**File Location**: `public/Amit_Kumawat_Resume_v2.pdf`

**Steps to Update**:
1. Replace the PDF file in the `public` folder
2. Keep the same filename OR update the path in:
   - `components/Hero.tsx`
   - `components/Footer.tsx`
   - Update resume download link

---

## 🔗 Links to Update

Search and replace these URLs throughout the codebase:

### GitHub
```
Search: github.com/amitk0091
Replace: github.com/your-username
```

### LinkedIn
```
Search: linkedin.com/in/amitk0091
Replace: linkedin.com/in/your-profile-id
```

### Email
```
Search: akn778811@gmail.com
Replace: your-email@example.com
```

### WhatsApp
```
Search: wa.me/919509669135
Replace: wa.me/your-phone-number (without + or spaces)
```

---

## 🌙 Dark Mode Customization

**File**: `app/layout.tsx` (ThemeProvider configuration)

Dark mode colors are defined using Tailwind's `dark:` prefix:
```xml
<!-- Light mode -->
<div className="bg-white text-gray-900">

<!-- Dark mode -->
<div className="dark:bg-black dark:text-gray-100">
```

To customize, edit the `dark:` classes throughout components.

---

## 📱 Layout Customization

### Hide/Show Sections
Comment out sections in `app/page.tsx`:
```typescript
<Hero />              {/* Always show */}
{/* <About /> */}     {/* Hide by commenting */}
<Experience />        {/* Show */}
<Skills />           {/* Show */}
<Projects />         {/* Show */}
<Contact />          {/* Show */}
```

### Reorder Sections
In `app/page.tsx`, change the order:
```typescript
export default function Home() {
  return (
    <>
      <Hero />
      <About />           {/* Change order by moving lines */}
      <Skills />
      <Experience />      {/* Moved up */}
      <Projects />
      <Contact />
    </>
  );
}
```

---

## 🔒 Environment Variables

**File**: `.env.local` (create if not exists)

```bash
# Theme
NEXT_PUBLIC_DEFAULT_THEME=system

# Your Information
NEXT_PUBLIC_FULL_NAME=Your Name
NEXT_PUBLIC_TITLE=Your Title
NEXT_PUBLIC_EMAIL=your-email@example.com

# Social Links
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
NEXT_PUBLIC_WHATSAPP_NUMBER=your-phone-number

# Optional
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 📝 Text Content Changes

### Home/Hero Section
- **File**: `components/Hero.tsx`
- Update: Name, title, description

### About Section
- **File**: `components/About.tsx`
- Update: Summary, education, stats, achievements

### Experience Section
- **File**: `components/Experience.tsx`
- Update: Job titles, companies, dates, achievements

### Skills Section
- **File**: `components/Skills.tsx`
- Update: Skill categories, individual skills

### Projects Section
- **File**: `components/Projects.tsx`
- Update: Project names, descriptions, technologies

### Contact Section
- **File**: `components/Contact.tsx`
- Update: Contact methods, CTA text

### Footer Section
- **File**: `components/Footer.tsx`
- Update: Copyright year, social links

---

## 🎯 Customization Priority (by importance)

### Priority 1 (Must Do)
- [ ] Update your name
- [ ] Update your title
- [ ] Update your email
- [ ] Update GitHub URL
- [ ] Update LinkedIn URL
- [ ] Replace resume PDF

### Priority 2 (Should Do)
- [ ] Update about section
- [ ] Update work experience
- [ ] Update technical skills
- [ ] Update projects

### Priority 3 (Nice to Have)
- [ ] Customize colors
- [ ] Customize fonts
- [ ] Add more projects
- [ ] Customize layout
- [ ] Add profile image

---

## 🚀 Testing After Customization

After making changes, test:

```bash
# 1. Start dev server
npm run dev

# 2. Check each section
# - Does it look correct?
# - Are links working?
# - Is dark mode working?

# 3. Mobile test
# - Use DevTools (F12) mobile view
# - Test on actual phone if possible

# 4. Build test
npm run build

# 5. Production test
npm run start
```

---

## 📋 Complete Customization Checklist

- [ ] Update name in Hero
- [ ] Update title in Hero
- [ ] Update description in Hero
- [ ] Update about section
- [ ] Add/update work experience
- [ ] Update skills list
- [ ] Add/update projects
- [ ] Update contact methods
- [ ] Replace resume PDF
- [ ] Update GitHub URL (all occurrences)
- [ ] Update LinkedIn URL (all occurrences)
- [ ] Update email (all occurrences)
- [ ] Update WhatsApp number (all occurrences)
- [ ] Test locally (`npm run dev`)
- [ ] Test dark mode
- [ ] Test mobile view
- [ ] Test all links
- [ ] Build production (`npm run build`)
- [ ] Deploy to Vercel

---

## 💡 Pro Tips

1. **Use Find & Replace** (Ctrl+H or Cmd+H) in VS Code to update multiple occurrences quickly
2. **Test in incognito mode** to ensure page loads fresh without cache
3. **Share the link** once deployed - get feedback from peers
4. **Keep a backup** of your resume in version control
5. **Update quarterly** - refresh projects and achievements

---

## 🔧 Common Customizations

### Change Primary Color
Search for `from-blue-600 to-purple-600` and replace throughout:
```css
from-emerald-600 to-teal-600    /* Green theme */
from-rose-600 to-pink-600       /* Pink theme */
from-amber-600 to-orange-600    /* Orange theme */
from-violet-600 to-indigo-600   /* Purple theme */
```

### Adjust Spacing
Change padding/margin in components:
```xml
p-8  → p-4   (Reduce padding)
p-8  → p-12  (Increase padding)
gap-8 → gap-6 (Reduce gap)
gap-8 → gap-12 (Increase gap)
```

### Change Section Background
```xml
<!-- Light -->
<section className="bg-white dark:bg-black">

<!-- Gradient -->
<section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
```

---

## ✅ You're Ready!

Follow this guide to customize your portfolio to perfectly represent your professional brand.

**Start with Priority 1 checklist, then deploy!** 🚀

---

**Happy customizing! 🎉**

