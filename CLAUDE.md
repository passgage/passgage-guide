# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **professional, interactive installation guide website** for Passgage, an HR mobile application. The repository contains a modern, single-page HTML application with phone mockup support for mobile screenshots.

**Key Characteristics:**
- Single-page HTML application with advanced CSS and vanilla JavaScript
- Professional design aligned with Passgage.com branding
- Phone mockup frames for displaying mobile app screenshots
- Optimized for Vercel deployment
- All content in Turkish language
- No build system or framework dependencies

## Development Workflow

### Viewing the Guide Locally

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Serve with Python
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Serve with Node.js (if http-server is installed)
npx http-server -p 8000
```

### Making Changes

1. Edit `index.html` directly
2. Refresh browser to see changes
3. No compilation or build step required

### Adding Screenshots

1. Take mobile app screenshots (iPhone/Android)
2. Optimize images (max 500KB, 1170x2532px recommended)
3. Save to `screenshots/` directory with descriptive names
4. Update `index.html` screenshot placeholders
5. See `screenshots/README.md` for detailed instructions

## Architecture

### New File Structure (Updated 2024)

```
passgage_guide/
├── index.html                          # Main application (NEW - modern version)
├── passgage-kurulum-rehberi.html       # Legacy version (kept for reference)
├── CLAUDE.md                            # This file
├── DEPLOYMENT.md                        # Vercel deployment guide
├── vercel.json                          # Vercel configuration
├── .gitignore                           # Git ignore rules
├── screenshots/                         # Screenshot assets
│   └── README.md                        # Screenshot guide
├── Passgage-Primary-Logo.png           # Brand logo asset
└── Passgage_Tam_Kullanım_Kılavuzu.pdf  # Full usage manual (Turkish)
```

### HTML Document Structure

The `index.html` file is organized into these main sections:

1. **Header Navigation** (Fixed)
   - Passgage logo and branding badge
   - 6-step progress indicator with active/completed states
   - Smooth scroll navigation between sections

2. **Hero Section**
   - Animated gradient background with moving grid pattern
   - Floating icon with animation
   - Call-to-action buttons

3. **Six Content Steps** (Main sections)
   - **Step 1:** App download (App Store, Google Play, Huawei AppGallery) + screenshot showcase
   - **Step 2:** Login process (username, password, device pairing) + screenshot showcase
   - **Step 3:** Check-in methods (NFC, QR code) + screenshot showcase
   - **Step 4:** NFC activation (device-specific guides for Android, iOS, Huawei)
   - **Step 5:** Troubleshooting (accordion-based FAQ)
   - **Step 6:** Admin panel instructions

4. **Contact Section**
   - Support email and contact information
   - Animated contact icon

5. **Footer**
   - Copyright and branding

### Technical Components

**Design System (Aligned with Passgage.com):**
- **Font Family:** 'Plus Jakarta Sans' (Google Fonts) - matches main site
- **Primary Colors:**
  - Red: #FF501D (primary brand color)
  - Gold: #FFD700 (accent)
  - Blue: #2872fa (secondary accent)
- **Gradients:** `linear-gradient(135deg, #FF501D 0%, #FFD700 100%)`
- **Typography:** Weights 300-800, responsive sizing with `clamp()`
- **Spacing:** rem-based measurements
- **Shadows:** Multiple levels (sm, md, lg, xl, 2xl, glow, glow-lg)

**CSS Architecture:**
- CSS Custom Properties (variables) for theming
- Mobile-first responsive design
- Flexbox and Grid layouts
- Advanced animations:
  - Float animation for hero icons
  - Grid movement animation
  - Pulse animation for contact section
  - Fade-up animations on scroll
  - Hover transforms and transitions
- Responsive breakpoints: 480px, 768px, 1024px

**JavaScript Features:**
- `toggleAccordion(header)` - Controls FAQ accordion (single active state)
- Progress step navigation with smooth scrolling
- Intersection Observer API for:
  - Progress tracking during scroll
  - Fade-in animations on content visibility
- Header shadow on scroll detection
- Smooth scroll for anchor links

**Phone Mockup System (NEW):**
- `.phone-mockup` - Container for phone frame
- `.phone-frame` - Device frame with realistic shadows
- `.phone-screen` - Screen content area (9:19.5 aspect ratio)
- `.phone-notch` - iPhone-style notch at top
- `.screenshot-placeholder` - Placeholder UI for missing screenshots
- `.screenshot-showcase` - Grid layout for phone + info points
- `.info-point` - Feature highlights next to screenshots

### External Dependencies (CDN-loaded)
- Google Fonts: 'Plus Jakarta Sans' font family
- Font Awesome 6.5.1: Icon library
- Passgage logo (hosted at passgage.com)

## Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

See `DEPLOYMENT.md` for complete deployment instructions.

**Vercel Configuration (`vercel.json`):**
- Static site build
- Cache headers for performance
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Special cache rules for screenshots (24h immutable)

### Alternative Deployment

Can be deployed to any static hosting:
- **Netlify:** Drag and drop or Git deploy
- **GitHub Pages:** Push to `gh-pages` branch
- **Cloudflare Pages:** Git integration
- **Traditional hosting:** Upload via FTP/SFTP

## Important Development Notes

### Language
All UI text and content is in **Turkish**. When making content changes, maintain Turkish language consistency and cultural appropriateness.

### Screenshot Integration

To replace placeholder screenshots with real ones:

1. Locate the placeholder div:
```html
<div class="screenshot-placeholder">
    <i class="fas fa-mobile-alt"></i>
    <p>Ekran görüntüsü eklenecek:<br>App Store indirme</p>
</div>
```

2. Replace with actual image:
```html
<img src="screenshots/step1-appstore.png" alt="App Store'da Passgage uygulaması">
```

3. Ensure image is optimized (see `screenshots/README.md`)

### Accordion Behavior
The FAQ section in Step 5 uses single-active accordion behavior - only one FAQ can be open at a time. This is intentional UX design for better readability.

### Progress Navigation
The progress steps in the header are both informational and interactive:
- Click on any step to scroll to that section
- Steps update automatically as user scrolls through content
- Visual states: pending (gray), active (gradient), completed (red border)

### Animations
Multiple animation effects are implemented:
- **Hero icon:** Floating animation (3s infinite)
- **Hero grid:** Moving pattern (20s infinite)
- **Contact icon:** Pulse animation (2s infinite)
- **Fade-up:** Scroll-triggered content reveal
- **Hover effects:** Transforms, shadows, color transitions

All animations use `cubic-bezier` timing for smooth, professional feel.

### Browser Compatibility
The code uses modern JavaScript and CSS:
- Intersection Observer API
- ES6+ syntax (arrow functions, template literals, const/let)
- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- CSS backdrop-filter

**Target:** Modern browsers (Chrome, Firefox, Safari, Edge - latest 2-3 versions)
**Note:** IE11 is not supported

## Performance Optimization

### Current Optimizations
- Single HTML file (no external CSS/JS except CDN fonts)
- Optimized CSS (critical styles inline)
- Lazy-loaded animations (triggered by Intersection Observer)
- Efficient event listeners (delegated where possible)

### Before Deployment
1. Optimize all screenshot images (TinyPNG, ImageOptim, etc.)
2. Keep images under 500KB each
3. Use modern image formats (WebP with PNG fallback if needed)
4. Test on slow 3G connection
5. Check Lighthouse scores (aim for 90+ on all metrics)

## Best Practices When Editing

### Adding New Sections
1. Follow existing section structure:
```html
<section class="section fade-up" id="stepX">
    <div class="section-header">
        <div class="section-number">X</div>
        <div>
            <h2 class="section-title">Başlık</h2>
            <p class="section-subtitle">Alt başlık</p>
        </div>
    </div>
    <!-- Content here -->
</section>
```

2. Add corresponding progress step in header
3. Update JavaScript observers if needed

### Modifying Colors
Use CSS custom properties (variables) instead of hardcoded values:
```css
/* Good */
background: var(--primary-red);

/* Avoid */
background: #FF501D;
```

### Adding Icons
Use Font Awesome 6.5.1 icons:
```html
<i class="fas fa-icon-name"></i>
```

Browse icons: https://fontawesome.com/icons

## Related Projects

This repository is part of the larger Passgage ecosystem:
- `passgage-main` - Main application
- `passgage-mobile` - Mobile application (source of screenshots)
- `web-api` - Backend API
- `portal` - Web portal (admin interface)
- `workflow-engine` - Workflow processing
- And others in the parent `/passgage/` directory

## Troubleshooting

### Screenshots Not Displaying
- Check file paths (case-sensitive)
- Verify files exist in `screenshots/` directory
- Check browser console for 404 errors
- Clear browser cache (Cmd/Ctrl + Shift + R)

### Animations Not Working
- Check browser compatibility (needs modern browser)
- Verify Intersection Observer support
- Check console for JavaScript errors

### Layout Issues on Mobile
- Test on actual devices, not just browser devtools
- Check responsive breakpoints (480px, 768px, 1024px)
- Verify viewport meta tag is present

### Deployment Issues
- See `DEPLOYMENT.md` for detailed troubleshooting
- Check Vercel logs: `vercel logs`
- Verify `vercel.json` configuration

## Version History

- **v2.0 (2024):** Complete redesign with Passgage.com branding, phone mockups, enhanced animations
- **v1.0 (2023):** Initial version (see `passgage-kurulum-rehberi.html`)

---

**Last Updated:** 2024
**Maintained by:** Passgage Development Team
