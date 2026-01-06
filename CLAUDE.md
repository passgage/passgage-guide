# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Passgage Installation Guide** - A modern, multi-page installation guide website for Passgage HR mobile application. Platform-specific guides (iOS, Android, Access Tag) with visual step-by-step instructions.

**Live URL:** https://kilavuz.passgage.com

**Key Characteristics:**
- Multi-page HTML application (4 pages: landing + 3 platform guides)
- Tailwind CSS + Custom CSS hybrid architecture
- Mobile-first responsive design
- Turkish language content
- No build system required - static HTML deployment
- Deployed on Vercel with auto-deployment from main branch

## Development Workflow

### Viewing the Guide Locally

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Serve with Python (recommended for testing all pages)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Serve with Node.js
npx http-server -p 8000
```

**Test all pages:**
- Landing: `http://localhost:8000/index.html`
- iOS guide: `http://localhost:8000/ios.html`
- Android guide: `http://localhost:8000/android.html`
- Access Tag guide: `http://localhost:8000/access-tag.html`

### Making Changes

1. Edit relevant HTML file (index.html, ios.html, android.html, access-tag.html)
2. Use Tailwind utilities for styling where possible
3. Only add custom CSS for complex components (see Architecture section)
4. Refresh browser to see changes (no build step)

### Deployment

Deployed automatically to Vercel:
```bash
# Commit and push triggers auto-deployment
git add .
git commit -m "Your changes"
git push origin main
```

Manual deployment:
```bash
vercel --prod
```

See `DEPLOYMENT.md` for detailed deployment instructions.

## Architecture

### File Structure

```
passgage_guide/
├── index.html                  # Landing page (platform choice cards)
├── ios.html                    # iOS installation guide (6 steps)
├── android.html                # Android installation guide (6 steps)
├── access-tag.html             # Access Tag installation guide (5 steps)
├── index-backup.html           # Legacy single-page version
│
├── assets/
│   ├── css/
│   │   ├── animations.css      # Keyframe animations (KEEP - not migrated)
│   │   ├── custom-components.css  # Complex custom components only
│   │   ├── common.css          # DEPRECATED - to be removed
│   │   └── components.css      # DEPRECATED - to be removed
│   └── js/
│       ├── common.js           # Analytics, scroll effects, accordion
│       └── navigation.js       # Progress tracking, section observer
│
├── screenshots/
│   ├── ios/                    # iOS app screenshots + README
│   ├── android/                # Android app screenshots + README
│   └── access-tag/             # Access Tag photos + README
│
├── vercel.json                 # Vercel config (cache, security headers)
├── DEPLOYMENT.md               # Deployment guide
├── CLAUDE.md                   # This file
└── README.md                   # Project README
```

### CSS Architecture (Hybrid: Tailwind + Custom)

**Tailwind CSS (via CDN):**
- **Primary approach** for all new components
- Loaded in `<head>` of all 4 HTML files with custom config
- Custom config includes:
  - Platform colors: `passgage-red`, `ios-black`, `android-green`, `tag-blue`
  - Custom shadows: `shadow-soft`, `shadow-card`, `shadow-phone`
  - Custom fonts: `font-sans` (Plus Jakarta Sans)
  - Custom animations: `animate-float`, `animate-fade-in-up`

**Custom CSS (Keep minimal):**
- `animations.css` - Keyframe definitions (@keyframes)
- `custom-components.css` - Only for complex components that can't be Tailwinded:
  - `.phone-mockup` / `.phone-frame` - Complex pseudo-elements
  - `.progress-nav` - Complex state management
  - `.accordion` - Toggle logic with transforms
  - `.hero-bg` / `.hero-grid` - Background effects with pseudo-elements

**When to use what:**
- ✅ **Tailwind**: Layout, spacing, colors, typography, simple hover states
- ⚠️ **Custom CSS**: Complex pseudo-elements, intricate animations, component-specific logic
- ❌ **Avoid**: Inline styles, duplicating Tailwind utilities as custom CSS

### Page Structure

#### Landing Page (index.html)
```
- Header (logo + badge)
- Hero Section (gradient background, floating icon)
- Platform Cards (3 cards):
  - iOS (black/gray gradient) → links to ios.html
  - Android (green gradient) → links to android.html
  - Access Tag (blue gradient) → links to access-tag.html
- Features Overview (4 feature cards)
- Contact Section
- Footer
```

#### Platform Guides (ios.html, android.html, access-tag.html)
```
- Header (logo + badge)
- Progress Navigation (sticky - 5 or 6 steps)
- Hero Section (platform-specific gradient)
- Step Sections (5-6 sections):
  - Section header (number + title)
  - Step content
  - Screenshots in phone mockups (where applicable)
  - Subsections with icon bullets
- Contact Section
- Footer
```

**Step Counts:**
- iOS: 6 steps (Download, Permissions, Login, Check-in, NFC, Troubleshooting)
- Android: 6 steps (Download, Permissions, Login, Device Pairing, NFC, Troubleshooting)
- Access Tag: 5 steps (Contents, Planning, Installation, Configuration, Maintenance)

### JavaScript Architecture

**common.js** - Shared utilities:
- `toggleAccordion(header)` - FAQ accordion (single-active state)
- `initHeaderScrollEffect()` - Header shadow on scroll
- `initFadeUpAnimations()` - Scroll-triggered fade animations (Intersection Observer)
- Google Analytics event tracking

**navigation.js** - Progress tracking:
- `navigationConfig` - Configurable for different step counts
- `initProgressNavigation()` - Smooth scroll navigation
- `initSectionObserver()` - Active section tracking (Intersection Observer)
- Auto-updates progress steps as user scrolls

**Key behavior:**
- Progress nav updates based on scroll position
- Click on step → smooth scroll to section
- Accordion allows only 1 item open at a time
- All animations use Intersection Observer for performance

### Design System

**Colors (Tailwind config):**
```javascript
// Primary brand colors
'passgage-red': '#FF501D'
'passgage-gold': '#FFD700'
'passgage-blue': '#2872fa'

// Platform-specific
'ios-black': '#1d1d1f'
'ios-gray': '#86868b'
'android-green': '#3ddc84'
'android-dark': '#073042'
'tag-blue': '#2872fa'
'tag-navy': '#1a5490'

// Neutrals
'neutral-{50,100,200,800,900}'
```

**Typography:**
- Font: 'Plus Jakarta Sans' (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800
- Responsive sizing: Use Tailwind's responsive text utilities

**Shadows:**
- `shadow-soft`: Subtle depth
- `shadow-card`: Card elevations
- `shadow-medium`: Medium depth
- `shadow-strong`: High emphasis
- `shadow-phone`: Phone mockup depth

**Responsive Breakpoints:**
- Mobile: < 768px (base, mobile-first)
- Tablet: `md:` (≥768px)
- Desktop: `lg:` (≥1024px)
- Large: `xl:` (≥1280px)

### Screenshot Integration

**File naming convention:** `stepX-description.jpg`

**Examples:**
```
screenshots/ios/step1-appstore.png
screenshots/android/step2-location-permission.jpg
screenshots/android/step3-1-login-screen.jpg  # Multiple per step
screenshots/access-tag/step3-adhesive-mounting.jpg
```

**Integration in HTML:**
```html
<!-- Phone mockup with screenshot -->
<div class="phone-mockup">
    <div class="phone-frame android">  <!-- or 'ios' -->
        <div class="phone-notch android"></div>  <!-- iOS/Android specific -->
        <div class="phone-screen">
            <img src="screenshots/android/step3-1-login-screen.jpg"
                 alt="Passgage giriş ekranı"
                 loading="lazy">
        </div>
    </div>
</div>
```

**Placeholder (when screenshot missing):**
```html
<div class="screenshot-placeholder">
    <i class="fas fa-camera"></i>
    <p>Screenshot Placeholder</p>
</div>
```

See `screenshots/README.md` for detailed screenshot requirements.

### Platform-Specific Features

**iOS Guide (ios.html):**
- Automatic NFC (no setup required)
- Face ID / Touch ID authentication
- Safari-specific troubleshooting
- App Store download only

**Android Guide (android.html):**
- Battery optimization section (CRITICAL for Android users)
- Manufacturer-specific NFC paths (Samsung, Huawei, Xiaomi, Stock)
- Google Play + Huawei AppGallery download options
- MIUI/OneUI specific permissions
- SMS-based device pairing (banking app style, one device only)

**Access Tag Guide (access-tag.html):**
- Physical installation (3 methods: adhesive, screw, magnetic)
- Location planning (height, visibility, environment)
- QR configuration via admin panel
- Maintenance schedule

## Common Development Tasks

### Adding a New Section to a Guide

1. Add section HTML:
```html
<section class="section fade-up" id="step7">
    <div class="section-header">
        <div class="section-number">7</div>
        <div>
            <h2 class="section-title">Yeni Adım</h2>
            <p class="section-subtitle">Açıklama</p>
        </div>
    </div>
    <!-- Content -->
</section>
```

2. Add progress step to header navigation
3. Update step count in `navigation.js` if needed
4. Ensure `fade-up` class is present for scroll animation

### Updating Tailwind Configuration

Edit the `<script>` block in HTML `<head>`:
```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'new-color': '#hexcode'
        }
      }
    }
  }
</script>
```

Apply to all 4 HTML files for consistency.

### Adding Custom Animations

Add to `animations.css` (kept separate):
```css
@keyframes myAnimation {
    from { transform: translateY(0); }
    to { transform: translateY(-10px); }
}
```

Reference in Tailwind config:
```javascript
animation: {
    'my-anim': 'myAnimation 2s ease-in-out infinite'
}
```

Use: `class="animate-my-anim"`

### Creating a New Platform Guide

1. Duplicate existing guide HTML (e.g., `ios.html`)
2. Update platform-specific:
   - Tailwind color classes (gradients, buttons)
   - Step content and count
   - Screenshot paths
   - Page title and meta description
3. Add link from `index.html` platform cards
4. Update Tailwind config if new colors needed

## Google Analytics

**Tracking ID:** `G-374JCV17P7`

**Custom Events Tracked:**
- `platform_choice` - Landing page platform card clicks
- `download_click` - App store download buttons
- `navigation_click` - Progress step clicks
- `faq_open` / `faq_close` - Accordion interactions
- `contact_click` - Email clicks
- `scroll_depth` - 25%, 50%, 75%, 100% scroll milestones

Event tracking code is in `common.js` and inline `<script>` blocks.

## Best Practices

### Content Updates
- All content is **Turkish** - maintain language consistency
- Use formal but friendly tone (professional HR context)
- Target audience: Retail workers, couriers, warehouse staff (low technical literacy)
- Keep instructions simple, visual-first

### Styling Approach
1. **Try Tailwind first** - Use utility classes for layout, spacing, colors
2. **Check if pattern exists** - Review existing sections for similar patterns
3. **Custom CSS last resort** - Only for truly complex components
4. **Mobile-first** - Start with mobile layout, add `md:` and `lg:` breakpoints

### Performance
- Keep images < 500KB (optimize with TinyPNG, ImageOptim)
- Use `loading="lazy"` for all images
- Avoid large custom CSS - leverage Tailwind's purge (automatic with CDN)
- Test on slow 3G connection before deployment

### Accessibility
- All images must have descriptive `alt` text
- Use semantic HTML (`<section>`, `<nav>`, `<header>`, `<footer>`)
- Ensure sufficient color contrast (WCAG AA minimum)
- Test keyboard navigation for progress steps

## Troubleshooting

### Tailwind classes not working
- Check if Tailwind CDN script is loaded in `<head>`
- Verify custom config is present
- Check browser console for errors
- Clear browser cache (Cmd/Ctrl + Shift + R)

### Screenshots not displaying
- Verify file path (case-sensitive on Linux/Vercel)
- Check `screenshots/` directory structure
- Look for 404 errors in Network tab
- Ensure image file extension matches HTML (`.jpg` vs `.png`)

### Progress navigation not updating
- Check `navigation.js` is loaded
- Verify section IDs match step hrefs
- Check browser console for JavaScript errors
- Ensure Intersection Observer is supported (modern browsers only)

### Deployment issues
- See `DEPLOYMENT.md` for detailed troubleshooting
- Check Vercel deployment logs: `vercel logs`
- Verify `vercel.json` configuration
- Test locally before deploying

### Animations not working
- Check browser supports Intersection Observer
- Verify `animations.css` is loaded
- Check `common.js` is loaded and executing
- Test in modern browser (Chrome, Firefox, Safari latest)

## Migration Status (Tailwind CSS)

**Current state:** Partial migration in progress

**Completed:**
- ✅ Tailwind CDN added to all 4 HTML files
- ✅ `index.html` fully migrated (~90% Tailwind)

**In Progress:**
- ⏳ `ios.html` - Pending
- ⏳ `android.html` - Pending (most complex due to new screenshot layout)
- ⏳ `access-tag.html` - Pending

**To be created:**
- ⏳ `custom-components.css` - Extract complex components from `components.css`

**To be removed (after migration):**
- ❌ `common.css` - Replace with Tailwind config
- ❌ `components.css` - Replace with Tailwind utilities + custom-components.css

**Keep:**
- ✅ `animations.css` - Keyframe animations (can't be Tailwinded)

See migration plan in `/Users/gokhanalmas/.claude/plans/peppy-popping-fiddle.md`

## Related Documentation

- **README.md** - Project overview, features, tech stack
- **DEPLOYMENT.md** - Vercel deployment guide
- **screenshots/README.md** - Screenshot requirements and naming conventions
- **screenshots/ios/README.md** - iOS-specific screenshot checklist
- **screenshots/android/README.md** - Android-specific screenshot checklist
- **screenshots/access-tag/README.md** - Access Tag photo checklist

## External Resources

- **Live Site:** https://kilavuz.passgage.com
- **Passgage Main Site:** https://passgage.com
- **Support Email:** deneyim@passgage.com
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Font Awesome:** https://fontawesome.com/icons
- **Google Fonts:** https://fonts.google.com/specimen/Plus+Jakarta+Sans

---

**Last Updated:** 2026-01-06
**Maintained by:** Passgage Development Team with Claude Code
