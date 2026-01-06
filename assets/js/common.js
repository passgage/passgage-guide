/**
 * common.js - Common functionality and utilities
 * Includes: Analytics tracking, scroll effects, accordion, animations
 */

// ========================================
// ACCORDION TOGGLE FUNCTIONALITY
// ========================================
/**
 * Toggle accordion item open/close state
 * @param {HTMLElement} header - The accordion header element
 */
function toggleAccordion(header) {
    const item = header.parentElement;
    const wasActive = item.classList.contains('active');

    // Close all accordion items
    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

    // Open clicked item if it wasn't active
    if (!wasActive) {
        item.classList.add('active');
    }
}


// ========================================
// SCROLL EFFECTS
// ========================================

/**
 * Header shadow effect on scroll
 * Adds 'scrolled' class to header when page scrolls more than 50px
 */
function initHeaderScrollEffect() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Fade-up animation on scroll
 * Elements with 'fade-up' class appear as they scroll into view
 */
function initFadeUpAnimation() {
    const fadeElements = document.querySelectorAll('.fade-up');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    fadeElements.forEach(el => fadeObserver.observe(el));
}

/**
 * Smooth scroll initialization for anchor links
 * Handles smooth scrolling for all internal anchor links (#)
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}


// ========================================
// GOOGLE ANALYTICS CUSTOM EVENT TRACKING
// ========================================

/**
 * Track download button clicks (App Store, Google Play, Huawei)
 */
function initDownloadTracking() {
    document.querySelectorAll('.download-card').forEach(card => {
        card.addEventListener('click', function() {
            const storeName = this.querySelector('h3').textContent;
            gtag('event', 'download_click', {
                'event_category': 'downloads',
                'event_label': storeName,
                'value': 1
            });
            console.log('GA Event: Download click -', storeName);
        });
    });
}

/**
 * Track contact email link clicks
 */
function initContactTracking() {
    const contactEmail = document.querySelector('.contact-email');
    if (contactEmail) {
        contactEmail.addEventListener('click', function() {
            gtag('event', 'contact_click', {
                'event_category': 'engagement',
                'event_label': 'Email Contact',
                'value': 1
            });
            console.log('GA Event: Contact email clicked');
        });
    }
}

/**
 * Track hero CTA button clicks
 */
function initCTATracking() {
    document.querySelectorAll('.hero-actions .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            gtag('event', 'cta_click', {
                'event_category': 'engagement',
                'event_label': btnText,
                'value': 1
            });
            console.log('GA Event: CTA clicked -', btnText);
        });
    });
}

/**
 * Track accordion/FAQ interactions
 */
function initAccordionTracking() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const faqTitle = this.querySelector('h4').textContent;
            const isOpening = !this.parentElement.classList.contains('active');
            gtag('event', isOpening ? 'faq_open' : 'faq_close', {
                'event_category': 'engagement',
                'event_label': faqTitle,
                'value': 1
            });
            console.log('GA Event: FAQ', isOpening ? 'opened' : 'closed', '-', faqTitle);
        });
    });
}

/**
 * Track scroll depth at 25%, 50%, 75%, and 100%
 */
function initScrollDepthTracking() {
    let scrollDepthMarkers = {
        '25': false,
        '50': false,
        '75': false,
        '100': false
    };

    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const scrollPercent = Math.round((scrolled / documentHeight) * 100);

        // Track each depth marker once
        Object.keys(scrollDepthMarkers).forEach(depth => {
            if (scrollPercent >= parseInt(depth) && !scrollDepthMarkers[depth]) {
                scrollDepthMarkers[depth] = true;
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': `${depth}%`,
                    'value': parseInt(depth)
                });
                console.log('GA Event: Scroll depth -', depth + '%');
            }
        });
    });
}

/**
 * Track external link clicks (app stores, etc)
 */
function initExternalLinkTracking() {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            const linkText = this.textContent.trim() || this.href;
            gtag('event', 'external_link', {
                'event_category': 'outbound',
                'event_label': linkText,
                'value': 1
            });
            console.log('GA Event: External link -', linkText);
        });
    });
}


// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize all common functionality
 * Call this once when DOM is ready
 */
function initCommon() {
    // Scroll effects
    initHeaderScrollEffect();
    initFadeUpAnimation();
    initSmoothScroll();

    // Analytics tracking
    initDownloadTracking();
    initContactTracking();
    initCTATracking();
    initAccordionTracking();
    initScrollDepthTracking();
    initExternalLinkTracking();

    console.log('✅ Common functionality initialized');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCommon);
} else {
    initCommon();
}
