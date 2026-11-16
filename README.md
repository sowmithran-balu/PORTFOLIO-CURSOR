# SOWMITHRAN B (MITHRAN) — UNIVERSAL PREMIUM PORTFOLIO

A production-grade, editorial portfolio website built to the **Universal Premium Portfolio Builder** specification, inspired by the high-impact aesthetic of **[touquirakhtar.com](https://touquirakhtar.com/)**.

---

## 🚀 View Locally on Your Computer

No installation, build steps, or internet server needed to test:

### Method 1: Double-Click (Instant)
- In Windows File Explorer, open `C:\Users\Mithran.B\Sowmithran portfolio\`
- **Double-click `index.html`** to open it immediately in Chrome, Edge, or Brave.

### Method 2: PowerShell One-Liner
```powershell
Start-Process "index.html"
```

### Method 3: Local HTTP Server
```powershell
# Built-in Python server
python -m http.server 3000

# Or using Node
npx serve . -l 3000
```
Then visit: [http://localhost:3000](http://localhost:3000)

---

## ⚡ Standalone Feature: Swarm Anti-Gravity Engine

As requested via `imperfec-t/swarm-Antigravity`:
- **"Motion" Button at the top**: Click the header pill button (`Motion: ON / OFF`) or press <kbd>M</kbd> on your keyboard to toggle the interactive particle physics simulation.
- **Flocking & Boid Physics**: Autonomous particles swirl with alignment, cohesion, and cursor deflection.
- **Explosive Burst & Anti-Gravity Rebuild**: Click anywhere on the webpage while Motion is active to send shockwaves through the swarm and watch them rebuild.
- **Particle Density Slider**: Adjust particle count live in the Customizer drawer.

---

## 🎨 Visual Identity & Editorial Design Tokens

- **Typography**:
  - `Display`: **Anton** (Oversized condensed typography matching the Touquir Akhtar hero styling)
  - `Body`: **Manrope** (Clean, legible, modern sans-serif)
  - `Handwritten Accent`: **Caveat** (Editorial organic notes)
  - `Monospace`: **JetBrains Mono** (System tags, telemetry data, and code chips)
- **Palette**:
  - Background: Obsidian Dark (`#090909`)
  - Text: Warm Off-White (`#f2efeb`)
  - Accent: Touquir Crimson (`#e32b3c`)
  - Muted: Warm Slate (`#a09c9a`)

---

## 🛠️ Features & Sections

1. **Editorial Hero**:
   - Giant display headline (`SOWMITHRAN B`)
   - Availability pill: *"Open to internships and collaborations"*
   - Interactive **60 FPS CRT ECG Telemetry Engine** showcasing your **PMcardio Advanced** telemetry algorithms with real-time waveform drawing!
2. **Selected Work & Project Detail Modal**:
   - Instant search bar and category filters (`All`, `Full-Stack`, `Healthtech`, `E-Commerce`).
   - Clicking any project opens the **Project Detail Dialog** with architectural summaries, engineering challenge solutions, and repository links.
3. **Engineering Capabilities (Skills)**:
   - Categorized by Languages, Web Platforms, AI & Cloud Platforms, Frameworks & DevOps, and Core Fundamentals.
4. **Work Experience**:
   - Full Stack Development Intern at **Learnlogicify Technologies** (Dec 2025) highlighting the **60% manual outreach reduction** with Gemini & Perplexity.
5. **Education & Certifications**:
   - B.Tech CSBS @ KIT Coimbatore (CGPA 7.66 / 10).
   - AWS Cloud Practitioner, MongoDB, Infosys Java 11, Python 1 & 2.
6. **Competitive Programming Rigor**:
   - 500+ LeetCode (Rating 1594 • Top 25.14% globally), 1000+ total problems solved, 100+ contests attended, CodeChef 2-Star (1310).
7. **Contact Hub**:
   - Direct email copy button with toast notification + working message form.

---

## ⚙️ Live In-Browser Customizer ("Editable to All Options")

Click the floating **"Customize"** pill in the header to open the live CMS drawer:
- **Profile & Bio**: Edit your name, display nickname, bio, roles, intro, and location.
- **Theme & Colors**: Choose from 5 palette presets or pick any custom hex accent color.
- **Section Toggles**: Toggle Experience, Education, Resume download, and Contact form on/off.
- **Click-to-Edit Mode**: Turn on direct on-page editing to click and edit any text directly on the live webpage.
- **Project Manager**: Add, edit, or delete projects directly from the browser.
- **Export & Import**: Auto-saves to your browser's `localStorage` and provides one-click **"Export & Download config.json"** and **"Reset All to Defaults"**.

---

## 📁 File Structure

```text
Sowmithran portfolio/
├── index.html               # Complete single-file application with Swarm engine & live CMS
├── portfolio-config.json    # Master JSON configuration of all personal data
├── package.json             # NPM package scripts
├── README.md                # Documentation & local instructions
└── assets/
    ├── README.txt           # Assets guide
    └── resume.pdf           # Downloadable resume PDF
```
 