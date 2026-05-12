---
name: cicada-design
description: Use this skill to generate well-branded interfaces and assets for CICADA 思科达 (佛山市思科达医疗器械 / Foshan CICADA Dental) — a Chinese dental-instrument repair-and-maintenance brand that ships a WeChat mini-program for clinic technicians. Contains essential design guidelines, medical-blue color tokens, large-type system, fonts, hand-crafted icon set, logos, photos, and a working mini-program UI kit. Use for production code, hi-fi prototypes, mocks, or marketing artifacts.
user-invocable: true
---

# CICADA 思科达 — design skill

CICADA 思科达 is a Chinese B2B brand: precision dental-instrument repair, maintenance and parts, sold to clinics and dental hospitals. Their flagship customer-facing surface is the **牙医仪器检修小程序** (dental-instrument repair mini-program) inside WeChat. The audience is a working technician / 师傅 / clinic owner who needs to file a repair ticket, track it, and read service policy at a glance.

## How to use this skill

1. **Read `README.md` first.** It documents the brand identity, voice & tone (formal 您, no emoji, two-character section headers, numbers-not-adjectives), and the full visual foundations (medical blue `#1E6FE0`, large-baseline type, pill buttons, soft blue-gray page bg, steel-blue photo grading).
2. **Use `colors_and_type.css`** as the source of truth for tokens. Import it at the top of any new HTML artifact:
   ```html
   <link rel="stylesheet" href="colors_and_type.css">
   ```
3. **Pull live components from `ui_kits/mini-program/`** (`shell.jsx` for the WeChat frame + Btn/Card/Tag/Field/Glyph atoms; the `screens-*.jsx` files for every modeled screen). When prototyping a new screen, compose from these — do not re-invent the chrome.
4. **Preview cards in `preview/`** are token specimens. Use them as references when picking a color, radius, shadow, or component variant.
5. **Iconography:** use the `<Glyph name="…">` component from `shell.jsx` — outlined, 1.6 px stroke. 21 glyphs ship. If you must add one, match the stroke/style; do not mix in Heroicons or FontAwesome.
6. **Brand assets** live in `assets/` (logos, building/factory photos, WeChat QR codes). Copy them out into your artifact's folder — never hot-link across the system.

## Output rules

- Output as **HTML artifacts** when prototyping, mocking, or producing a slide/marketing piece. Static HTML + inline React (Babel) matches the existing prototype.
- For production code, the same tokens map cleanly to a Tailwind config or styled-components theme — keep variable names stable.
- Chinese-language UI by default. Honorific 您, never 你. No emoji. Verbs lead actions (立即报修 / 查看详情). All buttons are pills (`--radius-pill`).
- Body baseline is **15 px** (16 px for prose). Buttons and inputs are at least **44 px** tall. Cards are white on a soft blue-gray page.
- Two CTA weights: **`--grad-brand`** for inline buttons; **`--grad-brand-deep`** for bottom-fixed full-width CTAs.

## If invoked with no other guidance

Ask what to build (a new mini-program screen? a marketing landing page? a clinic poster? a deck slide?), then ask 3–5 focused questions about audience (技师 / 客户 / 内部 / 投资人), tone (clinical vs marketing), surface (mini-program vs web vs print), and required content. Then act as an expert designer and output HTML or production code.

## Files in this skill

```
README.md             — full brand + visual + content guidelines
colors_and_type.css   — CSS-variable tokens (color, type, spacing, radius, shadow, motion)
SKILL.md              — this file
assets/               — logos, photos, QR codes
preview/              — token & component preview cards
ui_kits/mini-program/ — working hi-fi prototype (16 screens, 9 modules)
```
