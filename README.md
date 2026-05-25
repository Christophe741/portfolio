<div align="center">

![Banner](https://capsule-render.vercel.app/api?type=soft&color=0:0a0e1a,100:5eead4&height=220&section=header&text=CHRISTOPHE%20WINKEL&fontSize=60&fontColor=ffffff&fontAlignY=40&desc=Mission%20Control%20%C2%B7%20Portfolio&descSize=18&descAlignY=65&animation=fadeIn)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=22&pause=1500&color=5eead4&center=true&vCenter=true&width=600&height=50&lines=Full-Stack+Developer;Next.js+%C2%B7+React+%C2%B7+TypeScript;From+prototype+to+product;NODE+%C2%B7+CWK-01+%C2%B7+Operational)](https://christophewinkel.dev)

<br />

[![Live Site](https://img.shields.io/badge/Live_Site-christophewinkel.dev-5eead4?style=for-the-badge&logo=vercel&logoColor=black)](https://christophewinkel.dev)

</div>

## Structure

```
src/
├── app/
│   ├── layout.tsx       # Fonts, metadata
│   ├── page.tsx         # Desktop + mobile layout toggle
│   └── globals.css      # Design system (tokens, grid, HUD components)
├── components/
│   ├── HudPanel.tsx     # HUD container + decorative corners
│   ├── TopBar.tsx       # Navigation bar + language switcher
│   ├── Hero.tsx         # Main introduction
│   ├── Telemetry.tsx    # Key info panel
│   ├── KpiPanel.tsx     # KPI cards (4 metrics)
│   ├── Stack.tsx        # Tech stack
│   ├── Comms.tsx        # Contact channels
│   ├── Missions.tsx     # Shipped projects
│   ├── LogStream.tsx    # Live activity feed
│   ├── Stars.tsx        # Animated starfield background
│   └── mobile/
│       └── MobileLayout.tsx  # Mobile layout (tabs + 4 screens)
└── context/
    └── LangContext.tsx  # FR/EN internationalisation
```

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Design system

Tokens defined in `globals.css`:

| Token          | Value                        | Usage                        |
| -------------- | ---------------------------- | ---------------------------- |
| `--bg`         | `#050913`                    | Main background              |
| `--panel`      | `#0a1228`                    | Panel background             |
| `--panel-2`    | `#0c142a`                    | Alternate panel background   |
| `--hud`        | `#0e1a36`                    | HUD background               |
| `--teal`       | `#5eead4`                    | Primary accent               |
| `--teal-2`     | `#2dd4bf`                    | Secondary accent             |
| `--teal-soft`  | `rgba(94,234,212,.12)`       | Subtle accent fill           |
| `--teal-line`  | `rgba(94,234,212,.35)`       | Accent borders               |
| `--ink`        | `#e6ecf5`                    | Primary text                 |
| `--ink-dim`    | `#8a9bbd`                    | Secondary text               |
| `--ink-mute`   | `#4a5a7a`                    | Muted text                   |
| `--line`       | `#1d2b4d`                    | Borders                      |
| `--line-soft`  | `#152040`                    | Dividers                     |
| `--amber`      | `#fcd34d`                    | Warnings                     |
| `--indigo`     | `#a5b4fc`                    | Backend / purple accent      |
| `--rose`       | `#fda4af`                    | Data / pink accent           |
| `--green`      | `#86efac`                    | OK statuses                  |

The `.hud` class applies the panel style (semi-transparent background, border, teal corners).

## Deployment

Deployed on Vercel. Every push to `main` triggers an automatic build.
