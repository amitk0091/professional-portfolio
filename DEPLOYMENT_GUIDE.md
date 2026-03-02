# 🚀 Deployment Guide for Amit Kumawat's Portfolio

This guide covers multiple deployment options for your Next.js portfolio.

---

## 1️⃣ Deploy on Vercel (Recommended) ⭐

Vercel is the company behind Next.js and offers the best performance and features.

### Step 1: Prepare Your Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Portfolio ready for deployment"
git push origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Click **"Deploy"**

That's it! Vercel handles everything automatically.

### Step 3: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain (e.g., amitkumawat.com)
3. Update your domain registrar's DNS settings

### Environment Variables

Vercel automatically detects and sets up environment variables. No additional setup needed!

### Build Command
```
npm run build
```

### Start Command
```
npm start
```

---

## 2️⃣ Deploy on Netlify

### Step 1: Connect Repository

1. Go to [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Choose GitHub and select your repository
4. Click **"Deploy site"**

### Step 2: Configure Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `.next`

### Environment Variables

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add any environment variables needed

---

## 3️⃣ Deploy on Railway

### Step 1: Prepare Your Repository

Push your code to GitHub if not already done.

### Step 2: Deploy on Railway

1. Go to [railway.app](https://railway.app)
2. Click **"New Project"**
3. Select **"GitHub Repo"**
4. Choose your portfolio repository
5. Railway auto-detects Next.js and configures everything

### Step 3: Configure Environment

No additional configuration needed! Railway handles Next.js out of the box.

---

## 4️⃣ Deploy using Docker

### Step 1: Build Docker Image

```bash
docker build -t portfolio-amitk .
```

### Step 2: Run Locally (Test)

```bash
docker run -p 3000:3000 portfolio-amitk
```

Visit `http://localhost:3000` to verify.

### Step 3: Push to Docker Hub

```bash
# Login to Docker Hub
docker login

# Tag your image
docker tag portfolio-amitk yourusername/portfolio-amitk:latest

# Push to Docker Hub
docker push yourusername/portfolio-amitk:latest
```

### Step 4: Deploy on Any Container Platform

**AWS ECS:**
```bash
# Create ECR repository and push image
```

**Google Cloud Run:**
```bash
gcloud run deploy portfolio-amitk \
  --image yourusername/portfolio-amitk:latest \
  --platform managed \
  --region us-central1
```

**Azure Container Instances:**
```bash
az container create \
  --resource-group myResourceGroup \
  --name portfolio-amitk \
  --image yourusername/portfolio-amitk:latest \
  --ports 3000
```

---

## 5️⃣ Deploy on AWS Amplify

### Step 1: Connect Repository

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click **"New app"** → **"Host web app"**
3. Choose GitHub
4. Authorize and select your repository

### Step 2: Configure Build Settings

Amplify auto-detects Next.js configuration.

### Build Settings:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## 6️⃣ Deploy on DigitalOcean App Platform

### Step 1: Create App

1. Go to [DigitalOcean](https://digitalocean.com)
2. Click **"Create"** → **"Apps"**
3. Connect GitHub repository
4. Select your portfolio repository

### Step 2: Configure

DigitalOcean automatically detects Next.js and configures:
- **Build Command**: `npm run build`
- **Run Command**: `npm start`
- **HTTP Port**: `3000`

### Step 3: Deploy

Click **"Deploy"** and your app is live!

---

## ✅ Deployment Checklist

Before deploying, ensure:

- [ ] All code is committed and pushed to GitHub
- [ ] Build completes without errors: `npm run build`
- [ ] No environment variables needed (all hardcoded or public)
- [ ] Resume PDF is in `public/` folder
- [ ] All social links are updated
- [ ] Tested locally: `npm run dev` works
- [ ] Dark mode toggles correctly
- [ ] Mobile responsiveness verified
- [ ] All links open in new tabs (where appropriate)

---

## 🔍 Post-Deployment Verification

After deployment, verify:

1. **Site loads correctly**
   - Check home page renders
   - All sections visible
   - Images load properly

2. **Navigation works**
   - Scroll to sections
   - Navbar links work
   - Mobile menu functions

3. **Dark mode works**
   - Toggle theme
   - Persists on refresh

4. **Contact links work**
   - Email link opens
   - Social links open in new tabs
   - WhatsApp link works on mobile

5. **Resume downloads**
   - Download button works
   - File is correct

6. **Performance**
   - Check Lighthouse scores
   - Verify Core Web Vitals

---

## 🌍 Custom Domain Setup

### Using Vercel (Easiest)

1. **Add domain** in Vercel dashboard
2. **Update DNS** in your registrar:
   - Add CNAME record pointing to Vercel
   - Vercel provides DNS instructions

### Using Custom DNS

1. Create DNS records at your registrar:
   ```
   A Record: @ → <deployment-ip>
   CNAME: www → <deployment-domain>
   ```

2. Wait for DNS propagation (usually 24 hours)

---

## 📊 Monitoring & Analytics

### Enable Vercel Analytics

1. Go to Vercel dashboard
2. **Settings** → **Analytics**
3. Enable Web Analytics

### Google Analytics (Optional)

Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 🚨 Troubleshooting

### Build fails on Vercel

**Solution**: Ensure `package.json` has all dependencies listed.

```bash
npm install # Install all missing packages
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Styles not loading

**Solution**: Rebuild deployment.

```bash
# On Vercel dashboard, go to Deployments
# Click ... menu → Redeploy
```

### Dark mode not persisting

**Solution**: Check `localStorage` is enabled in browser.

---

## 📈 Performance Tips

1. **Use Vercel** - Best performance for Next.js
2. **Enable Image Optimization** - Already configured
3. **Monitor Lighthouse** - Aim for 90+ scores
4. **Use CDN** - Vercel automatically uses Vercel Edge Network

---

## 💡 Environment Variables

Create `.env.local` for local development:

```bash
cp .env.example .env.local
```

Update with your information.

**Note**: Only `NEXT_PUBLIC_*` variables are exposed to browser.

---

## 🔐 Security

- Never commit `.env.local` to Git
- Use platform's environment variable settings
- Keep `package-lock.json` updated
- Monitor for dependency vulnerabilities

---

## 📞 Need Help?

- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Vercel support: [vercel.com/help](https://vercel.com/help)
- Next.js Discord: [discord.gg/nextjs](https://discord.gg/nextjs)

---

**Happy Deploying! 🎉**

Your portfolio will be live and accessible to the world within minutes!

