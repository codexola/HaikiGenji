# Ryuko Tokunaga - Senior AI Engineer & Full-Stack Developer Portfolio

A modern, interactive portfolio website showcasing expertise in AI systems, Web development, and Cloud architecture.

## 🚀 Features

- **Interactive 3D Visualizations** - Three.js powered animations and visual effects
- **Responsive Design** - Mobile-first approach with smooth animations
- **Multi-language Support** - English and Japanese language toggle
- **Modern Tech Stack** - React 18, Vite, Three.js, Framer Motion
- **Performance Optimized** - Code splitting, lazy loading, and optimized assets
- **SEO Friendly** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Animation library
- **GSAP** - Advanced animation library
- **React Icons** - Icon library

### Build & Deployment
- **Vite** - Lightning-fast build tool
- **Vercel** - Deployment platform
- **Node.js 18+** - Runtime environment

## 📦 Installation

### Prerequisites
- Node.js 18.x or 20.x
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd HaikiGenji
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build & Deployment

### Local Build
```bash
npm run build
npm run preview
```

### Deploy to Vercel

#### Option 1: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

#### Option 2: GitHub Integration
1. Push code to GitHub
2. Connect repository to Vercel dashboard
3. Vercel automatically deploys on push

#### Option 3: Manual Deployment
```bash
npm run build
# Upload 'dist' folder to Vercel
```

## 📁 Project Structure

```
HaikiGenji/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Cursor.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── *.css
│   ├── assets/
│   ├── App.jsx
│   ├── i18n.jsx
│   ├── index.css
│   ├── main.jsx
│   └── App.css
├── public/
│   ├── favicon.svg
│   ├── Fuji.jpg
│   ├── icons.svg
│   └── 職務経歴書_徳永琉孝.pdf
├── index.html
├── vite.config.js
├── vercel.json
├── .vercelignore
├── .env.example
├── package.json
└── README.md
```

## 🔧 Configuration

### Vite Configuration (vite.config.js)
- **Chunk Size Warning Limit**: 1000kb (increased from default 500kb)
- **Manual Chunks**: Optimized code splitting for vendors
- **Optimized Dependencies**: Pre-bundled for faster startup

### Vercel Configuration (vercel.json)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Caching Headers**: Optimized for static assets
- **Rewrites**: SPA routing support

## 🚨 Troubleshooting

### Chunk Size Warning
If you see warnings about chunk sizes during build:
- The `chunkSizeWarningLimit` in `vite.config.js` is set to 1000kb
- Adjust if needed: `chunkSizeWarningLimit: 1500`

### Three.js Deprecation Warnings
- Using Three.js v0.163.0 which is compatible with current dependencies
- If issues arise, update to latest compatible versions

### Build Failures on Vercel
1. Check Node.js version: `node --version` (should be 18.x or 20.x)
2. Clear cache: `vercel env pull` then rebuild
3. Check build logs in Vercel dashboard

### Performance Issues
- Use Vercel Analytics to identify bottlenecks
- Check bundle size: `npm run build` and review dist folder
- Optimize images and assets in public folder

## 📊 Performance Optimization

### Code Splitting
- Automatic vendor chunk separation
- Three.js libraries in separate chunk
- Animation libraries in separate chunk
- React in separate chunk

### Caching Strategy
- Static assets: 1 year cache (immutable)
- HTML/CSS/JS: 1 hour cache
- Vercel edge caching enabled

### Build Optimization
- Tree-shaking enabled
- Minification enabled
- Source maps for production debugging

## 🌐 Deployment Checklist

- [ ] Update contact information in Contact.jsx
- [ ] Update resume PDF in public folder
- [ ] Test all links and navigation
- [ ] Verify 3D animations load correctly
- [ ] Test language toggle (EN/JP)
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Test form submission
- [ ] Check performance with Lighthouse
- [ ] Deploy to Vercel

## 📝 Environment Variables

Create `.env.local` file:
```env
VITE_APP_TITLE=Ryuko Tokunaga - Senior AI Engineer & Full-Stack Developer
VITE_APP_DESCRIPTION=Portfolio showcasing AI systems, Web development, and Cloud architecture expertise
```

## 🔐 Security

- No sensitive data in repository
- Environment variables for configuration
- HTTPS enforced on Vercel
- CSP headers configured
- XSS protection enabled

## 📄 License

This portfolio is personal work. All rights reserved.

## 👤 Author

**Ryuko Tokunaga**
- Email: ryuko.tokunaga@example.com
- GitHub: [@ryuko-tokunaga](https://github.com/ryuko-tokunaga)
- Portfolio: [ryuko-tokunaga.vercel.app](https://ryuko-tokunaga.vercel.app)

## 🤝 Support

For issues or questions, please contact via email or GitHub.

---

**Last Updated**: May 15, 2026
**Version**: 1.0.0
