# How to Add Your Real Instagram/Facebook Photos to the Gallery

## Option 1: Download & Upload Images (RECOMMENDED)

### Step 1: Download Images from Instagram
1. Visit these Instagram posts:
   - Post 1: https://www.instagram.com/p/CiZjQHur5vS/
   - Post 2: https://www.instagram.com/p/CUzPftCIxTk/
   - Post 3: https://www.instagram.com/p/CSyvt2eIhc6/
   - Post 4: https://www.instagram.com/p/CMB8lxoH1vO/

2. Right-click on each image → "Save image as..."

3. Save them with these names:
   - `brunch.jpg`
   - `cafe-ambiance.jpg`
   - `specialty-coffee.jpg`
   - `workspace.jpg`

### Step 2: Create Folders (Windows File Explorer)
1. Open: `C:\Users\Bench\obladi-coffee\public`
2. Create new folder: `images`
3. Create these subfolders inside `images`:
   - `gallery`

Your structure should look like:
```
public/
├── images/
│   └── gallery/
│       ├── brunch.jpg
│       ├── cafe-ambiance.jpg
│       ├── specialty-coffee.jpg
│       └── workspace.jpg
```

### Step 3: Update imageConfig.js

Replace the gallery section in `src/assets/imageConfig.js` with:

```javascript
  gallery: {
    brunch: '/images/gallery/brunch.jpg',
    ambiance: '/images/gallery/cafe-ambiance.jpg',
    coffee: '/images/gallery/specialty-coffee.jpg',
    workspace: '/images/gallery/workspace.jpg',
    bowls: '/images/gallery/brunch-bowls.jpg',
    plants: '/images/gallery/green-oasis.jpg'
  },
```

### Step 4: Save & Refresh
- After updating imageConfig.js, save the file
- Refresh browser at http://localhost:3002
- Your real Instagram photos should now appear in the gallery! ✨

---

## Option 2: Use Image URLs Directly (FASTER)

If you want to use the images without downloading:

1. Get shareable links from Instagram/Facebook posts
2. Update `imageConfig.js` with those URLs

---

## Image Optimization Tips

### Before uploading, compress images:
- Target size: 300-400KB per image
- Format: JPG (better compression than PNG)
- Dimensions: 500x500px (square) for gallery

### Online compression tools:
- TinyPNG.com
- Compressor.io
- ImageOptim (Mac)

---

## Troubleshooting

### Images not showing?
1. Check file path - should be lowercase: `/images/gallery/filename.jpg`
2. File extension must be `.jpg` or `.png`
3. Refresh browser (Ctrl+Shift+R for hard refresh)
4. Check browser console (F12) for error messages

### Still not working?
1. Make sure npm start is still running
2. Files must be in `public/images/gallery/` folder (not `src`)
3. Verify imageConfig.js was saved correctly

---

## Need Help?

After you add the images, the gallery will automatically display them! 🖼️

Let me know when you've:
1. Downloaded the images
2. Created the folders
3. Updated imageConfig.js

Then I can verify everything works! ✨
