# AutoAI Website Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from modern tech service leaders (Linear, Vercel, Stripe) combined with AI/automation aesthetics. The design emphasizes clarity, technical credibility, and conversion optimization while maintaining the sleek, modern feel of cutting-edge automation platforms.

## Core Design Elements

### A. Typography
**Font Families:**
- Primary Headings: Poppins (700, 600 weights)
- Secondary Headings/Subheadings: Inter (600, 500 weights)
- Body Text: Inter (400, 500 weights)
- Technical/Code Elements: JetBrains Mono (for API endpoints, technical specs)

**Type Scale:**
- Hero Headline: text-6xl (mobile: text-4xl)
- Section Headings: text-4xl (mobile: text-3xl)
- Subsection Headings: text-2xl (mobile: text-xl)
- Card Titles: text-xl
- Body Large: text-lg
- Body Standard: text-base
- Captions/Labels: text-sm

### B. Layout System
**Spacing Primitives:** Use Tailwind units of 2, 4, 8, 12, 16, 20, 24, 32
- Component padding: p-8, p-12
- Section spacing: py-20, py-24, py-32
- Card gaps: gap-8, gap-12
- Element margins: mb-4, mb-8, mb-12

**Container Strategy:**
- Max-width sections: max-w-7xl mx-auto
- Content sections: max-w-6xl
- Text-heavy content: max-w-4xl
- Grid breakpoints: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

### C. Component Library

**Hero Section:**
- Full-width container with large hero image showing abstract AI/automation visualization (flowing data nodes, neural network patterns, or geometric automation flows)
- Dual-hierarchy headline structure with gradient text treatment on key phrases
- Two-button CTA layout (primary + secondary ghost button)
- Subtle animated background overlay (CSS animations only - floating particles or gradient shift)
- Trust indicator strip below CTAs: "Trusted by businesses across Europe" with micro-stats

**Service Cards (6-Grid):**
- Rounded corners (rounded-2xl)
- Gradient border treatment on hover
- Icon + Title + 2-line description format
- Iconography: Geometric, outline-style icons with gradient fills
- Grid: 1 column mobile, 2 tablet, 3 desktop
- Spacing: gap-8 between cards

**Timeline Visualization (How We Work):**
- Horizontal flow on desktop, vertical on mobile
- Connected dots/nodes with gradient connecting lines
- Each phase: Icon circle + Title + Description + Metric
- Progressive number indicators (01, 02, 03...)
- Alternating icon positions for visual rhythm

**Tech Stack Grid:**
- Logo showcase in grayscale, color on hover
- 5-6 columns on desktop, 3 on tablet, 2 on mobile
- Equal-height containers with centered logos
- Subtle shadow lift on hover

**Solution Cards (4 Featured):**
- Larger cards than service grid (more prominent)
- Icon/illustration + Title + Feature bullets + "Learn More" link
- Gradient accent bar on card edge
- 2 columns desktop, 1 column mobile

**Pricing Table:**
- Three-column comparison on desktop
- Stacked cards on mobile
- Middle tier highlighted with gradient border
- Clear tier labels, pricing emphasis, feature bullets
- "Get Started" CTA per tier

**FAQ Accordion:**
- Chevron indicators for expand/collapse
- Generous spacing between items (mb-4)
- Smooth expand animation
- Divider lines between questions

**Contact Form:**
- Two-column layout: Form (left) + Context/Image (right)
- Form fields: Name, Email, Company, Tools (dropdown/multi-select), Textarea for automation needs
- Large textarea for detailed automation description
- Primary CTA button with loading state
- Context panel: Contact info, response time expectation, office hours

### D. Visual Elements

**Images:**
- **Hero Section:** Large, full-width hero image (60% viewport height) - abstract AI/automation visualization with blue/cyan gradients, flowing data connections, or geometric automation patterns. Use dark overlay (opacity-60) for text legibility.
- **About Section:** No additional images needed - rely on iconography
- **Tech Stack:** Official vendor logos (grayscale by default)
- **Featured Solutions:** Illustrated icons or abstract representations of each solution
- **Contact Section:** Optional team photo or office environment (if available)

**Geometric Patterns:**
- Subtle grid patterns in section backgrounds
- Gradient mesh overlays for depth
- Diagonal accent lines in section dividers
- Dotted connection lines for timeline

**Gradient Treatments:**
- Text gradients for key phrases (cyan to blue)
- Border gradients on featured cards
- Background gradients (very subtle, dark blue to darker blue)
- Icon gradient fills

**Animations (Minimal):**
- Fade-in on scroll for sections
- Hover lift for cards (translateY -2px)
- Button hover states (subtle glow)
- Smooth accordion expand/collapse
- Hero background subtle movement (CSS only)

### E. Interaction Patterns

**Navigation:**
- Fixed header on scroll with backdrop blur
- Smooth scroll to sections
- Mobile hamburger menu (slide-in from right)
- Logo clickable to home

**Buttons:**
- Primary: Solid background with hover glow effect
- Secondary/Ghost: Transparent with border, fill on hover
- All buttons on hero image: Backdrop blur (backdrop-blur-md) with semi-transparent background
- No hover/active state overrides needed for blurred buttons

**Cards:**
- Subtle shadow increase on hover
- Border color shift on hover
- Smooth transitions (transition-all duration-300)

**Forms:**
- Focus states with accent color border
- Validation states (success green, error red)
- Helper text below fields
- Required field indicators

## Section-Specific Guidelines

**Outcomes Section:**
- 4-column stat grid on desktop, 2 on tablet, 1 on mobile
- Large numbers with gradient treatment
- Icons accompanying each stat
- Brief descriptive text below numbers

**Footer:**
- Multi-column layout: Brand info + Quick links + Contact + Newsletter
- Social media icons with hover color fill
- Copyright and legal links
- Consistent with header styling but darker background

**Responsive Behavior:**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly targets (min 44x44px)
- Reduced motion considerations for animations