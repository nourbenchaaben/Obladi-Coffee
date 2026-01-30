Obladi Coffee Website - Modern React Demo

## Overview
A modern, animated React website for Obladi Coffee featuring:
- **All-day brunch service** with actual menu items
- **Responsive design** with mobile-first approach
- **Modern animations** with smooth cubic-bezier easing
- **Botanical theme** with green accents (#6ABF4B)
- **Real social media integration** (Instagram & Facebook)
- **Image-ready gallery** with Unsplash placeholders

---

## 📋 Content Updated with Obladi Coffee Info

### Hero Section
- **Title**: "Obladi Coffee"
- **Tagline**: "Brunch All Day, Every Day" + "Your perfect spot to chill, work, or simply enjoy a good café"
- **Call-to-Action**: "View Our Menu"

### Menu Section
Real Obladi Coffee brunch items with Turkish pricing:
1. **Scrambled Eggs Toast** - ₺85
2. **Avocado & Feta Toast** - ₺95
3. **Brunch Bowl** - ₺105
4. **Espresso** - ₺35
5. **Specialty Latte** - ₺60
6. **Fresh Juice** - ₺55

### About Section
Updated with real brand voice:
- Focus on "all-day brunch"
- Work-friendly atmosphere
- Botanical design inspiration
- Three key pillars: All-Day Brunch, Botanical Ambiance, Work-Friendly

### Gallery Section
Now displays actual images from Unsplash:
1. Sunday Brunch
2. Café Ambiance
3. Specialty Coffee
4. Work Space
5. Brunch Bowls
6. Green Oasis

### Contact Section
Updated with actual Obladi info:
- **Locations**: Multiple locations in Tunis
- **Follow**: @obladicoffee on Instagram
- **Loyalty Card**: Available at both stores
- **Perfect For**: Work, study, or relaxation

### Footer
- Real social media links:
  - Instagram: https://www.instagram.com/obladicoffee/
  - Facebook: https://www.facebook.com/ObladiCoffee/

---

## 🎨 Design Features

### Theme
- **Primary Color**: #6ABF4B (Leaf Green)
- **Background**: #1A1A1A (Dark Charcoal)
- **Accent**: #F5EDC8 (Latte Beige)
- **Typography**: Montserrat (headings), Open Sans (body)

### Animations
- ✨ Floating logo
- 🌊 Gradient background shift
- 💫 Button ripple effect
- 🎪 Staggered card animations
- 📈 Cubic-bezier hover effects
- 📍 Scale-in gallery animations

### Modern CSS
- Gradient backgrounds on sections
- Radial gradient overlays
- Backdrop filter blur effects
- Z-index layering for depth
- Enhanced box shadows with color variations

---

## 📸 Image Implementation

### Current Setup
- Uses Unsplash placeholder images
- All images are accessible via imageConfig.js
- Paths: `src/assets/imageConfig.js`

### Image Configuration
```javascript
export const imageConfig = {
  hero: '...',
  menu: {
    scrambledEggs: '...',
    avocadoToast: '...',
    // ...
  },
  gallery: {
    brunch: '...',
    ambiance: '...',
    // ...
  },
  about: {
    interior: '...',
    plants: '...'
  }
};
```

### How to Replace with Real Images

1. **Download images from Obladi's Instagram/Facebook**
   - Instagram: https://www.instagram.com/obladicoffee/
   - Facebook: https://www.facebook.com/ObladiCoffee/
   - Key posts:
     - DM44gFpoP10 (Sunday brunch)
     - DITrBwLoWUJ (Café atmosphere)
     - DHmISslo2L1 (Big announcement)
     - DOysVzVjJ9a (Loyalty card)

2. **Create folder structure**
   ```
   public/
   └── images/
       ├── menu/
       │   ├── scrambled-eggs.jpg
       │   ├── avocado-toast.jpg
       │   └── ...
       ├── gallery/
       │   ├── brunch.jpg
       │   ├── ambiance.jpg
       │   └── ...
       └── about/
           ├── interior.jpg
           └── plants.jpg
   ```

3. **Update imageConfig.js**
   ```javascript
   export const imageConfig = {
     hero: '/images/hero.jpg',
     menu: {
       scrambledEggs: '/images/menu/scrambled-eggs.jpg',
       // ...
     },
     // ...
   };
   ```

4. **Optimize images**
   - Compress with TinyPNG or similar
   - Recommended sizes:
     - Hero: 1200x800px
     - Menu: 400x300px
     - Gallery: 500x500px (square)
     - About: 600x400px

---

## 📁 File Structure

```
obladi-coffee/
├── public/
│   ├── index.html
│   └── images/  (create this folder)
│
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   ├── HeroSection.js & HeroSection.css
│   │   ├── MenuSection.js & MenuSection.css
│   │   ├── AboutSection.js & AboutSection.css
│   │   ├── GallerySection.js & GallerySection.css
│   │   ├── ContactSection.js & ContactSection.css
│   │   └── Footer.js & Footer.css
│   │
│   ├── assets/
│   │   └── imageConfig.js  (NEW - image configuration)
│   │
│   ├── App.js (main component)
│   ├── App.css (global styles & animations)
│   └── index.js
│
└── package.json
```

---

## 🚀 Deployment

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Local Development
```bash
npm install
npm start
```
Runs at: http://localhost:3000 (or 3001 if port taken)

### Build for Production
```bash
npm run build
```
Creates optimized build in `build/` folder

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`
5. Deploy!

### Deploy to Vercel
1. Push code to GitHub
2. Import project to Vercel
3. Vercel auto-detects React settings
4. Deploy!

---

## 📋 To-Do Checklist

- [ ] Replace Unsplash images with real Obladi Coffee photos
- [ ] Update ContactSection with real phone number/email
- [ ] Add Google Maps embed (if location provided)
- [ ] Implement email form submission (backend needed)
- [ ] Add WhatsApp contact button
- [ ] Create about page with expansion announcements
- [ ] Add menu PDF download option
- [ ] Implement loyalty program page
- [ ] Add Instagram feed integration
- [ ] Set up analytics (Google Analytics)
- [ ] Submit to search engines (Google Search Console)
- [ ] Add favicon (Obladi logo)
- [ ] Optimize performance (Lighthouse)
- [ ] Mobile testing on real devices

---

## 💡 Future Enhancements

### Content
- Online ordering system
- Reservation booking
- Loyalty program details
- Blog/news section
- Team member profiles
- Testimonials section

### Technical
- Dark mode toggle
- Multi-language support (FR/AR)
- Progressive Web App (PWA)
- Real-time menu updates
- Order tracking
- User accounts

### Marketing
- Email newsletter signup
- Social media feeds
- Customer reviews section
- Special offers/promotions
- Event calendar
- Referral program

---

## 🎯 Quick Links

### Social Media
- Instagram: https://www.instagram.com/obladicoffee/
- Facebook: https://www.facebook.com/ObladiCoffee/

### Free Resources
- Images: Unsplash, Pexels, Pixabay
- Icons: Font Awesome, Feather Icons
- Colors: Coolors.co
- Fonts: Google Fonts (already imported)

### Tools
- Code Editor: VS Code
- Deployment: Netlify / Vercel
- Image Compression: TinyPNG
- SEO Checker: Google Search Console

---

## 📞 Support

For questions about implementation:
1. Check component files (src/components/)
2. Review imageConfig.js for image paths
3. Check App.css for global animations
4. Consult component-specific CSS files

---

**Website Status**: ✅ Ready for Images & Content Customization

The website is fully functional with placeholder content and images. Once you add real photos and finalize details, it's ready to deploy to production! 🎉☕🌿
