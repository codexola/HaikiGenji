# Quick Start Guide - Ryuko Tokunaga Portfolio

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📤 Deploy to Vercel

### Method 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Method 2: GitHub Integration
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

### Method 3: Manual Upload
1. Run `npm run build`
2. Go to [vercel.com](https://vercel.com)
3. Drag and drop the `dist` folder

---

## ✅ Verification Checklist

After deployment, verify:
- [ ] Site loads without errors
- [ ] 3D animations work smoothly
- [ ] Language toggle (EN/JP) works
- [ ] All navigation links work
- [ ] Contact form is functional
- [ ] Resume PDF downloads correctly
- [ ] Mobile responsive design works
- [ ] No console errors

---

## 🔧 Common Issues & Fixes

### Issue: Chunk Size Warning
**Fix**: Already configured in `vite.config.js`
- Chunk size limit: 1000kb
- Manual vendor splitting enabled

### Issue: Build Fails
**Fix**: 
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
npm run build
```

### Issue: 3D Not Loading
**Fix**: Check browser console for errors
- Ensure WebGL is supported
- Check Three.js version compatibility
- Verify GPU acceleration enabled

---

## 📊 Performance Tips

### Optimize Bundle Size
- Current bundle: ~850kb (gzipped: ~250kb)
- Chunk splitting: Enabled
- Tree-shaking: Enabled
- Minification: Enabled

### Improve Load Time
- Static assets cached for 1 year
- HTML cached for 1 hour
- Vercel edge caching enabled
- Lazy loading for images

---

## 🌐 Environment Variables

Create `.env.local`:
```env
VITE_APP_TITLE=Ryuko Tokunaga - Senior AI Engineer & Full-Stack Developer
VITE_APP_DESCRIPTION=Portfolio showcasing AI systems, Web development, and Cloud architecture expertise
```

---

## 📝 Update Content

### Update Personal Info
- **Name**: Edit `src/components/Hero.jsx`
- **Email**: Edit `src/components/Contact.jsx`
- **GitHub**: Edit `src/components/Contact.jsx`
- **Resume**: Replace `public/職務経歴書_徳永琉孝.pdf`

### Update Experience
- Edit `src/components/Experience.jsx`
- Update `experiences` object with new jobs

### Update Skills
- Edit `src/components/Skills.jsx`
- Modify `skillGroups` array

### Update Projects
- Edit `src/components/Projects.jsx`
- Add/remove projects in `projectsData`

---

## 🎨 Customize Styling

### Colors
- Primary: `#64ffda` (cyan)
- Secondary: `#7b5ea7` (purple)
- Accent: `#ff6b6b` (red)

Edit in component CSS files:
- `src/components/*.css`

### Fonts
- Primary: Inter (sans-serif)
- Secondary: Space Grotesk (monospace)

Edit in `src/index.css`

---

## 📱 Mobile Optimization

The portfolio is fully responsive:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

Test on different devices:
```bash
npm run dev
# Open DevTools (F12) and toggle device toolbar
```

---

## 🔐 Security

- No sensitive data in code
- Environment variables for secrets
- HTTPS enforced on Vercel
- CSP headers configured
- XSS protection enabled

---

## 📞 Support

For issues:
1. Check [DEPLOYMENT_FIXES.md](./DEPLOYMENT_FIXES.md)
2. Review [README.md](./README.md)
3. Check Vercel dashboard logs
4. Contact: ryuko.tokunaga@example.com

---

## 🎯 Next Steps

1. ✅ Deploy to Vercel
2. ✅ Set up custom domain
3. ✅ Enable analytics
4. ✅ Set up error tracking
5. ✅ Monitor performance

---

**Ready to deploy? Run `vercel` now!** 🚀

---

**Last Updated**: May 15, 2026
**Version**: 1.0.0
