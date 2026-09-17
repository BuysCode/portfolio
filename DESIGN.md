# Design System

> Derived from Purplefolio design language — friendly, approachable, rounded.

## Visual World

**Purplefolio** — A light-themed, friendly portfolio design with rounded shapes, generous whitespace, and a single dominant purple accent. The aesthetic is approachable yet professional, using soft shadows and ample breathing room to create a welcoming atmosphere.

## Color Palette

### Roles
- **Background:** `#fcfcfd` — primary canvas, page background
- **Background Secondary:** `#ffffff` — cards, surfaces, alternating sections
- **Text Primary:** `#000000` — headings and body text
- **Text Secondary:** `#4e525a` — muted text, captions, placeholders
- **Accent:** `#6e06f2` — CTAs, brand highlights, interactive elements
- **Border:** `#24262f` — dividers, outlines, input borders

### Full Palette
| Hex | Role |
|---|---|
| `#6e06f2` | Primary accent, CTA backgrounds, link text |
| `#ffffff` | Button backgrounds, cards |
| `#000000` | Headings, body text |
| `#4e525a` | Muted text, secondary content |
| `#24262f` | Borders, dividers |

## Typography

### Font Families
- **Headings:** Poppins (weight 400, letter-spacing -2px)
- **Body:** sans-serif

### Type Scale
| Token | Size | Weight | Usage |
|---|---|---|---|
| Display | 90px | 400 | Hero headings |
| H1 | 56px | 700 | Section headings |
| H2 | 24px | 400 | Sub-headings |
| H3 | 22px | 500 | Card titles |
| H4 | 18px | 700 | Labels, emphasis |
| Body L | 16px | 700 | Supporting text |
| Body | 14px | 400 | Running text |
| Small | 13px | 400 | Captions |
| XS | 12px | 400 | Fine print |

## Spacing

**Base unit:** 15px — all gaps are multiples (30px, 45px, 60px, etc.)

| Token | Value | Role |
|---|---|---|
| spacing-1 | 15px | Element gaps |
| spacing-2 | 10px | Tight element gaps |
| spacing-3 | 12px | Element gaps |
| spacing-4 | 20px | Medium element gaps |
| spacing-5 | 30px | Card padding |
| spacing-6 | 50px | Section padding |

## Border Radius

| Token | Value | Element |
|---|---|---|
| radius-card | 20px | Cards, surfaces |
| radius-card-lg | 50px | Large cards, hero elements |
| radius-button | 8px | Buttons |
| radius-button-lg | 10px | Large buttons |
| radius-full | 9999px | Avatars, tags |

## Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| Low | `0px 0.64px 1.15px -1.13px rgba(0,0,0,0.26), 0px 1px 2px -1px rgba(0,0,0,0.24)` | Cards, subtle elevation |

## Component Patterns

### Tags/Badges
- Light background, rounded (radius-full), compact
- Sans-serif font, small size
- Used for technology labels, categories

### Buttons
- Primary: `#6e06f2` background, white text, radius-button
- Secondary: outlined or ghost variants
- Generous padding, rounded corners

### Cards
- `#ffffff` background on `#fcfcfd` canvas
- radius-card (20px) corners
- Subtle shadow for elevation
- Generous internal padding (30px+)

## Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font ~80% |
| Tablet | 640–1024px | 2-column where appropriate |
| Desktop | 1024–1440px | Full layout |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 15px base unit across breakpoints

## Do's and Don'ts

### Do
- Use `#fcfcfd` as primary background
- Use Poppins for headings, sans-serif for body
- Use `#6e06f2` as single dominant accent
- Maintain 15px base spacing unit
- Use rounded corners (20px+) consistently
- Apply shadow system for elevation
- Use weight 400 for headings

### Don't
- Don't use colors outside palette
- Don't substitute Poppins/sans-serif
- Don't use irregular spacing
- Don't use dark backgrounds
- Don't use sharp corners
- Don't use oversized hero text
- Don't add decorative elements not in source
