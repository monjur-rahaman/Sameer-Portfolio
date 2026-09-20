# Frontend Requirements: Athkia Subat — Academic Portfolio Website

> **Source reference:** https://www.athkiasubat.com  
> **Purpose:** Complete frontend specification for Claude Code to rebuild this academic personal portfolio from scratch.  
> All content, routes, components, design tokens, and layout architecture are defined below.

---

## 1. Project Overview

A personal academic portfolio website for **Athkia Subat**, a PhD student in Information Science at Indiana University–Bloomington. The site presents her research, publications, design work, and professional identity.

**Tech stack recommendation:** React (Vite) + React Router v6 + Tailwind CSS  
**Alternative:** Plain HTML/CSS/JS with a single-page router (e.g., vanilla-router or history API)

---

## 2. Design System

### 2.1 Color Palette

| Token Name         | Hex Value   | Usage                                            |
|--------------------|-------------|--------------------------------------------------|
| `color-bg`         | `#FFFFFF`   | Page background                                  |
| `color-text`       | `#1A1A1A`   | Primary body text                                |
| `color-text-muted` | `#555555`   | Secondary/caption text                           |
| `color-accent`     | `#8B1A1A`   | Section headings, bold links (deep crimson/maroon) |
| `color-nav-bg`     | `#FFFFFF`   | Navbar background                                |
| `color-nav-text`   | `#1A1A1A`   | Navbar link text                                 |
| `color-dropdown-bg`| `#1A1A1A`   | Dropdown menu background (near-black)            |
| `color-dropdown-text`| `#FFFFFF` | Dropdown link text                               |
| `color-border`     | `#E0E0E0`   | Dividers, light borders                          |
| `color-hover`      | `#8B1A1A`   | Link hover state                                 |

> The accent color (`#8B1A1A`) is a dark maroon/crimson used exclusively on section headings (H1/H2 page titles like "PROJECTS", "PUBLICATIONS"). All other text is near-black.

### 2.2 Typography

| Role             | Font Family                       | Weight     | Size / Usage                            |
|------------------|-----------------------------------|------------|-----------------------------------------|
| Site Title/Logo  | `'Roboto', 'Arial', sans-serif`   | 500        | 20px uppercase letter-spacing: 0.08em   |
| Nav Links        | `'Roboto', 'Arial', sans-serif`   | 400        | 14–15px                                 |
| Page Heading H1  | `'Roboto', 'Arial', sans-serif`   | 700        | 28–36px uppercase, `color-accent`       |
| Section H2       | `'Roboto', 'Arial', sans-serif`   | 500–600    | 18–22px, `color-text`                   |
| Body Text        | `'Roboto', 'Arial', sans-serif`   | 400        | 15–16px, `color-text`, line-height 1.7  |
| Small/Captions   | `'Roboto', 'Arial', sans-serif`   | 400        | 13px, `color-text-muted`                |
| Italic Quote     | `'Georgia', 'Times New Roman', serif` | 400 italic | 16–18px, used for quotes on Projects page |

> Include via Google Fonts: `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');`

### 2.3 Spacing Scale

Use an 8px base grid: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96px`.

### 2.4 Layout

- Max content width: `900px` (centered)
- Page padding (sides): `24px` on desktop, `16px` on mobile
- Navbar height: `~64px`
- Section vertical spacing: `48–80px` between major sections

### 2.5 Component Style Rules

- **No rounded corners** on structural elements (zero border-radius on cards, sections)
- **No box shadows** as primary design elements (flat, clean aesthetic)
- **Underline links** in body content; no underline in nav
- **Uppercase** section titles (H1 level), e.g. "PROJECTS", "PUBLICATIONS", "GALLERY"
- **No background colors** on content sections — everything on plain white
- Buttons: minimal text links styled with `color-accent`, or plain anchor tags

---

## 3. Component Architecture

### 3.1 Shared Components

#### `<Navbar />`

- **Position:** Fixed top, full width, `z-index: 100`, white background, subtle bottom border (`1px solid #E0E0E0`)
- **Left:** Site logo/name `ATHKIA SUBAT` — uppercase, letter-spaced, links to `/home`
- **Right:** Horizontal nav links (desktop): `Home`, `Publications`, `Projects ▾`, `Gallery`, `Contact`
  - Active link: underline or bold
  - Hover: color changes to `color-accent`
- **"Projects" Dropdown:** On hover (desktop) or click (mobile), shows a dark dropdown panel (`#1A1A1A` bg, white text):
  - Research → `/projects/research`
  - Blog → `/projects/blog`
  - Design → `/projects/design`
  - UI/UX → `/projects/uiux`
  - Marketing → `/projects/marketing`
  - Dropdown has no border-radius, clean flat appearance
- **Mobile:** Hamburger icon → slide-down or overlay menu showing all links + subroutes indented under "Projects"
- **Search icon:** Top-right corner (non-functional icon for visual fidelity; can be omitted or open a modal)

#### `<Footer />`

- Minimal, plain. No elaborate footer needed — matches the Google Sites origin.
- Optional: Copyright line `© Athkia Subat` centered, small text, `color-text-muted`
- No social links in footer (they are on the Home page hero section)

---

## 4. Routes & Pages

### Route Map

```
/                    → redirect to /home
/home                → HomePage
/publications        → PublicationsPage
/projects            → ProjectsPage (overview)
/projects/research   → ProjectsResearchPage
/projects/blog       → ProjectsBlogPage
/projects/design     → ProjectsDesignPage
/projects/uiux       → ProjectsUiuxPage
/projects/marketing  → ProjectsMarketingPage
/gallery             → GalleryPage
/contact             → ContactPage
```

---

## 5. Page Specifications

---

### 5.1 Home Page (`/home`)

**Layout:** Single column, centered, max-width 900px.

#### Hero Section
- **Profile photo:** Large circular or square image of Athkia Subat, centered. Placeholder: `[PROFILE PHOTO]` or use a grey avatar placeholder.
- **Name:** `Athkia Subat` — H1 size (~28px), normal weight
- **Title lines (stacked, centered):**
  ```
  PhD Student, Information Science
  Luddy School of Informatics, Computing and Engineering
  Indiana University - Bloomington, Indiana, USA
  ```
- **Social Icons Row:** 5 icon links in a horizontal row, centered beneath the title. All open external links in new tab:
  1. Google Scholar → `https://scholar.google.com/citations?user=DTk89oEAAAAJ&hl=en`
  2. LinkedIn → `https://www.linkedin.com/in/athkiasubat/`
  3. Twitter/X → `https://twitter.com/AthkiaSubat`
  4. Email → `mailto:subat.athkia@gmail.com`
  5. ORCID → `https://orcid.org/0000-0001-6281-1624`
  - Icons: Use SVG icons or Font Awesome / Heroicons equivalents. Displayed as small ~24px icons, `color-text`, hover `color-accent`.

---

#### About Section
- **Heading:** None (flows naturally after hero)
- **Body paragraph:**
  > Athkia Subat is a PhD student in the Department of Information and Library Science at Luddy School of Informatics, Computing, and Engineering, Indiana University-Bloomington (IUB), USA. Additionally, she serves as an Associate Instructor and Graduate Research Assistant at IUB. Her minor is Information Systems in the Department of Operations and Decision Technologies at Kelley School of Business at Indiana University. Athkia holds a Bachelor of Business Administration from the University of Chittagong in 2023.
  >
  > Athkia received an Associate Instructor Fellowship and two Summer Fellowships from the Luddy School of Informatics, Computing, and Engineering. She is a fellow of LeaderShape Institute at Indiana University for 2025. To date, Athkia has participated in several conferences, including ASIS&T 2025, Political Networks and Computational Social Science Conference 2025, 31st Americas Conference on Information Systems 2025, IConference 2025, International Society for the Scholarship of Teaching and Learning (ISSOTL) Conference 2024 and Harvard Project for Asian and International Relations Conference 2022, etc.
  >
  > Previously, Athkia worked in marketing and digital brand management at GD Assist Limited and CloudDefense.AI. Athkia has collaborated on ten research projects and authored nine scholarly articles (Scopus, ABDC ranked).
  >
  > Her current research interests encompass technology, information, AI-mediated social media communication, and organization, with a particular focus on addressing social aspects of technology and information asymmetry.

---

#### Travel Update Section
- **Heading:** `Travel Update:` (plain, `color-text`, bold ~16px, followed by a divider or just spacing)
- Displayed as a simple vertical list of dated entries:

| Date | Event |
|------|-------|
| July 27, 2026 | [Presentation] at 12th International Conference on Computational Social Science, Burlington, Vermont, United States |
| November 14, 2025 | [Book chapter presentation at panel] at Association of Information Science and Technology 2025 annual meeting in Arlington Washington DC, United States. |
| August 14, 2025 | [Full paper presentation] 31st Americas Conference on Information Systems 2025 Hosted by Association of Information System (AIS) in Montreal, Canada. |
| August 10, 2025 | [Poster Presentation] 18th Annual Political Networks and Computational Social Science Conference (PolNet-PaCSS), Hosted by Harvard University and Northeastern University. Boston, United States. |

- Style: Each item is a row with the date in `color-accent` or `color-text-muted` and event text in `color-text`.

---

#### Grants and Awards Section
- **Heading:** `GRANTS AND AWARDS` — uppercase H2, `color-text`
- Each award as a block:

**Award 1:**
- Title: Summer Research Fellowship at Indiana University
- Date: 15 September 2026
- Organized By: Luddy School of Computing Informatics and Engineering, Indiana University
- Scholarship: USD 5,000

**Award 2:**
- Title: Summer Research Fellowship at Indiana University
- Date: 15 September 2025
- Organized By: Luddy School of Computing Informatics and Engineering, Indiana University
- Scholarship: USD 5,000

**Award 3:**
- Title: Doctoral Associate Instructor Fellowship at Indiana University
- Date: 15 September 2024
- Organized By: Luddy School of Computing Informatics and Engineering, Indiana University
- Scholarship: USD 13,000

**Award 4:**
- Title: Best Performer in Digital Marketing
- Date: 27 September 2021
- Project: Learning and Earning Development Project
- Organized By: ICT Division, Government of Bangladesh
- Prize: PASSION-BX5800S, Walton Laptop (USD 500)

**Award 5:**
- Title: Special Mention in WACC Case Competition
- Date: 26 June 2021
- Organized By: Academy of Asian Business

- Style: Each award is a plain text block separated by a horizontal rule or generous spacing. Label (`Date:`, `Organized By:`, `Scholarship:`) in `color-text-muted`, values in `color-text`.

---

#### News and Press Section
- **Heading:** `NEWS AND PRESS` — uppercase H2
- List of entries with hyperlinked `[Link]`:

1. AD Scientific Index 2024 [[Link](https://www.adscientificindex.com/?subject=Student%2C+University+of+Chittagong)] — Date accessed: 23 September 2024
2. 1st Jamal Nazrul Islam National Research Conference [[Link](https://thefinancialexpress.com.bd/education/jamal-nazrul-islam-national-youth-researchers-conference-inaugurated-in-cu-1647077909)] — Date accessed: 12 March 2022
3. Hult Prize Business Idea Competition [[Link](https://www.risingbd.com/english/campus/news/81521)] — Date accessed: 10 August 2021

---

#### Events and Travels Section
- **Heading:** `EVENTS AND TRAVELS` — uppercase H2
- Timeline-style list of events (plain, no icons needed):

| Date | Event | Location |
|------|-------|----------|
| July 27, 2026 | [Presentation] at 12th International Conference on Computational Social Science | Burlington, Vermont, United States |
| November 14, 2025 | [Book chapter presentation at panel] at ASIS&T 2025 annual meeting | Arlington Washington DC, United States |
| August 14, 2025 | [Full paper presentation] 31st AMCIS 2025 | Montreal, Canada |
| August 10, 2025 | [Poster Presentation] 18th Annual PolNet-PaCSS | Boston, United States |
| March 14–18, 2025 | Iconference 2025, Organized By: ISchools | Indiana University Bloomington, Indiana, USA |
| March 12–14, 2025 | Leadershape 2025, Organized By: The Leadershape Institute | Bradford Woods, Indiana, USA |
| October 29–31, 2024 | ISSOTL Conference, Organized By: Indiana University Bloomington | French Lick, Indiana, USA |
| June 26, 2023 | FLAIRS' Pitch – Regional Business Idea Competition | University of Chittagong, Bangladesh |
| November 27, 2023 | Joy Bangla Youth Award 2022, Organized By: CRI | Sheik Hasina Youth Center, Bangladesh |
| August 22–25, 2022 | Harvard Asia Conference 2022, HPAIR | IIIT Delhi, India |

---

#### Schedule a Call Section
- **Heading:** `SCHEDULE A CALL` (with subtitle `With Me`)
- **CTA Link:** `Click Here!` → opens `https://calendly.com/athkiasubat` in new tab
- Style: Centered, simple, could be a slightly styled button or bold link

---

### 5.2 Publications Page (`/publications`)

**Layout:** Single column, max-width 900px.

**Page Heading:** `PUBLICATIONS` — H1, uppercase, `color-accent`

**Intro line:**
> For a complete list of publications, please visit my [CV](https://docs.google.com/document/d/1sWPwDBZ27xw7v2PIXlTva4i4HxRWpB7W/edit) (last updated 4/2026).

---

#### Poster Presentation
**Sub-heading:** `Poster Presentation` (H2 or bold label)

1. Poster Presentation at 18th Annual Political Networks and Computational Social Science Conference (PolNet-PaCSS), Hosted by Harvard University and Northeastern University "How do hashtags impact history? The use of social media in the 2024 Bangladeshi Gen Z revolution".

---

#### Conference Proceedings
**Sub-heading:** `Conference Proceedings`

1. [Completed full paper at 31st Americas Conference for Information System 2025 in Montreal, Canada] Subat, Athkia and Fichman, Pnina, "How do hashtags impact history? The use of social media in the 2024 Bangladeshi Gen Z revolution" (2025). AMCIS 2025 Proceedings. 4.

---

#### Book Chapters
**Sub-heading:** `Book Chapters`

1. Fichman, P. & Subat, A. (October 2026). Political trolling during the 2024 Gen Z Revolution of Bangladesh. *Online Political Trolling.* Rowman & Littlefield Publishing / Bloomsbury. [Under Contract]

---

#### Journal Publications (Peer Reviewed)
**Sub-heading:** `Journal Publications [Peer Reviewed]`

Displayed as a numbered list (descending: 7 to 1):

7. [Forthcoming] Rahman, M. R., Rahman, M. M., & Subat, A., A. Roksana (2026). Labor Migration and Economic Growth Nexus in Bangladesh: An ARDL Approach to Co-Integration Analysis. *Journal of Accounting-Business & Management*, 33(1).

6. Rahman, M.R., Rahman, M.M., Subat, A. and Tarin, T.I. (2023), "Does the pharmaceutical industry's growth relate to Bangladesh's macroeconomic stability?", *International Journal of Pharmaceutical and Healthcare Marketing*, https://doi.org/10.1108/IJPHM-04-2023-0033

5. Rahman, M. R., Rahman, M. M., & Subat, A. (2022). Is the general insurance business in Bangladesh financially distressed? *Labuan Bulletin of International Business and Finance (LBIBF)*, 25–41.

4. Rahman, M. R., Rahman, M. M., & Subat, A. (2022). Assessment of Performance of Mutual Funds Listed in Dhaka Stock Exchange, Bangladesh. *The Journal of Management Theory and Practice*, 3(1), 1–12. DOI: https://doi.org/10.37231/jmtp.2022.3.1.167

3. Akter, S., Rahman, M. M., Subat, A., & Rahman, M. R. (2021). Assessing the Performance of Selected Islamic Banks: Evidence from Bangladesh. *International Business Education Journal*, 14(2) DOI: https://doi.org/10.37134/ibej.vol14.2.9.2021

2. Subat, A., Rahman, M. M., & Rahman, M. R. (2020). Employees Perception on Recruitment and Selection Process in Banking Sector of Bangladesh. *The Journal of Management Theory and Practice*, 1(3), 21–27. DOI: https://doi.org/10.37231/jmtp.2020.1.3.41

1. Rahman, M. R., Rahman, M. M., & Subat, A. (2020). Measuring financial distress of non-bank financial Institutions of Bangladesh using Altman's Z-Score model. *International Business Education Journal*, 15–28. DOI: https://doi.org/10.37134/ibej.vol13.sp.2.2020

Style: DOI links are active hyperlinks, underlined in body. Author names in plain text. Journal titles in *italic*.

---

#### Dissertation
**Sub-heading:** `Dissertation`

**Master of Business Administration**
- Public Perception of AI generated Deepfake towards financial frauds [PDF — placeholder link]

**Bachelor of Business Administration**
- Information System Success of Software Development Business in Bangladesh [PDF — placeholder link]

---

### 5.3 Projects Overview Page (`/projects`)

**Layout:** Single column, max-width 900px.

**Page Heading:** `PROJECTS` — H1, uppercase, `color-accent`

**Quote block** (displayed prominently, centered, italic serif font):
> *'Vision without action is a dream. Action without vision is simply passing the time.*
> *Action with Vision is making a positive difference.'*
> ~ Joel Barker

Style: `font-family: Georgia, serif`, italic, centered, `font-size: 18px`, generous vertical padding.

---

#### Project Cards

Three project cards displayed vertically (one column, full width up to max-width). Each card has:
- A **full-width image** (from original Google Sites CDN or placeholder image)
- A **"Click Here" link** beneath the image pointing to the relevant subroute
- A **title** (bold, ~18px)
- A **description paragraph**

**Card 1 — Research Project**
- Image: Research paper screenshot (pharmaceutical study thumbnail)
- Link: `/projects/research`
- Title: `Research Project`
- Description: My current research interests are in social computing, digital media, behavioural economics and information science. I solve socio-technical issues through quali-quantitative methods. Please click here for more information.

**Card 2 — Design Project**
- Image: Creative design portfolio sample
- Link: `/projects/design`
- Title: `Design Project`
- Description: I design static graphics, mockups, corporate branding projects, digital campaigns and other print designs for venue promotion. I use Adobe Illustrator, Photoshop, Canva, Figma and more. Please click here for more information.

**Card 3 — Marketing Project**
- Image: Marketing/social media visual
- Link: `/projects/marketing`
- Title: `Marketing Project`
- Description: I help people, young entrepreneurs to achieve organic growth in their online business. I make effort to create value to their online customer, particularly I work in LinkedIn, Facebook, X and email marketing. Please click here for more information.

**CTA at bottom:**
- Text: `Get In touch`
- Link: `mailto:subat.athkia@gmail.com`
- Style: Plain link or simple button

---

### 5.4 Projects → Research (`/projects/research`)

**Page Heading:** `CURRENT RESEARCH` — H2/H1, uppercase, `color-text` or `color-accent`

**Projects listed as bold H2 headings (no body text — content is heading-only):**

- `Project 1: Young People's Attitudes towards and Experiences with AI-generated deepfake Videos.`
- `Project 2: Social media and Gen Z uprising in Bangladesh`
- `Project 3: Impact of AI disclosures on Users' Emotion`

Style: Each project title as an H2, generous spacing between them, clean and minimal.

---

### 5.5 Projects → Blog (`/projects/blog`)

**Page Heading:** `BLOG` — H1, uppercase

**Content:** This page is intentionally empty on the original site (no posts yet).

Render:
- Heading: `BLOG`
- Body: A placeholder message: *"No blog posts yet. Check back soon."* in `color-text-muted`, centered.

---

### 5.6 Projects → Design (`/projects/design`)

**Page Heading:** `CREATIVE DESIGN` — H1, uppercase, `color-accent`

**Content:** A vertical gallery of labeled design works, each with a **full-width image** followed by a **subheading label**.

| Section Heading | Description |
|----------------|-------------|
| Healthcare leaflets | Image placeholder |
| Service offerings | Image placeholder |
| Discount offerings | Image placeholder |
| Tourism day | Image placeholder |
| Air-ticket promotion | Image placeholder |
| Awareness session | Image placeholder |
| Visa promotion | Image placeholder |
| Ramadan | Image placeholder |
| Insurance service | Image placeholder |

For each item:
- `<h2>` or `<h3>` label above or below the image
- Full-width image (use grey `#E0E0E0` placeholder with label text inside)
- `object-fit: cover`, max-height ~400px per image

**Footer CTA:**
- `Follow for more...` → links to `https://www.linkedin.com/in/athkiasubat/` (external, new tab)

---

### 5.7 Projects → UI/UX (`/projects/uiux`)

**Page Heading:** None (image takes full width at top)

**Content:**
- Full-width header image (placeholder: grey box ~400px tall)
- Paragraph: `Please find my current project` [here](https://www.upwork.com/freelancers/~01bcc6a58789496e7a) (external link, new tab, underlined)

---

### 5.8 Projects → Marketing (`/projects/marketing`)

**Page Heading:** None (image takes full width at top)

**Content:**
- Full-width header image (placeholder: grey box ~400px tall)
- Paragraph: `Please book your order` [here](https://www.upwork.com/freelancers/~01bcc6a58789496e7a) (external link, new tab, underlined)

---

### 5.9 Gallery Page (`/gallery`)

**Page Heading:** `ACHIEVEMENT GALLERY` — H1, uppercase, `color-accent`

**Layout:** Masonry or 2-column responsive grid of photos with captions.

Use CSS Grid: `grid-template-columns: repeat(2, 1fr)` on desktop, `1fr` on mobile.  
Image `object-fit: cover`, natural height (not forced square).

**Gallery Items (18 total):**

Each item: image + optional caption below in small `color-text-muted` text.

| # | Caption |
|---|---------|
| 1 | *(no caption)* |
| 2 | *(no caption)* |
| 3 | HPAIR 22, Delhi, India |
| 4 | Flair's Pitch 23, Chittagong |
| 5 | Research Festival 23, Chittagong |
| 6 | Women in Leadership 21, Chittagong |
| 7 | HPAIR 22, India |
| 8 | CURHS Best Secretary |
| 9 | JNINC 2022 COO Speech, Chittagong |
| 10 | JNINC 2022 COO Speech, Chittagong |
| 11 | National Youth Award 23 Dhaka |
| 12 | HPAIR 22, India |
| 13 | Hult Prize Campus Director, Chittagong |
| 14 | BFLD President signing off, Chittagong |
| 15 | ASIS&T 2025 panel, Washington DC, USA |
| 16 | AMCIS2025 Presenter, Montreal Canada |
| 17 | Graduation Ceremony 2025, Chittagong |
| 18 | POLNET PACSS 25 presenter, Boston, USA |
| 19 | POLNET PACSS 25 presenter, Boston, USA |
| 20 | AMCIS2025 Presenter, Montreal Canada |
| 21 | Luddy Women research, Indiana, USA |
| 22 | ASIS&T 25, Washington DC, USA |

**Placeholder implementation:** Use `<div>` blocks with `background: #E0E0E0`, a centered label/caption inside, and a consistent min-height (~200px). Developer should swap in real images from the CDN URLs (provided separately) or allow image upload.

**Note:** Original images are hosted on Google Lh3/Googleusercontent CDN. They can be directly used as `<img src="...">` if linking externally, OR replaced with local assets.

---

### 5.10 Contact Page (`/contact`)

**Page Heading:** `Contact Me` — H2, `color-text`

**Content block:**

```
Please feel free to contact me on UTC-5

Book schedule HERE  →  https://calendly.com/athkiasubat  (external link)

Working hours: 9 AM–5 PM EST

Email: subat.athkia@gmail.com  |  asubat@iu.edu
```

**Map embed:**
- Embed an `<iframe>` Google Maps pointing to Indiana University Bloomington:
  ```html
  <iframe
    src="https://maps-api-ssl.google.com/maps?hl=en-US&ll=39.165953,-86.526523&output=embed&q=39.166109,-86.526535&z=16"
    width="100%"
    height="400"
    style="border:0;"
    allowfullscreen
    loading="lazy"
  ></iframe>
  ```

---

## 6. Navigation — Full Route & Dropdown Specification

```
Navbar Links (left to right):
  Home          →  /home
  Publications  →  /publications
  Projects ▾   →  /projects  (with dropdown on hover/click)
    ├── Research    →  /projects/research
    ├── Blog        →  /projects/blog
    ├── Design      →  /projects/design
    ├── UI/UX       →  /projects/uiux
    └── Marketing   →  /projects/marketing
  Gallery       →  /gallery
  Contact       →  /contact
```

**Dropdown behavior:**
- Desktop: Opens on hover, closes on mouse-leave
- Mobile: Toggled by click, expands inline
- Dropdown panel: `background: #1A1A1A`, `color: #FFFFFF`, no border radius, minimal padding
- Active route: Bold or underlined link in nav

---

## 7. Responsive Breakpoints

| Breakpoint | Width       | Behavior |
|------------|-------------|----------|
| Mobile     | `< 640px`   | Single column, hamburger menu, full-width images |
| Tablet     | `640–1024px`| Single column with more padding, dropdown collapses |
| Desktop    | `> 1024px`  | Full navbar with hover dropdown, 2-col gallery grid |

---

## 8. External Links Summary

All external links must open in `target="_blank"` with `rel="noopener noreferrer"`.

| Destination | URL |
|-------------|-----|
| Google Scholar | https://scholar.google.com/citations?user=DTk89oEAAAAJ&hl=en |
| LinkedIn | https://www.linkedin.com/in/athkiasubat/ |
| Twitter/X | https://twitter.com/AthkiaSubat |
| Email | mailto:subat.athkia@gmail.com |
| ORCID | https://orcid.org/0000-0001-6281-1624 |
| Calendly | https://calendly.com/athkiasubat |
| Upwork | https://www.upwork.com/freelancers/~01bcc6a58789496e7a |
| CV Document | https://docs.google.com/document/d/1sWPwDBZ27xw7v2PIXlTva4i4HxRWpB7W/edit |

---

## 9. Image Strategy

- All gallery and project images: use the original Google CDN `lh3.googleusercontent.com` URLs from the source site directly in `<img>` tags, OR use `#E8E8E8` placeholder divs with descriptive text.
- Profile photo: Placeholder grey circle avatar (100–160px diameter) labelled "Profile Photo"
- Social icons: Use SVG icons (Google Scholar, LinkedIn, Twitter, Email, ORCID) — free icon sets like Simple Icons (`https://simpleicons.org/`) work well.

---

## 10. Accessibility Requirements

- All images must have descriptive `alt` text
- Navbar must be keyboard-navigable (Tab key, Enter to activate)
- Dropdown must close on `Escape` key
- Color contrast must meet WCAG AA (the dark maroon `#8B1A1A` on white passes for large text)
- Skip-to-content link at page top (visually hidden, visible on focus)
- Focus indicators visible on all interactive elements

---

## 11. File/Folder Structure (Recommended)

```
src/
├── components/
│   ├── Navbar.jsx         # Top navigation with dropdown
│   └── Footer.jsx         # Minimal footer
├── pages/
│   ├── HomePage.jsx
│   ├── PublicationsPage.jsx
│   ├── ProjectsPage.jsx
│   ├── ProjectsResearchPage.jsx
│   ├── ProjectsBlogPage.jsx
│   ├── ProjectsDesignPage.jsx
│   ├── ProjectsUiuxPage.jsx
│   ├── ProjectsMarketingPage.jsx
│   ├── GalleryPage.jsx
│   └── ContactPage.jsx
├── styles/
│   └── globals.css        # CSS variables, reset, base styles
├── App.jsx                # Router setup
└── main.jsx               # Entry point
```

---

## 12. CSS Variables (globals.css)

```css
:root {
  --color-bg: #FFFFFF;
  --color-text: #1A1A1A;
  --color-text-muted: #555555;
  --color-accent: #8B1A1A;
  --color-nav-bg: #FFFFFF;
  --color-dropdown-bg: #1A1A1A;
  --color-dropdown-text: #FFFFFF;
  --color-border: #E0E0E0;

  --font-sans: 'Roboto', 'Arial', sans-serif;
  --font-serif: 'Georgia', 'Times New Roman', serif;

  --max-width: 900px;
  --navbar-height: 64px;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-sans);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.7;
  font-size: 15px;
}

a {
  color: var(--color-text);
  text-decoration: underline;
}

a:hover {
  color: var(--color-accent);
}

.page-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-md);
  padding-top: calc(var(--navbar-height) + var(--spacing-lg));
}

.page-heading {
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--spacing-lg);
  letter-spacing: 0.04em;
}
```

---

## 13. React Router Setup (App.jsx)

```jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PublicationsPage from './pages/PublicationsPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectsResearchPage from './pages/ProjectsResearchPage';
import ProjectsBlogPage from './pages/ProjectsBlogPage';
import ProjectsDesignPage from './pages/ProjectsDesignPage';
import ProjectsUiuxPage from './pages/ProjectsUiuxPage';
import ProjectsMarketingPage from './pages/ProjectsMarketingPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/research" element={<ProjectsResearchPage />} />
        <Route path="/projects/blog" element={<ProjectsBlogPage />} />
        <Route path="/projects/design" element={<ProjectsDesignPage />} />
        <Route path="/projects/uiux" element={<ProjectsUiuxPage />} />
        <Route path="/projects/marketing" element={<ProjectsMarketingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
```

---

## 14. Build & Deploy Notes

- `npm create vite@latest athkia-portfolio -- --template react`
- Install: `react-router-dom`, `tailwindcss` (optional), no other external dependencies required
- Images: Can be referenced from Google CDN directly or stored in `public/images/`
- No backend required — entirely static frontend
- Can be deployed to Netlify, Vercel, or GitHub Pages with `vite build`

---

*End of Requirements Document*