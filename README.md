# CICADA 思科达 · Design System

> 牙医仪器检修小程序 — 由 **佛山市思科达医疗器械（CICADA）** 出品的微信小程序。蓝白医疗风、字体偏大、信息密度低，目标用户是诊所师傅、口腔技师与售后客服。

---

## What this is

This design system codifies the visual + interaction language of CICADA's **dental-instrument repair mini-program**. It is the single source of truth for typography, color, spacing, icons, components, and screen patterns. Everything below was reverse-engineered from the working React prototype + brand collateral the client provided.

**Brand identity**
- **English wordmark:** CICADA (serif, all-caps, medical-blue)
- **Chinese name:** 思科达
- **Slogan A (corporate):** 追求极致稳定性 — "Pursue ultimate stability"
- **Slogan B (consumer):** 服务全球牙科专家 — "Serve global dental specialists"
- **Parent company:** 佛山市登煌医疗有限公司 / Foshan CICADA Dental Instrument Co., LTD
- **Official hotline:** 0757-85775667

## Sources

| Source | Type | Path |
| --- | --- | --- |
| Working mini-program prototype (React + Babel) | Local codebase mount | `UI设计/` (read-only); copied into `ui_kits/mini-program/` |
| Logo (full lockup) | JPG | `assets/logo-cicada-full.jpg` |
| Logo (mark — CICADA 思科达 ®) | JPG | `assets/logo-cicada-mark.jpg` |
| Logo (winking-tooth icon, blue card) | JPG | `assets/logo-cicada-tooth-blue.jpg` |
| HQ exterior photo | JPG | `assets/photo-building.jpg` |
| Factory floor photo | JPG | `assets/photo-factory.jpg` |
| Official WeChat 公众号 QR | JPG | `assets/qr-official-wechat.jpg` |
| Regional sales QR poster (8 regions + hotline) | JPG | `assets/poster-regional-sales.jpg` |

Original mini-program source (preserved verbatim under `ui_kits/mini-program/`):
- `shell.jsx` — WeChat top bar, bottom nav, Page wrapper, Btn/Card/Tag/Field/Glyph atoms, Customer-service FAB
- `screens-home.jsx` — Home / Company / Mine root screens
- `screens-repair.jsx` — Repair flow, progress, diagnose, survey modal
- `screens-info.jsx` — Warranty / fees / guides / contact / orders / address / login / feedback
- `app.jsx` — Router + Tweaks
- `tweaks-panel.jsx` — Tweaks UI primitives

---

## Index

- `README.md` — this file (overview, content, visuals, iconography, index)
- `SKILL.md` — invokable skill manifest for Claude Code
- `colors_and_type.css` — design tokens (CSS variables)
- `assets/` — logos, photos, QR codes
- `fonts/` — webfont references (loaded from Google Fonts)
- `preview/` — one HTML card per token/component; rendered in the Design System tab
- `ui_kits/mini-program/` — full hi-fi clickable prototype (16 screens, 9 modules)

---

## Content fundamentals

CICADA's mini-program copy is **Simplified Chinese, technician-facing, and reassuring**. The voice sits between "official hospital notice" and "trusted neighborhood repair shop."

### Voice & tone
- **Authoritative but warm.** "为了给您提供更快更好的服务，请务必…" — service requests are framed as benefits to the user, never as demands.
- **Concise, mostly imperative for actions.** "立即报修", "查看详情", "复制微信号". Verbs come first; never "Click here to…"
- **Honorific 您 always.** Never 你. The user is a doctor or 师傅 deserving respect.
- **First-person 我们 for the company.** "我们致力于为齿科机构提供…" — collective and confident.
- **Numbers, not vague adjectives.** "2 小时内接单回复", "24 小时内到场检修", "气压 0.25–0.30 MPa", "最多 2000 字". Specifics beat superlatives.

### Casing & punctuation
- Mixed Chinese + Latin script is the norm. English brand names (NSK, CICADA, CBCT, X-Smart) stay in original case.
- 中文全角标点：。， 、 — used in long-form prose (company intro, warranty).
- 短语之间 用空格 不用标点 — micro-copy and buttons separate phrases with spaces or middle-dots: "电子发票 / 纸质发票", "维修 · 检测 · 回寄".
- Numbers + units stay un-spaced: `400-833-9988`, `0.25 MPa`, `2 小时`.
- Colons after labels use Chinese 全角 ："温馨提示：…", "工单号:".

### Section labels (reusable copy primitives)
| Pattern | Example |
| --- | --- |
| 温馨提示： + amber tip strip | "为了给您提供更快更好的服务，请务必…" |
| Two-char section header | `基础服务` `自助查询` `操作教程` `联系我们` `收件信息` `寄出信息` `回寄信息` `产品信息` `核心优势` `业务范围` |
| CTA verbs | `立即报修` `立即提交报修` `查看全部` `查看详情` `立即关注` `立即前往` `重新选择` `仍未解决 · 立即报修` |
| Status tags | `待处理` `维修中` `已发货` `已完成` `待开具` |
| Honorific micro-copy | `您的专属服务经理` `长按识别 · 添加专属服务经理` |

### What is NOT used
- ❌ Emoji — none in the prototype. Iconography is geometric SVG only.
- ❌ Marketing exclamations ("Awesome!", "立即抢购!"). Tone stays clinical.
- ❌ Casual slang or 网络用语.
- ❌ Long marketing paragraphs. Most cards stay under 30 Chinese characters per line.

### Vibe
**Reliable medical-grade software for a working tech.** Imagine the manual that ships with a dental chair, translated into a screen. Generous spacing, large readable type (15–16 px baseline), explicit numbers, no surprises.

---

## Visual foundations

### Color
The palette is anchored on **medical blue `#1E6FE0`** with a steel-blue/sky gradient family for photographic heroes. Neutrals lean cool (slate-blue, not gray). All semantic tones are muted — no neon, no high-saturation accents.

| Group | Token | Hex | Where used |
| --- | --- | --- | --- |
| Brand | `--brand` | `#1E6FE0` | CTAs, focus, icon strokes |
| Brand | `--brand-2` | `#3A86FF` | Gradient top, hover wash |
| Brand | `--brand-deep` | `#0A4FB8` | Pressed, gradient bottom |
| Brand | `--brand-soft` | `#E8F1FE` | Pill bg, hover |
| Brand | `--brand-mist` | `#F3F8FF` | Input bg, page wash |
| Brand | `--brand-stone` | `#2C5985` | Photo overlay |
| Brand | `--brand-tooth` | `#1AAACE` | Logo cyan-blue |
| BG | `--bg-page` | `#E8EEFA` | Mini-program page |
| BG | `--bg-tint` | `#D7E3FA` | Tinted strips, contact cards |
| Ink | `--fg-1..5` | `#0F1F3A → #C4D1E4` | Hierarchical text |
| OK | `--ok` | `#10B981` | Completion ticks |
| Warn | `--warn` | `#F59E0B` | Pending status |
| Danger | `--danger` | `#E5484D` | Required-field asterisks, errors |
| Info | `--info` | `#0EA5E9` | Maintenance-in-progress |

### Type
- **Primary face: `Noto Sans SC`** loaded from Google Fonts (300/400/500/600/700/800/900). Falls back to `PingFang SC` then `Microsoft YaHei`.
- **Serif accent: `Noto Serif SC`** — used only for the CICADA wordmark (e.g. the side-tab pull-out). Approximates the original logo's bookman-serif feel.
- **Baseline 15 px (not 14).** The brief says 字体大一点方便师傅查看 — we raised the body baseline +1 px from typical mini-program defaults. 16 px for prose, 24 px+ for headings.
- Heavy weights (700/800) used freely for short headings; long copy stays at 400/500.
- Letter-spacing: `-0.5px` on display, `+0.3–0.6px` on micro-caps labels (e.g. CICADA wordmark).

### Spacing
4-pt grid. Card padding is `14px` by default, `18px` for hero cards. Section gaps `18–22px`. Form rows `48px` minimum height (touch target).

### Backgrounds
- No full-bleed photography on app screens — photos appear **only inside rounded hero cards** with a 35–65% blue overlay (`linear-gradient(180deg, rgba(15,46,102,.35) 0%, rgba(15,31,58,.65) 100%)`).
- The stage / canvas around the phone uses a soft radial wash: `radial-gradient(1200px 600px at 50% -10%, #DCE9FA 0%, transparent 60%) #EEF2F8`.
- Page bg is a quiet blue-gray `#E8EEFA`, never pure white. White is reserved for cards.
- No repeating patterns. No textures. No hand-drawn illustrations.

### Animation
- Minimal. Bottom sheets `slideUp 250ms`, modal `fadeIn 200ms`, generic transitions `200ms ease-out`.
- No bounces, no springs, no parallax. Medical software vibe.

### Hover & press
- **Hover:** card-button borders fade from `--line` → `--brand`; text color matches.
- **Active state on grid buttons:** filled brand bg + white text (see homepage 快速导航 grid).
- **Press:** primary buttons keep their gradient but compress to `transform: scale(.98)` (CSS-only, optional).
- No opacity-on-hover dimming.

### Borders & dividers
- `1px solid var(--line)` for default borders.
- `1.5px dashed var(--line-strong)` for uploaders & "add another product".
- `1px dashed rgba(30,111,224,.12)` inside tinted info cards (receiver info on home).
- Section dividers inside cards are `1px solid var(--bg-sunken)` — softer than outer borders.

### Shadows & elevation
- **Cards:** `--shadow-sm` — barely-there.
- **Heroes / modals:** `--shadow-md`.
- **Primary CTA:** `--shadow-brand` — colored, blue spread underneath the button.
- **FABs:** `--shadow-float` with a 2px white border around the button itself.
- No inset shadows. No glow / neon.

### Capsules vs gradients
Two CTA "weights":
1. **Light primary** — `--grad-brand` (top→bottom 3A86FF → 1E6FE0). Used for inline buttons and modal confirms.
2. **Heavy primary** — `--grad-brand-deep` (2A6CD3 → 0A4FB8). Used for *bottom-fixed* full-width CTAs ("立即提交报修", "一键复制以上收件信息"). The deeper gradient anchors the screen.

Outlined / ghost button = `1px solid #BFD6F7` on `#fff`, brand-color text.

### Layout rules
- **Mobile-first, 390×844 viewport** (iPhone 14 Pro mini-program canvas).
- WeChat top bar is a hard fixed 88 px (44 status + 44 title-with-capsule).
- Bottom tab bar is 64 px with 18 px safe-area bottom padding.
- Content sections gutter `14 px`. Inner card padding `14–18 px`.
- All inputs and buttons are at least **44 px** tall.

### Transparency / blur
- Bottom sheets use `rgba(15,31,58,.45)` backdrops, no blur.
- Survey modal uses `rgba(15,31,58,.45)` + `backdropFilter: blur(2px)` for a softer feel.
- No frosted-glass nav bars.

### Imagery vibe
**Cool, slightly desaturated, blue-tinted.** Building photo and factory photo both push toward steel-blue; we overlay a `--brand-stone` (#2C5985) gradient. No warm/golden grading. No grain. No B&W.

### Corner radius
- `--radius-md: 12px` — default cards, inputs.
- `--radius-lg: 14px` — bigger cards, hero.
- `--radius-xl: 18px` — bottom sheets, large modals.
- `--radius-pill: 99px` — all buttons. **Every action button in this product is a pill.**

### Cards
- White background, `--radius-lg` corners.
- `--shadow-sm` elevation.
- 14 px inner padding, 16 px if it holds a section heading.
- Title row prefixed by the **3 px × 14 px blue accent bar** (`.section-rule`).

---

## Iconography

CICADA's mini-program uses **a single hand-crafted 24×24 SVG glyph set**, exported as the `<Glyph name=... />` component in `shell.jsx`. There is no icon font, no Iconify, no Lucide. We preserve it as-is.

**Style:** outlined, 1.6 px stroke, `strokeLinejoin: round`. No fills (except dotted "ON" indicators inside chat/box icons). Single color — receives the parent's brand or ink color.

**Glyph names (20 total):** `repair`, `track`, `diag`, `gift`, `book`, `shield`, `phone`, `chat`, `pin`, `invoice`, `box`, `tooth`, `cam`, `plus`, `star`, `search`, `truck`, `money`, `return`, `edit`, `check`.

**Substitution policy.** If you need an icon outside this set:
1. Prefer **adding** a new glyph to `Glyph` in `shell.jsx` matching the existing stroke / radius / size.
2. If you must use a CDN icon, use **Lucide** (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`) — its 1.5–2 px stroke and rounded joins blend well. **Flag the substitution** in the PR.
3. Never substitute with Heroicons (solid) or FontAwesome — too heavy.

**Other places icons appear:**
- The **WeChat capsule** (top-right) and **status-bar glyphs** are drawn inline in `WxTop` (`shell.jsx`).
- The **WeChat green chat icon** on Home is a literal recreation of WeChat's brand glyph (`#1AAD19`).
- The **brand wordmark** in modals is the JPG logo, not an SVG.
- QR codes are real WeChat QR JPGs (`assets/qr-*.jpg`); the prototype also includes a 64×64 pixel-grid SVG placeholder for survey screens.

**Emoji:** never. **Unicode dingbats:** never. **Middle-dot `·` and full-width slash `／`** are the only "symbol" characters used in body copy.

---

## Mini-program structure (UI kit)

`ui_kits/mini-program/` is a working clickable prototype covering **9 modules / 16 screens** inside a 390×844 iPhone frame:

| Module | Screens |
| --- | --- |
| 首页 | HomeScreen + side-tab to 思科达官网 + 公众号 QR modal |
| 报修 | RepairScreen (4-step form), RepairSuccessScreen |
| 进度 | TrackScreen (list + timeline), OrderDetailScreen |
| 故障自查 | DiagnoseScreen (产品类型 → 故障类型 → 排查), DiagDetailScreen |
| 调研有礼 | SurveyScreen (modal w/ QR + 客服微信) |
| 政策 | WarrantyScreen, FeesScreen |
| 教程 | GuideScreen (×5 kinds) |
| 我的 | MineScreen, OrdersScreen, ProductsScreen, AddressScreen, LoginScreen, FeedbackScreen |
| 联系 | ContactScreen, CompanyScreen |

A floating customer-service FAB cluster (chat pill + phone button + tooltip) sticks on every page.
