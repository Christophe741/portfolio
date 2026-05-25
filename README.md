<div align="center">

![Banner](https://capsule-render.vercel.app/api?type=soft&color=0:0a0e1a,100:5eead4&height=220&section=header&text=CHRISTOPHE%20WINKEL&fontSize=60&fontColor=ffffff&fontAlignY=40&desc=Mission%20Control%20%C2%B7%20Portfolio&descSize=18&descAlignY=65&animation=fadeIn)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=22&pause=1500&color=5eead4&center=true&vCenter=true&width=600&height=50&lines=D%C3%A9veloppeur+Full-Stack;Next.js+%C2%B7+React+%C2%B7+TypeScript;Du+prototype+au+produit;NODE+%C2%B7+CWK-01+%C2%B7+Operational)](https://christophewinkel.dev)

<br />

[![Live Site](https://img.shields.io/badge/Live_Site-christophewinkel.dev-5eead4?style=for-the-badge&logo=vercel&logoColor=black)](https://christophewinkel.dev)

</div>

## Structure

```
src/
├── app/
│   ├── layout.tsx       # Fonts, metadata
│   ├── page.tsx         # Desktop + mobile layout toggle
│   └── globals.css      # Design system (tokens, grid, composants HUD)
├── components/
│   ├── HudPanel.tsx     # Conteneur HUD + coins décoratifs
│   ├── TopBar.tsx       # Barre de navigation + switcher de langue
│   ├── Hero.tsx         # Présentation principale
│   ├── Telemetry.tsx    # Panel infos clés
│   ├── KpiPanel.tsx     # Cartes KPI (4 métriques)
│   ├── Stack.tsx        # Technologies maîtrisées
│   ├── Comms.tsx        # Canaux de contact
│   ├── Missions.tsx     # Projets livrés
│   ├── LogStream.tsx    # Flux d'activité en temps réel
│   ├── Stars.tsx        # Fond étoilé animé
│   └── mobile/
│       └── MobileLayout.tsx  # Layout mobile (tabs + 4 écrans)
└── context/
    └── LangContext.tsx  # Internationalisation FR/EN
```

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Design system

Tokens définis dans `globals.css` :

| Token          | Valeur                       | Usage                        |
| -------------- | ---------------------------- | ---------------------------- |
| `--bg`         | `#050913`                    | Fond principal               |
| `--panel`      | `#0a1228`                    | Fond des panels              |
| `--panel-2`    | `#0c142a`                    | Fond alternatif              |
| `--hud`        | `#0e1a36`                    | Fond HUD                     |
| `--teal`       | `#5eead4`                    | Accent principal             |
| `--teal-2`     | `#2dd4bf`                    | Accent secondaire            |
| `--teal-soft`  | `rgba(94,234,212,.12)`       | Fond accent subtil           |
| `--teal-line`  | `rgba(94,234,212,.35)`       | Bordures accent              |
| `--ink`        | `#e6ecf5`                    | Texte principal              |
| `--ink-dim`    | `#8a9bbd`                    | Texte secondaire             |
| `--ink-mute`   | `#4a5a7a`                    | Texte atténué                |
| `--line`       | `#1d2b4d`                    | Bordures                     |
| `--line-soft`  | `#152040`                    | Séparateurs                  |
| `--amber`      | `#fcd34d`                    | Avertissements               |
| `--indigo`     | `#a5b4fc`                    | Backend / accent violet      |
| `--rose`       | `#fda4af`                    | Data / accent rose           |
| `--green`      | `#86efac`                    | Statuts OK                   |

La classe `.hud` applique le style de panneau (fond semi-transparent, bordure, coins teal).

## Déploiement

Déployé sur Vercel. Chaque push sur `main` déclenche un build automatique.
