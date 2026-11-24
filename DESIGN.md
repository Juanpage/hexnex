---
name: Hexnex
description: Websites, WhatsApp assistants and custom systems presented as the plate section of a design annual.
colors:
  ink: "#0e2358"
  blue: "#0073fe"
  blue-deep: "#0240af"
  cyan: "#00cdea"
  cyan-wash: "#d3f4f9"
  blue-wash: "#eaf3ff"
  cyan-ink: "#00657a"
  paper: "#f7f7f7"
  paper-cool: "#f1f3f7"
  paper-warm: "#f9f7f3"
  sheet-white: "#ffffff"
  ink-soft: "#3d4a6b"
  ink-reverse-soft: "#9fb2d9"
  hair: "#c9c7c4"
  hair-soft: "#dcdad6"
  wa-green: "#25d366"
  wa-green-hover: "#3be07a"
  wa-green-ink: "#0b2b1a"
  wa-teal: "#075e54"
  wa-paper: "#efeae2"
  wa-bubble-out: "#d9fdd3"
typography:
  display:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(52px, 6.6vw, 96px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  display-back:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(64px, 9vw, 136px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(38px, 4.4vw, 64px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(22px, 2vw, 28px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(19px, 1.5vw, 22px)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.14em"
  label-button:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.14em"
rounded:
  none: "0"
  bubble: "8px"
  round: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  column-gap: "24px"
  plate-offset: "10px"
  credit: "14px"
  block: "40px"
  section: "clamp(96px, 14vh, 150px)"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet-white}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-ink-hover:
    backgroundColor: "{colors.blue-deep}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "44px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet-white}"
  button-wa:
    backgroundColor: "{colors.wa-green}"
    textColor: "{colors.wa-green-ink}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "56px"
  button-wa-hover:
    backgroundColor: "{colors.wa-green-hover}"
  nav-token:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    padding: "8px 0"
  nav-token-hover:
    textColor: "{colors.ink}"
  state-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  state-chip-go:
    backgroundColor: "{colors.blue-wash}"
    textColor: "{colors.blue-deep}"
  state-chip-wait:
    backgroundColor: "{colors.cyan-wash}"
    textColor: "{colors.cyan-ink}"
  plate-sheet:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  whatsapp-float:
    backgroundColor: "{colors.wa-green}"
    textColor: "{colors.sheet-white}"
    rounded: "{rounded.round}"
    size: "58px"
---

# Design System: Hexnex

## Overview

**Creative North Star: "The Plate Section"**

Hexnex presents its work the way a design annual presents its plates: each solution is a printed plate on a near-white uncoated sheet, fixed in place by registration crosshairs, captioned with a mono plate credit, and countersigned by one rotating circular seal that carries the logo mark. The page reads as a printed object, not as an app shell. Navy ink does the talking; the brand blues and cyan appear as registration color, never as decoration.

Density is calm and editorial. A 12-column sheet holds large regular-weight grotesque headlines on one side and a single plate on the other, with generous section air between spreads. Every structural line is a 1px hairline. Depth comes from paper and hairlines, not from lifted cards. The site's demonstration plates (a WhatsApp conversation, a leads register) are authored reproductions labeled as examples; where a plate reproduces a third-party product, that product keeps its own official colors and shapes inside the plate frame.

The build rejects the agency default of headline plus phone mockup plus a row of rounded icon cards; that is the confirmed anti-reference from the direction contract.

**Key Characteristics:**
- Near-white sheet (paper) with a cool drift at the top-left and a warm drift lower right, never a flat white page.
- Navy ink for all text and primary controls; pure black is never used.
- 1px hairlines for every divider, frame and table rule; dashed hairlines only between credit columns.
- CSS registration crosshairs at the four corners of every plate.
- One grotesque (Hanken Grotesk) for display and body; 11px mono caps (JetBrains Mono) for registration labels, plate credits, nav tokens, buttons, table heads and state chips.
- Pill controls and softly rounded plates and panels; circles mark identity (logo, seal, avatars, floating WhatsApp button) and order (glyph badges, step numerals).
- A single rotating seal per page, in cyan wash with a cyan rule.

**Shipping assets and provenance:**
- `logo.jpg`, `logo-mark.png`, `favicon.png`: the owner's official Hexnex logo assets (hexagon "HN" mark with rising arrow), provided by the owner and only cropped and resized locally. Never redraw, recolor or re-typeset the mark.
- `fonts/hanken-grotesk-{400,500,600}.woff2`, `fonts/jetbrains-mono-400.woff2`: Hanken Grotesk and JetBrains Mono from fontsource@5.2.5, SIL Open Font License, self-hosted with `font-display: swap`.
- The WhatsApp mark is the official glyph, inlined as SVG.
- No other rasters ship. The uncoated-paper texture raster does not exist yet; the sheet is currently carried by CSS gradients only.

## Colors

An institutional navy-and-blue palette taken from the official logo, set on a slightly tinted paper, with WhatsApp's own palette quarantined inside its brand surfaces.

### Primary
- **Annual Navy** (ink): all text, the primary filled control, the reverse contact spread background, crosshair strokes. It is the ink of the printed sheet.
- **Registration Blue Deep** (blue-deep): hover state of the primary control, service glyph strokes, step numerals, "go" state text. The working accent.
- **Registration Blue** (blue): focus rings and the "go" state chip border. Used for signals, not surfaces.

### Secondary
- **Seal Cyan** (cyan): the seal's outer rule, the "wait" state chip border, the focus ring on the navy spread.
- **Cyan Wash** (cyan-wash): the seal disk fill, text selection, the "wait" chip fill.
- **Blue Wash** (blue-wash) and **Cyan Ink** (cyan-ink): fill and text of the state chips only.

### Neutral
- **Uncoated Sheet** (paper): page background and the base of the sticky bar.
- **Cool Edge** (paper-cool) and **Warm Edge** (paper-warm): the two radial drifts laid over the sheet at top-left and lower right.
- **Plate White** (sheet-white): the leads plate surface, the seal core, text on navy.
- **Soft Ink** (ink-soft): secondary copy, ledes, plate credits, nav tokens at rest. The dot matrix is drawn in it at 45% opacity.
- **Reverse Soft Ink** (ink-reverse-soft): colophon terms and footer on the navy spread.
- **Hairline** (hair) and **Soft Hairline** (hair-soft): every rule, frame and table divider; soft for inner table rules and plate outlines.

### Third-party (WhatsApp, inside its own surfaces only)
- **WhatsApp Green** (wa-green), with its hover and dark ink: the WhatsApp glyph, the contact-spread WhatsApp button and the floating button.
- **WhatsApp Teal** (wa-teal), **Chat Paper** (wa-paper), **Outgoing Bubble** (wa-bubble-out): only inside the WhatsApp conversation plate.

### Named Rules
**The Never-Black Rule.** Text and dark surfaces are Annual Navy. Pure black does not appear anywhere in the Hexnex layer.

**The Quarantined Green Rule.** WhatsApp green and its companions appear only on WhatsApp's own mark, WhatsApp buttons and the WhatsApp plate. They never become a Hexnex accent, divider or highlight.

**The Registration Color Rule.** Blue, deep blue and cyan mark registration: seal, focus, numerals, glyph strokes, state chips. They do not fill sections or large surfaces.

## Typography

**Display Font:** Hanken Grotesk (with Segoe UI, system-ui, sans-serif)
**Body Font:** Hanken Grotesk (same stack)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Consolas, monospace)

**Character:** One sober grotesque set large at regular weight with tight negative tracking carries every voice of the page; a small spaced-out mono in caps plays the printer's registration notes around it.

### Hierarchy
- **Display** (400, clamp 52 to 96px, 0.98): the opening headline only, capped at about 9.5ch (11ch under 900px).
- **Display Back** (400, clamp 64 to 136px, 0.9): the single word on the navy contact spread.
- **Headline** (400, clamp 38 to 64px, 1.02): section headlines beside or above plates.
- **Title** (400, clamp 22 to 28px, 1.2): step titles and the privacy heading (fixed 28px).
- **Lede** (400, clamp 19 to 22px, 1.45): the opening subcopy, max 40ch, Soft Ink.
- **Body** (400, 17px, 1.55; 16px under 600px): running copy, 40 to 62ch.
- **Body Small** (400, 15.5px, 1.45): service descriptions (max 24ch) and chat bubbles.
- **Label** (mono 400, 11px, 0.14em, uppercase): plate credits, nav tokens, service names, table heads, state chips (0.1em), colophon terms, footer, step tags.
- **Label Button** (mono 400, 12px, 0.14em, uppercase; 13px on the WhatsApp button): every button.

Weights 500 and 600 appear only for short emphasis: the brand wordmark (600), named clients in the proof line (600), plate header titles and table client names (500).

### Named Rules
**The One Grotesque Rule.** Display and body are the same family at weight 400. Hierarchy comes from size and tracking, not from bold.

**The Registration Mono Rule.** Mono is always 11 to 13px, uppercase and tracked. It labels and credits; it never sets a headline or a paragraph.

## Layout

A centered sheet (max 1360px) with fluid side gutters (clamp 16 to 56px). Spreads use a 12-column grid with a 24px column gap: The opening carries no plate (owner's decision, 2026-11-24, after reviewing peer agency sites): the headline sits in columns 1 to 7 and columns 8 to 12 hold the lede, the primary WhatsApp button and pill chips of example industries, so the services index begins inside the first viewport. The works spread puts its headline in 1 to 6 and copy in 8 to 12, then both plates side by side (chat 5fr, leads 6fr, 112px gap) so 'what the customer sees / what you receive' reads literally. A FAQ spread (sticky heading in 1 to 4, disclosure list in 6 to 12) sits between the steps and the privacy panel. The privacy spread sets its heading in columns 1 to 4 and copy in 6 to 11; the contact spread sets the giant word in 1 to 6 and the action column in 8 to 12, bottom-aligned.

The sticky bar is 72px tall (64px under 600px), translucent paper with a blur, gaining a soft hairline only once scrolled. Sections are separated by air, not boxes: vertical padding around clamp(96px, 14vh, 150 to 176px). Services are an offer index right after the opening: a headline with a side note, then four ruled rows under a navy top rule (48px glyph / 30-44px service title / pitch plus a three-item list marked with short blue dashes / WhatsApp-green pill CTA with a prefilled WhatsApp message on every row). All four rows are equal white panels; on hover or focus a cyan wash wipes in from the left via clip-path and the glyph badge turns white so it stays visible. The steps are a ruled table: navy top rule, hairline row rules, 30px rows with columns 80px numeral / title / copy / 160px tag.

Responsive behavior:
- Under 1080px: offer rows go to 3 columns with the CTA under the title; the step tag column drops.
- Under 900px: nav tokens hide; every spread collapses to one column; plates gain a 22px inset so crosshairs and the seal stay on screen; the dot matrix hides; the seal shrinks to 84px and moves to the plate's lower-left.
- Under 600px: offer rows stack into one column; the leads table becomes stacked rows (time, client, state on one line; the request below); colophon and footer stack.

## Elevation & Depth

The system is flat paper. Plates are not lifted; they are framed by a 1px hairline ring plus a second soft hairline outline offset 10px, which reads as a plate mounted on the sheet. Depth otherwise comes from tonal paper drifts and the navy reverse spread. The only true shadows belong to reproductions and to one floating control.

### Shadow Vocabulary
- **Plate frame** (`box-shadow: 0 0 0 1px #c9c7c4; outline: 1px solid #dcdad6; outline-offset: 10px`): every plate surface. A ring, not a shadow.
- **WhatsApp bubble** (`box-shadow: 0 1px 0.5px rgb(11 20 26 / 0.13)`): chat bubbles inside the WhatsApp plate, reproducing WhatsApp's own rendering.
- **Floating action** (`box-shadow: 0 8px 20px -6px rgb(14 35 88 / 0.45)`): the fixed WhatsApp button only, tinted navy.

### Named Rules
**The Mounted Plate Rule.** Plates sit on the sheet with a hairline ring and an offset outline. Never give a plate a drop shadow or a hard offset shadow.

## Shapes

Hexnex's geometry is soft (owner's request, 2026-11-24): every button, CTA, chip and step tag is a full pill (999px); plates round to 18px (their offset outline follows the curve); offer rows, the privacy panel and the top of the navy contact spread round to 28px. Circles mark identity and order: the logo mark, the seal, the chat avatar, the floating WhatsApp button, the service glyph badges (cyan wash disk) and the blue step numerals. Tables and hairline rules stay straight. Inside the WhatsApp plate, bubbles keep WhatsApp's 8px radius with the squared tail corner, because the plate reproduces that product faithfully.

Recurring silhouettes:
- **Registration crosshair:** two 1px navy strokes in a 21px square, placed 22px outside each plate corner (lower pair aligned above the plate credit).
- **Dot matrix:** 1px Soft Ink dots on a 16px pitch at 45% opacity (no longer used on the opening); a 14px-pitch teal dot field inside the chat thread.
- **Seal:** a 132px circle (84px on mobile), cyan wash disk with a cyan hairline, mono caps text on a ring path rotating once every 40s, white core with the logo mark at center, sitting half off the plate's lower-left corner.
- **Line glyphs:** custom 40px service glyphs drawn as 1.25px square-cornered strokes in Registration Blue Deep.

## Components

### Buttons
Pill-shaped, mono caps; the primary carries a soft offset shadow.
- **Shape:** full pill (999px).
- **Primary (ink):** Annual Navy fill, white mono caps 12px, 48px tall, 22px side padding, 14px gap; leads with the official WhatsApp glyph in WhatsApp green and ends with a 1.5px arrow.
- **Hover / Focus:** fill shifts to Registration Blue Deep and the arrow slides 4px right (0.3 to 0.4s, ease-out expo). Focus is a 2px Registration Blue outline offset 3px (cyan on the navy spread).
- **Line:** 1px navy border, navy text, 44px tall (40px under 600px); fills navy on hover. Used in the bar.
- **WhatsApp:** WhatsApp green fill with dark green ink, 56px tall, 13px mono, on the navy contact spread only.

### Chips
- **Style:** mono caps 11px at 0.1em, 4px 10px padding, 1px hairline border, pill.
- **State:** neutral (hairline, Soft Ink), go (Registration Blue border, Blue Wash fill, Blue Deep text), wait (Seal Cyan border, Cyan Wash fill, Cyan Ink text).

### Cards / Containers (Plates)
- **Corner Style:** 18px; offer rows and panels 28px.
- **Background:** Plate White for Hexnex-authored plates; Chat Paper for the WhatsApp plate.
- **Shadow Strategy:** the Plate frame from Elevation & Depth.
- **Border:** hairline ring; inner rules in Soft Hairline.
- **Internal Padding:** 20px 24px headers, 16px 24px table cells (14px under 600px).
- **Credit:** every plate carries a figcaption credit below it: 14px gap, hairline top rule, mono label split left/right (plate number and title; "example" marker).

### Navigation
- **Style:** four mono caps tokens in Soft Ink, 36px apart (22px under 1080px), left of the line button.
- **Hover:** text goes to Annual Navy and a 1px navy underline draws in from the left (0.4s).
- **Mobile:** tokens hide under 900px; the bar keeps the logo mark and the line button; the wordmark hides under 600px.

### Steps Table
A ruled list read like an annual's index: navy top rule, hairline row rules, a Blue Deep mono numeral, a Title, Soft Ink copy and a right-aligned mono tag.

### Colophon
On the navy spread, a definition list ruled with 25% white hairlines: mono Reverse Soft Ink terms in a 100px column, white 17px values.

### Seal (signature)
The single circular signature of the page; see Shapes. It is decorative and hidden from assistive technology. Rotation stops under reduced motion.

### Floating WhatsApp Button
58px circle (54px under 600px) in WhatsApp green with the white official glyph, fixed 20px from the lower-right corner. It is hidden while the opening's primary button is on screen and again when the contact spread enters, fading and dropping 12px.

### Motion
One easing (`cubic-bezier(0.16, 1, 0.3, 1)`) at 0.3 to 0.4s for state changes. The chat plate reveals its bubbles in sequence (650ms stagger, rise 10px and unblur) only when JavaScript runs and reduced motion is off; content is visible by default. The seal rotates at 40s per turn. Reduced motion removes smooth scroll, the spin and all transition durations.

## Do's and Don'ts

### Do:
- **Do** set every text and dark surface in Annual Navy (#0e2358).
- **Do** frame every plate with a 1px hairline ring, an offset soft outline (10px) and four registration crosshairs, and caption it with a mono plate credit.
- **Do** label authored demonstration plates as examples in their credit until the owner supplies real screenshots.
- **Do** keep Hexnex controls square with mono caps labels, 44 to 56px tall.
- **Do** use the owner's official logo files as supplied and present the mark in a circle.
- **Do** reproduce third-party products (WhatsApp) in their official colors and shapes, inside the plate frame.
- **Do** keep headlines at weight 400 with negative tracking and let size carry hierarchy.

### Don't:
- **Don't** use pure black, or any accent other than the logo's blues and cyan, in the Hexnex layer.
- **Don't** let WhatsApp green leave WhatsApp's mark, buttons and plate.
- **Don't** give plates drop shadows or hard offset shadows.
- **Don't** round Hexnex buttons, chips or plates; circles are only for the logo mark, seal, avatar and floating button.
- **Don't** set headlines or paragraphs in mono, or place mono labels above headlines as kickers.
- **Don't** fall back to the headline + phone mockup + row of rounded icon cards composition.
- **Don't** add a second seal or a second display family.
