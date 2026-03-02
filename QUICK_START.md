# 🎯 Quick Start Guide

Get your portfolio running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git

## 📦 Installation (2 minutes)

```bash
# 1. Navigate to project directory
cd portfolio-amitk

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## ✏️ Customization (3 minutes)

### 1. Update Your Name & Title

**File**: `components/Hero.tsx`

```typescript
<h1>Your Name</h1>
<p>Your Title</p>
<p>Your description here...</p>
```

### 2. Update Social Links

Replace these in all components:
- GitHub: `https://github.com/amitk0091` → Your GitHub
- LinkedIn: `https://linkedin.com/in/amitk0091` → Your LinkedIn
- Email: `akn778811@gmail.com` → Your Email
- WhatsApp: `919509669135` → Your Number

### 3. Update Resume

Replace `/public/Amit_Kumawat_Resume_v2.pdf` with your resume file.

### 4. Update Experience

**File**: `components/Experience.tsx`

Update the `experiences` array with your work history.

### 5. Update Skills

**File**: `components/Skills.tsx`

Update `skillCategories` with your technical skills.

### 6. Update Projects

**File**: `components/Projects.tsx`

Update `projects` array with your portfolio projects.

### 7. Update About Section

**File**: `components/About.tsx`

Update the About text with your bio.

---

## 🚀 Deploy (Instant)

### Option 1: Vercel (Recommended) - 1 Click

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"

**Done!** Your site is live in 1-2 minutes.

### Option 2: Netlify - 1 Click

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repo
5. Click "Deploy"

---

## 🎨 Customization Options

### Change Colors

Edit `tailwind.config.js` to modify the color scheme.

Example:
```js
theme: {
  colors: {
    blue: '#your-color',
    purple: '#your-color',
  }
}
```

### Change Fonts

Edit `app/layout.tsx` to import different Google Fonts.

### Disable Dark Mode

Remove `next-themes` setup from `app/layout.tsx`.

---

## 📁 Important Files

```
components/
├── Hero.tsx         ← Update name & title
├── About.tsx        ← Update about text
├── Experience.tsx   ← Update work history
├── Skills.tsx       ← Update technical skills
├── Projects.tsx     ← Update portfolio projects
├── Contact.tsx      ← Update contact methods
└── ...

public/
├── Amit_Kumawat_Resume_v2.pdf  ← Replace with your resume
└── images/          ← Store project images here
```

---

## 🛠️ Build & Test

```bash
# Build for production
npm run build

# Run production build locally
npm run start

# Check for errors
npm run lint
```

---

## 📱 Mobile Testing

```bash
# Run dev server
npm run dev

# Open on mobile
# Use your computer's IP: http://192.168.x.x:3000
# Or use: ngrok http 3000
```

---

## 🔗 Update Links Checklist

- [ ] GitHub URL in Hero, Contact, Footer
- [ ] LinkedIn URL in Hero, Contact, Footer
- [ ] Email in Hero, Contact, Footer
- [ ] WhatsApp number in Hero, Contact, Footer
- [ ] Resume file path in Hero
- [ ] LeetCode profile in About
- [ ] Project links in Projects
- [ ] Website links in Projects

---

## 🌐 Domain Setup

1. Buy domain (GoDaddy, Namecheap, etc.)
2. Update DNS to point to Vercel/Netlify
3. Add domain in deployment platform
4. Wait 24-48 hours for DNS propagation

---

## 📊 Performance Checklist

- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] All links work
- [ ] Resume downloads
- [ ] Images load
- [ ] Animations smooth
- [ ] No console errors

Run Lighthouse audit:
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Analyze page load"

Target: 90+ score

---

## 🆘 Common Issues

### Port 3000 already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build fails

```bash
# Clear cache and rebuild
rm -rf .next
npm install
npm run build
```

### Styles not working

```bash
# Rebuild Tailwind CSS
npm install -D tailwindcss
npm run build
```

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion)

---

## 🎉 You're All Set!

Your portfolio is ready to showcase your amazing work. 

**Next Steps:**
1. ✅ Update your information
2. ✅ Test locally
3. ✅ Deploy to Vercel
4. ✅ Share with the world

Good luck! 🚀

