/**
 * OBLADI COFFEE - IMAGE INTEGRATION GUIDE
 * 
 * This guide explains how to replace placeholder images
 * with real photos from Obladi Coffee's social media
 */

// ============================================
// STEP 1: LOCATE INSTAGRAM POSTS
// ============================================

const instagramPosts = {
  brunch: 'https://www.instagram.com/p/DM44gFpoP10/',
  atmosphere: 'https://www.instagram.com/reel/DITrBwLoWUJ/',
  announcement: 'https://www.instagram.com/reel/DHmISslo2L1/',
  loyaltyCard: 'https://www.instagram.com/p/DOysVzVjJ9a/'
};

// ============================================
// STEP 2: DOWNLOAD & PREPARE IMAGES
// ============================================

/*
 * Method A: Direct Screenshot
 * 1. Go to Instagram post
 * 2. Right-click image → Save Image As
 * 3. Name it appropriately (e.g., "brunch-sunday.jpg")
 * 4. Save to: public/images/ folder
 * 
 * Method B: High-Quality Download (Tools)
 * - Use tools like DownloadGram or similar
 * - Ensures better quality than screenshots
 * 
 * Method C: Use Original Image Link
 * - Instagram sometimes has direct image URLs
 * - Try right-clicking → Copy Image Link
 * - Paste into imageConfig.js
 */

// ============================================
// STEP 3: FOLDER STRUCTURE
// ============================================

/*
 * Create this folder structure:
 * 
 * obladi-coffee/
 * ├── public/
 * │   └── images/
 * │       ├── hero/
 * │       │   └── hero-interior.jpg
 * │       ├── menu/
 * │       │   ├── scrambled-eggs.jpg
 * │       │   ├── avocado-toast.jpg
 * │       │   ├── brunch-bowl.jpg
 * │       │   ├── espresso.jpg
 * │       │   ├── latte.jpg
 * │       │   └── juice.jpg
 * │       ├── gallery/
 * │       │   ├── brunch-1.jpg
 * │       │   ├── cafe-ambiance.jpg
 * │       │   ├── coffee-art.jpg
 * │       │   ├── work-space.jpg
 * │       │   ├── brunch-bowls.jpg
 * │       │   └── plants.jpg
 * │       └── about/
 * │           ├── interior.jpg
 * │           └── plants-detail.jpg
 */

// ============================================
// STEP 4: UPDATE imageConfig.js
// ============================================

/*
 * Open: src/assets/imageConfig.js
 * 
 * REPLACE ALL UNSPLASH URLs WITH:
 * 
 * export const imageConfig = {
 *   hero: '/images/hero/hero-interior.jpg',
 *   
 *   menu: {
 *     scrambledEggs: '/images/menu/scrambled-eggs.jpg',
 *     avocadoToast: '/images/menu/avocado-toast.jpg',
 *     brunchBowl: '/images/menu/brunch-bowl.jpg',
 *     espresso: '/images/menu/espresso.jpg',
 *     latte: '/images/menu/latte.jpg',
 *     freshJuice: '/images/menu/juice.jpg'
 *   },
 *   
 *   gallery: {
 *     brunch: '/images/gallery/brunch-1.jpg',
 *     ambiance: '/images/gallery/cafe-ambiance.jpg',
 *     coffee: '/images/gallery/coffee-art.jpg',
 *     workspace: '/images/gallery/work-space.jpg',
 *     bowls: '/images/gallery/brunch-bowls.jpg',
 *     plants: '/images/gallery/plants.jpg'
 *   },
 *   
 *   about: {
 *     interior: '/images/about/interior.jpg',
 *     plants: '/images/about/plants-detail.jpg'
 *   }
 * };
 */

// ============================================
// STEP 5: IMAGE OPTIMIZATION
// ============================================

/*
 * BEFORE uploading, optimize images:
 * 
 * 1. Compress size:
 *    - Use TinyPNG.com
 *    - Or ImageOptim (Mac) / FileOptimizer (Windows)
 *    - Target: Reduce by 30-50%
 * 
 * 2. Resize to correct dimensions:
 *    - Hero: 1200x800px (or wider)
 *    - Menu items: 400x300px
 *    - Gallery: 500x500px (square)
 *    - About: 600x400px
 * 
 * 3. Export as JPEG (80% quality)
 *    - Best for photos
 *    - Smaller file size than PNG
 * 
 * 4. Check file sizes:
 *    - Hero: <150KB
 *    - Gallery items: <80KB each
 *    - Menu items: <60KB each
 */

// ============================================
// STEP 6: RECOMMENDED CONTENT
// ============================================

/*
 * HERO SECTION:
 * - Interior shot of café with coffee cups
 * - Should show botanical elements + modern design
 * - High quality, inviting
 * 
 * MENU SECTION:
 * - Professional food photography
 * - Good lighting (natural preferred)
 * - Show plating & presentation
 * 
 * GALLERY SECTION:
 * - Mix of food, atmosphere, and people
 * - Show the cozy vibe
 * - Include plant/botanical details
 * - Action shots (people working/enjoying)
 * 
 * ABOUT SECTION:
 * - Close-up of interior design
 * - Plant details
 * - Shows care & attention to detail
 */

// ============================================
// STEP 7: VERIFICATION
// ============================================

/*
 * After uploading images:
 * 
 * 1. Restart development server:
 *    npm start
 * 
 * 2. Open http://localhost:3001
 * 
 * 3. Check each section:
 *    - Hero loads correctly
 *    - Menu items display properly
 *    - Gallery shows all 6 images
 *    - Images are clear and not distorted
 * 
 * 4. Test responsive:
 *    - Resize browser window
 *    - Check mobile view
 *    - Verify images scale properly
 * 
 * 5. Lighthouse performance:
 *    - Chrome DevTools → Lighthouse
 *    - Target: >90 for Performance
 */

// ============================================
// STEP 8: TROUBLESHOOTING
// ============================================

/*
 * IMAGE NOT SHOWING?
 * 
 * ✓ Check file path:
 *   - Must start with /images/
 *   - Filename must match exactly (case-sensitive)
 *   - Correct format: /images/menu/scrambled-eggs.jpg
 * 
 * ✓ Verify file exists:
 *   - Open public/images/ folder
 *   - Check file is there
 *   - Check file extension
 * 
 * ✓ Clear cache:
 *   - Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R)
 *   - Close DevTools
 *   - Restart npm start
 * 
 * ✓ Check browser console:
 *   - Open Chrome DevTools (F12)
 *   - Go to Console tab
 *   - Look for 404 errors (file not found)
 * 
 * PERFORMANCE SLOW?
 * 
 * ✓ Compress images more
 * ✓ Use WebP format (if supported)
 * ✓ Lazy load images (implement later)
 * ✓ Use CDN for images (Cloudinary, Imgix)
 */

// ============================================
// STEP 9: ADVANCED OPTIONS
// ============================================

/*
 * Option A: Cloud Storage (Recommended for updates)
 * - Upload images to Cloudinary
 * - Update imageConfig.js with cloud URLs
 * - Advantage: Update images without rebuilding
 * 
 * Example:
 * hero: 'https://res.cloudinary.com/obladicoffee/image/upload/v1234/hero.jpg'
 * 
 * Option B: Instagram Embed
 * - Embed Instagram posts directly
 * - Use react-instagram-embed
 * - Real-time updates from Instagram
 * 
 * Option C: Image Lazy Loading
 * - Load images only when visible
 * - Improves page speed
 * - Use react-lazy-load-image-component
 */

// ============================================
// COMMON IMAGE SIZES
// ============================================

const imageSizes = {
  hero: {
    width: 1200,
    height: 800,
    maxSize: '150KB'
  },
  menu: {
    width: 400,
    height: 300,
    maxSize: '60KB'
  },
  gallery: {
    width: 500,
    height: 500,
    maxSize: '80KB'
  },
  about: {
    width: 600,
    height: 400,
    maxSize: '100KB'
  }
};

// ============================================
// QUICK CHECKLIST
// ============================================

/*
 * ☐ Created public/images/ folder
 * ☐ Created subfolders (hero, menu, gallery, about)
 * ☐ Downloaded photos from Obladi Instagram
 * ☐ Optimized all images (compressed & resized)
 * ☐ Uploaded images to public/images/
 * ☐ Updated imageConfig.js with new paths
 * ☐ Restarted npm start
 * ☐ Verified all images load correctly
 * ☐ Tested responsive design
 * ☐ Checked Lighthouse performance
 * ☐ Deployed to Netlify/Vercel
 */

// ============================================
// NEXT STEPS AFTER IMAGES
// ============================================

/*
 * 1. Add real contact information
 * 2. Add Google Maps location
 * 3. Set up email form submission
 * 4. Add WhatsApp contact button
 * 5. Implement online menu system
 * 6. Add loyalty program tracker
 * 7. Create announcement banner
 * 8. Set up email newsletter
 * 9. Add analytics tracking
 * 10. Submit to Google Search Console
 */

export default imageGuide;
