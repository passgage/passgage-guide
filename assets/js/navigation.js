/**
 * navigation.js - Progress navigation and section tracking
 * Handles: Progress step navigation, section observer, active step management
 *
 * Configurable for different numbers of steps:
 * - Mobile guides (iOS/Android): 6 steps
 * - Access Tag guide: 5 steps
 */

// ========================================
// NAVIGATION CONFIGURATION
// ========================================

/**
 * Navigation configuration object
 * Allows easy configuration for different guide types
 */
const navigationConfig = {
    // Number of steps in the guide (auto-detected from DOM, can be overridden)
    stepCount: null,

    // Selector for progress step elements
    stepSelector: '.progress-step',

    // Selector for section elements
    sectionSelector: '.section',

    // IntersectionObserver options for section tracking
    observerOptions: {
        threshold: 0.15,
        rootMargin: '-100px 0px -60% 0px'
    }
};

/**
 * Initialize navigation configuration
 * Auto-detects step count from DOM if not explicitly set
 */
function initNavigationConfig() {
    if (!navigationConfig.stepCount) {
        const steps = document.querySelectorAll(navigationConfig.stepSelector);
        navigationConfig.stepCount = steps.length;
    }
}


// ========================================
// ANIMATION CONFIGURATION
// ========================================

/**
 * Animation configuration for progress navigation
 * Respects user's reduced motion preferences
 */
const animationConfig = {
    stepTransitionDuration: 400,
    lineFillDuration: 600,
    animationsEnabled: !window.matchMedia('(prefers-reduced-motion: reduce)').matches
};


// ========================================
// PROGRESS TRACKING STATE
// ========================================

let currentActiveStep = 1; // Track current active step

/**
 * Get current active step number
 * @returns {number} Current active step
 */
function getCurrentActiveStep() {
    return currentActiveStep;
}

/**
 * Set current active step
 * @param {number} stepNum - Step number to set as active
 */
function setCurrentActiveStep(stepNum) {
    currentActiveStep = stepNum;
}


// ========================================
// PROGRESS STEP MANAGEMENT
// ========================================

/**
 * Update progress navigation UI with animations
 * Updates CSS classes for active and completed steps
 *
 * @param {number} activeStep - The step number that should be active
 */
function updateProgress(activeStep) {
    const progressSteps = document.querySelectorAll(navigationConfig.stepSelector);

    progressSteps.forEach((step, index) => {
        const stepNum = index + 1;
        step.classList.remove('active', 'completed');

        if (stepNum < activeStep) {
            // Previous steps are marked as completed with animation
            animateStepCompletion(step, index);
        } else if (stepNum === activeStep) {
            // Current step is marked as active with animation
            animateStepActivation(step);
        }
    });

    // Announce step change for screen readers
    announceStepChange(activeStep);
}

/**
 * Animate step completion
 * @param {HTMLElement} step - The step element to animate
 * @param {number} index - Step index for staggered animation
 */
function animateStepCompletion(step, index) {
    if (!animationConfig.animationsEnabled) {
        step.classList.add('completed');
        return;
    }

    setTimeout(() => {
        step.classList.add('completed');
    }, index * 100); // Stagger animation
}

/**
 * Animate step activation
 * @param {HTMLElement} step - The step element to activate
 */
function animateStepActivation(step) {
    if (!animationConfig.animationsEnabled) {
        step.classList.add('active');
        step.setAttribute('aria-current', 'step');
        return;
    }

    const stepNum = step.querySelector('.step-num');
    if (stepNum) {
        stepNum.style.animation = 'none';
        void stepNum.offsetWidth; // Force reflow
        stepNum.style.animation = null; // Reset to CSS animation
    }
    step.classList.add('active');
    step.setAttribute('aria-current', 'step');
}

/**
 * Announce step change for screen readers
 * @param {number} stepNum - The step number being activated
 */
function announceStepChange(stepNum) {
    let liveRegion = document.getElementById('step-announcer');

    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'step-announcer';
        liveRegion.className = 'visually-hidden';
        liveRegion.setAttribute('role', 'status');
        liveRegion.setAttribute('aria-live', 'polite');
        document.body.appendChild(liveRegion);
    }

    const totalSteps = document.querySelectorAll(navigationConfig.stepSelector).length;
    const stepElement = document.querySelector(`[data-target="step${stepNum}"]`);
    const stepLabel = stepElement?.querySelector('.visually-hidden')?.textContent || `Adım ${stepNum}`;
    liveRegion.textContent = `${stepLabel}. ${stepNum} / ${totalSteps} adım.`;
}

/**
 * Mark a step as completed
 * @param {number} stepNum - Step number to complete
 */
function markStepCompleted(stepNum) {
    const progressSteps = document.querySelectorAll(navigationConfig.stepSelector);
    if (progressSteps[stepNum - 1]) {
        progressSteps[stepNum - 1].classList.add('completed');
    }
}

/**
 * Set a step as active
 * @param {number} stepNum - Step number to activate
 */
function setActiveStep(stepNum) {
    updateProgress(stepNum);
    setCurrentActiveStep(stepNum);
}


// ========================================
// PROGRESS STEP CLICK HANDLERS
// ========================================

/**
 * Initialize click handlers for progress step navigation
 * Allows users to click on step numbers to jump to that section
 */
function initProgressStepClickHandlers() {
    const progressSteps = document.querySelectorAll(navigationConfig.stepSelector);

    progressSteps.forEach(step => {
        step.addEventListener('click', () => {
            const target = step.dataset.target;
            const targetElement = document.getElementById(target);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}


// ========================================
// SECTION OBSERVER & AUTO-UPDATE
// ========================================

let sectionObserver = null;

/**
 * Initialize IntersectionObserver for section tracking
 * Automatically updates progress navigation as user scrolls
 */
function initSectionObserver() {
    const sections = document.querySelectorAll(navigationConfig.sectionSelector);

    sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stepNum = parseInt(entry.target.id.replace('step', ''));
                if (stepNum !== currentActiveStep) {
                    currentActiveStep = stepNum;
                    updateProgress(stepNum);
                }
            }
        });
    }, navigationConfig.observerOptions);

    // Observe all sections
    sections.forEach(section => sectionObserver.observe(section));
}

/**
 * Track progress navigation clicks with analytics
 */
function initProgressNavigationTracking() {
    const progressSteps = document.querySelectorAll(navigationConfig.stepSelector);

    progressSteps.forEach((step, index) => {
        step.addEventListener('click', function() {
            const stepNumber = index + 1;
            const stepLabel = this.querySelector('.visually-hidden')?.textContent || `Adım ${stepNumber}`;
            gtag('event', 'navigation_click', {
                'event_category': 'navigation',
                'event_label': `Step ${stepNumber}: ${stepLabel}`,
                'value': stepNumber
            });
            console.log('GA Event: Navigation click - Step', stepNumber);
        });
    });
}

/**
 * Initialize keyboard navigation for progress steps
 * Supports Enter, Space, and Arrow key navigation
 */
function initKeyboardNavigation() {
    const progressSteps = document.querySelectorAll(navigationConfig.stepSelector);

    progressSteps.forEach((step, index) => {
        step.addEventListener('keydown', (e) => {
            // Enter or Space key activates the step
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                step.click();
            }

            // Arrow key navigation
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const nextIndex = e.key === 'ArrowRight'
                    ? Math.min(index + 1, progressSteps.length - 1)
                    : Math.max(index - 1, 0);
                progressSteps[nextIndex].focus();
                progressSteps[nextIndex].click();
            }
        });
    });
}


// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize all navigation functionality
 * Call this once when DOM is ready
 */
function initNavigation() {
    // Setup configuration
    initNavigationConfig();

    // Initialize observers and handlers
    initSectionObserver();
    initProgressStepClickHandlers();
    initKeyboardNavigation();
    initProgressNavigationTracking();

    // Set initial state (step 1 active)
    updateProgress(1);

    console.log(`✅ Navigation initialized (${navigationConfig.stepCount} steps)`);
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    initNavigation();
}


// ========================================
// CONFIGURATION UTILITIES
// ========================================

/**
 * Configure navigation for a specific number of steps
 * Useful when you have guides with different step counts
 *
 * @param {number} stepCount - Number of steps in the guide
 * @example
 * // For Access Tag guide with 5 steps
 * configureNavigation(5);
 *
 * // For iOS/Android guides with 6 steps
 * configureNavigation(6);
 */
function configureNavigation(stepCount) {
    navigationConfig.stepCount = stepCount;
    console.log(`Navigation configured for ${stepCount} steps`);
}

/**
 * Configure observer options for section tracking
 * Useful if you need to adjust scroll detection sensitivity
 *
 * @param {Object} options - IntersectionObserver options
 * @example
 * configureObserverOptions({
 *     threshold: 0.2,
 *     rootMargin: '-80px 0px -60% 0px'
 * });
 */
function configureObserverOptions(options) {
    navigationConfig.observerOptions = { ...navigationConfig.observerOptions, ...options };
    if (sectionObserver) {
        // Note: Reinitializing observer would require destroying and recreating
        console.warn('Observer options updated, but observer already initialized. Reload page to apply changes.');
    }
}
