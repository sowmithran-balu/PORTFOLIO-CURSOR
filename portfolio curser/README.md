# 🚀 Portfolio Cursor — Swarm Rebuild Extension

A custom Chrome extension that wipes any webpage to a blank canvas and lets a swarm of multiplayer cursors rebuild it live: crosshair-drawn boxes, typed text, pen-tool lines, ruler guides, and duplicate dragging, accompanied by synthesized Web Audio sound effects.

---

## 🌟 Key Features

| Feature | How It Works |
| :--- | :--- |
| **One-Click Rebuild** | Starts the reconstruction animation on the current webpage. |
| **Multiplayer Cursors** | Displays dozens of colorful animated cursors with named badges. |
| **Website Wipe** | Smoothly dissolves the original page into an isolated blank canvas. |
| **Element Reconstruction** | Animates creation of boxes, headings, borders, and cards. |
| **Scroll-Following Swarm**| Cursors flock, chase, and build ahead as you scroll down. |
| **Dynamic Swarm** | Faster scrolling summons more agents (up to 48 cursors). |
| **Tour Mode** | Automatically scrolls through the page at a cinematic pace. |
| **Speed Control** | Toggle between **1×**, **2×**, or **3×** build speed. |
| **Sound Synthesis** | Live Web Audio API mechanical keyboard typing, pentatonic chords, and snap clicks. |
| **Replay** | Replays the entire reconstruction from scratch. |
| **Go Live** | Restores the original interactive webpage. |
| **Keyboard Shortcut** | Press <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> to launch anywhere. |
| **Exit** | Press <kbd>Esc</kbd> or click the toolbar icon again. |

---

## 🛠️ Internal Architecture & Modules

- **Page Controller**: Captures layout snapshots, applies media visibility masks, and restores original DOM state.
- **Swarm Engine**: Autonomous boids physics simulation, orbiting, alignment, and mouse-avoiding flocking.
- **Drawing Engine**: Simulates crosshairs, dimensions ($W \times H$), pen-tool vectors, and Figma-style ruler guides.
- **Typing Engine**: Realistic keyboard typing with I-beams, blinking carets, and expanding font sizes.
- **Scroll Controller**: Tracks viewport velocity and coordinates scroll-linked task progression.
- **Animation Scheduler**: Orchestrates dependency trees (parents before children, masters before duplicates) and speed scaling.
- **Replay Manager**: Resets state and retriggers full blueprint reconstruction.
- **UI Controller**: On-screen control bar (Tour, 1×/2×/3×, Sound, Replay, Go Live, Close).

---

## 📥 How to Install in Google Chrome

1. Open **Google Chrome** and navigate to:
   ```text
   chrome://extensions
   ```
2. Enable **Developer mode** using the toggle switch in the top-right corner.
3. Click the **"Load unpacked"** button in the top-left corner.
4. Select this directory:
   ```text
   C:\Users\Mithran.B\Sowmithran portfolio\portfolio curser
   ```
5. Click the puzzle icon (🧩) in Chrome's toolbar and **Pin** "Portfolio Cursor — Swarm Rebuild".
6. Navigate to any website (or your portfolio at `http://localhost:3000`) and press **<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>** (or click the extension icon) to start the rebuild!

