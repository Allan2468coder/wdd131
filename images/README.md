# Product Images — ALLAN SMOOKEY'S FASHIONZ

This folder contains all product and hero images used across the website.

## Image Files Required

The following image files are referenced by the project and should be saved in this folder with exact names:

### Product Images (used in main.js)

| Filename | Product Name | Usage | Recommended Dimensions | Aspect Ratio |
|----------|--------------|-------|------------------------|--------------|
| `flux-hoodie.jpg` | Flux Hoodie | Product grid & detail page | 400×300px | 4:3 |
| `power-laces-sneakers.jpg` | Power Laces Sneakers | Product grid & detail page | 400×300px | 4:3 |
| `time-circuits-jacket.jpg` | Time Circuits Jacket | Product grid & detail page | 400×300px | 4:3 |
| `low-voltage-tee.jpg` | Low Voltage Tee | Product grid & detail page | 400×300px | 4:3 |
| `warp-equalizer-cap.jpg` | Warp Equalizer Cap | Product grid & detail page | 400×300px | 4:3 |

### Hero Image (used in index.html)

| Filename | Location | Usage | Recommended Dimensions | Aspect Ratio |
|----------|----------|-------|------------------------|--------------|
| `hero-streetwear.jpg` | Home page hero section | Hero banner image | 1200×800px or 1400×600px | 16:9 (wide) or 7:3 (ultrawide) |

## Display Specifications

### Product Card Images
- **CSS Height**: 180px (fixed)
- **CSS Width**: 100% of card (responsive)
- **Fit Method**: `object-fit: cover` (image fills space while maintaining aspect ratio)
- **Optimal Image Size**: 400×300px minimum
- **Mobile View**: Cards display at ~200px width; images scale proportionally
- **Desktop View**: Cards display at ~220-280px width; images scale proportionally

### Hero Image
- **CSS Height**: Auto (responsive), max-height 450px
- **CSS Width**: 100% of container (responsive)
- **Fit Method**: `object-fit: cover` (maintains aspect ratio)
- **Optimal Image Size**: 1200×800px (16:9 aspect ratio)
- **Mobile View**: Full width, height scales to fit 16:9
- **Desktop View**: Full width up to container max (1100px), height ~650px at 16:9 ratio

## Performance Guidelines

- **Target file size**: 60-120KB per product image (after optimization)
- **Hero image size**: 150-250KB (after optimization)
- **Format**: JPG for photographs, PNG for graphics with transparency
- **Optimization**: Use tools like TinyJPG, ImageOptim, or Squoosh for compression
- **Lazy Loading**: All product images use HTML `loading="lazy"` attribute

## Image Preparation Steps

1. **Resize** to optimal dimensions above
2. **Crop** to the specified aspect ratio if needed
3. **Compress** to target file size using optimization tool
4. **Name** exactly as specified (lowercase, hyphens only)
5. **Save** as JPG or PNG in this folder
6. **Test** by opening project in browser to verify display

## Image Naming Convention

All image filenames follow these rules:
- **Lowercase** letters only
- **Hyphens** (-) to separate words (no spaces or underscores)
- **File extension** in lowercase (.jpg or .png)
- **Pattern**: `product-category-descriptor.jpg`

### Examples
✅ `flux-hoodie.jpg`
✅ `power-laces-sneakers.jpg`
✅ `hero-streetwear.jpg`

❌ ~~Flux_Hoodie.JPG~~
❌ ~~Power LacesSnkers.jpg~~
❌ ~~Hero Streetwear.PNG~~

## How to Add Images

1. Save the product images you've prepared with the exact filenames listed above.
2. Ensure all images are optimized (max ~150KB per image for fast loading).
3. Use consistent dimensions (1200×800px is recommended).
4. Verify all filenames match the table above exactly.

## Image Optimization Tips

- Compress images to reduce file size without losing quality.
- Use `.jpg` for photographs; `.png` for graphics with transparency.
- Consider creating responsive variants (e.g., `product-name@2x.jpg` for retina displays).
- All product images use `loading="lazy"` in the HTML for performance.

---

**Last Updated**: 2026-06-06
**Team**: ALLAN SMOOKEY'S FASHIONZ
