"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Lang = "fr" | "en";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const DICT: Record<Lang, Record<string, string>> = {
  fr: {
    // ── desktop top bar ──
    op: "OPÉRATEUR",
    frame: "FRAME",
    online: "EN LIGNE",
    // ── hero ──
    "h1-1": "Développeur",
    "h1-2": "Full-Stack",
    "h1-3": "& builder.",
    "hero-sub1":
      "Je conçois et développe des applications web modernes avec React, Next.js et Node.js — du prototype au produit final.",
    "hero-sub":
      "Apps web modernes — React, Next.js & Node.js. Du prototype au produit final.",
    "cta-1": "voir les missions",
    "cta-2": "établir un contact",
    // ── telemetry ──
    "tel-title": "télémétrie",
    "tel-lede":
      "<b>Christophe Winkel</b> — développeur web full-stack basé en France. Je transforme des spécifications en produits qui tournent, et des idées vagues en architectures claires.",
    "tel-lede-s":
      "<b>Christophe Winkel</b> — dev full-stack basé en France. Je transforme des specs en produits qui tournent.",
    "kv-loc": "localisation",
    "kv-stat": "statut",
    "kv-stat-v": "disponible",
    "kv-focus": "focus",
    "kv-form": "formation",
    "kv-resp": "réponse",
    "kv-mode": "mode",
    // ── KPIs ──
    "kpi-1": "missions livrées",
    "kpi-1-d": "production · ship",
    "kpi-1-ds": "production",
    "kpi-2": "stack core",
    "kpi-2-d": "React · Next · Node · Docker",
    "kpi-2-ds": "React · Next · Node",
    "kpi-3": "disponibilité",
    "kpi-3-d": "ouvert aux opportunités",
    "kpi-3-ds": "opportunités",
    "kpi-4": "délai réponse",
    "kpi-4-d": "email · github",
    "kpi-4-ds": "email · github",
    // ── stack ──
    "stack-title": "stack · instrumentation",
    "stack-title-h": "stack",
    "stack-sub": "instrumentation",
    "stack-cfg": "production stack",
    "stack-kpi": "parcours dev",
    "stack-kpi-d": "DWWM 2025 · Bachelor CDA actif",
    "stack-years": "ans",
    "cat-front": "frontend",
    "cat-back": "backend",
    "cat-data": "données",
    "cat-infra": "infra · devops",
    "cat-lang": "langages",
    // ── comms ──
    "comms-title": "canaux de communication",
    "comms-title-h": "comms",
    "comms-sub": "canaux ouverts",
    "comm-loc-lbl": "localisation",
    "comm-loc-val": "France · remote-friendly · CET",
    "comm-loc-val-s": "France · remote · CET",
    "comm-resp-lbl": "temps de réponse",
    "comp-lbl": "canal ouvert · transmission acceptée",
    "comp-prompt": "« j'ai une idée à transformer en produit… »",
    // ── missions ──
    "missions-title": "missions actives",
    "missions-title-h": "missions",
    "missions-sub": "en orbite",
    "m-role": "// e-commerce B2C · vente & location LLD · 2026 — full-stack",
    "m-desc":
      "Plateforme e-commerce B2C de vente et location longue durée de véhicules d'occasion. Application client et back-office métier. Développé dans le cadre du Bachelor Développeur d'Application Web.",
    "m-foot": "// type · e-commerce B2C",
    "m-foot-s": "// e-commerce B2C",
    "m-link": "voir_le_cas() →",
    "m-link-s": "voir →",
    "m-desc-s":
      "Plateforme e-commerce B2C · vente et location LLD de véhicules d'occasion. App client + back-office métier. Bachelor Développeur d'Application Web.",
    "e-role":
      "// covoiturage écologique · projet de formation · 2025 — full-stack + devops",
    "e-role-s":
      "// covoiturage écologique · formation · 2025 — full-stack + devops",
    "e-desc":
      "Plateforme web de covoiturage à faible empreinte carbone, développée dans le cadre de la formation Développeur Web & Web Mobile. Déploiement conteneurisé, architecture multi-base.",
    "e-desc-s":
      "Plateforme de covoiturage à faible empreinte carbone, développée dans le cadre de la formation Développeur Web & Web Mobile. Déploiement conteneurisé, architecture multi-base.",
    "e-foot": "// type · web app + devops",
    "e-foot-s": "// web app + devops",
    "e-link": "voir_le_cas() →",
    "e-link-s": "voir →",
    "next-h": "MISSION · 03",
    "next-t": "prochain projet",
    "next-r": "// repo en cours de calibration",
    // ── tabs ──
    "tab-home": "home",
    "tab-stack": "stack",
    "tab-missions": "missions",
    "tab-comms": "comms",
    // ── logs ──
    "log-title": "flux d'activité · stream",
    "log-title-s": "flux d'activité",
    "log-1": "build <b>m-motors</b> · déployé sur <b>vercel</b> · 0 erreur",
    "log-1-s": "build <b>m-motors</b> · vercel · 0 erreur",
    "log-2": "refactor · <b>flow d'auth</b> · -180 LOC · +confiance",
    "log-2-s": "refactor <b>flow d'auth</b> · -180 LOC",
    "log-3": "container <b>ecoride</b> · lancé sur <b>caprover</b> · healthy",
    "log-3-s": "container <b>ecoride</b> · healthy",
    "log-4":
      "pr ouverte · <b>améliorer l'a11y sur /search</b> · prête à review",
    "log-4-s": "pr · <b>a11y /search</b> · prête",
    "log-5": "niveau caféine bas · <b>relance en cours</b>",
    "log-5-s": "caféine basse · <b>relance</b>",
    // ── footer ──
    "foot-1": "// you are stardust · running on purpose",
    "foot-2": "build · stable",
  },
  en: {
    // ── desktop top bar ──
    op: "OPERATOR",
    frame: "FRAME",
    online: "ONLINE",
    // ── hero ──
    "h1-1": "Full-Stack",
    "h1-2": "developer",
    "h1-3": "& maker.",
    "hero-sub1":
      "I design and ship modern web applications with React, Next.js and Node.js — from prototype to product.",
    "hero-sub":
      "Modern web apps — React, Next.js & Node.js. From prototype to product.",
    "cta-1": "view missions",
    "cta-2": "open channel",
    // ── telemetry ──
    "tel-title": "telemetry",
    "tel-lede":
      "<b>Christophe Winkel</b> — full-stack web developer based in France. I turn specs into products that run, and vague ideas into clear architectures.",
    "tel-lede-s":
      "<b>Christophe Winkel</b> — full-stack dev based in France. I turn specs into products that run.",
    "kv-loc": "location",
    "kv-stat": "status",
    "kv-stat-v": "available",
    "kv-focus": "focus",
    "kv-form": "training",
    "kv-resp": "response",
    "kv-mode": "mode",
    // ── KPIs ──
    "kpi-1": "missions shipped",
    "kpi-1-d": "production · live",
    "kpi-1-ds": "production",
    "kpi-2": "core stack",
    "kpi-2-d": "React · Next · Node · Docker",
    "kpi-2-ds": "React · Next · Node",
    "kpi-3": "availability",
    "kpi-3-d": "open to opportunities",
    "kpi-3-ds": "open",
    "kpi-4": "response time",
    "kpi-4-d": "email · github",
    "kpi-4-ds": "email · github",
    // ── stack ──
    "stack-title": "stack · instrumentation",
    "stack-title-h": "stack",
    "stack-sub": "instrumentation",
    "stack-cfg": "production stack",
    "stack-kpi": "dev path",
    "stack-kpi-d": "DWWM 2025 · Bachelor CDA active",
    "stack-years": "yrs",
    "cat-front": "frontend",
    "cat-back": "backend",
    "cat-data": "data",
    "cat-infra": "infra · devops",
    "cat-lang": "languages",
    // ── comms ──
    "comms-title": "communication channels",
    "comms-title-h": "comms",
    "comms-sub": "channels open",
    "comm-loc-lbl": "location",
    "comm-loc-val": "France · remote-friendly · CET",
    "comm-loc-val-s": "France · remote · CET",
    "comm-resp-lbl": "response time",
    "comp-lbl": "channel open · transmissions accepted",
    "comp-prompt": '"I have an idea to turn into a product…"',
    // ── missions ──
    "missions-title": "active missions",
    "missions-title-h": "missions",
    "missions-sub": "in orbit",
    "m-role": "// B2C e-commerce · sale & long-term rental · 2026 — full-stack",
    "m-desc":
      "B2C e-commerce platform for the sale and long-term rental of used vehicles. Customer-facing app and business back-office. Built as part of the Bachelor Web Application Developer programme.",
    "m-foot": "// type · B2C e-commerce",
    "m-foot-s": "// B2C e-commerce",
    "m-link": "open_case_study() →",
    "m-link-s": "open →",
    "m-desc-s":
      "B2C e-commerce platform · sale & long-term rental of used vehicles. Customer app + back-office. Bachelor Web Application Developer.",
    "e-role":
      "// eco-friendly carpooling · training project · 2025 — full-stack + devops",
    "e-role-s":
      "// eco-friendly carpooling · training · 2025 — full-stack + devops",
    "e-desc":
      "Low-carbon carpooling web platform, developed during the Web & Mobile Developer training. Containerized deployment, multi-database architecture.",
    "e-desc-s":
      "Low-carbon carpooling platform, developed during the Web & Mobile Developer training. Containerized deployment, multi-database architecture.",
    "e-foot": "// type · web app + devops",
    "e-foot-s": "// web app + devops",
    "e-link": "open_case_study() →",
    "e-link-s": "open →",
    "next-h": "MISSION · 03",
    "next-t": "next project",
    "next-r": "// repo calibrating",
    // ── tabs ──
    "tab-home": "home",
    "tab-stack": "stack",
    "tab-missions": "missions",
    "tab-comms": "comms",
    // ── logs ──
    "log-title": "activity stream",
    "log-title-s": "activity stream",
    "log-1": "build <b>m-motors</b> · deployed to <b>vercel</b> · 0 errors",
    "log-1-s": "build <b>m-motors</b> · vercel · 0 errors",
    "log-2": "refactor · <b>auth flow</b> · -180 LOC · +confidence",
    "log-2-s": "refactor <b>auth flow</b> · -180 LOC",
    "log-3": "container <b>ecoride</b> · started on <b>caprover</b> · healthy",
    "log-3-s": "container <b>ecoride</b> · healthy",
    "log-4": "opened pr · <b>improve a11y on /search</b> · ready for review",
    "log-4-s": "pr · <b>a11y /search</b> · ready",
    "log-5": "caffeine level low · <b>brewing more</b>",
    "log-5-s": "caffeine low · <b>brewing</b>",
    // ── footer ──
    "foot-1": "// you are stardust · running on purpose",
    "foot-2": "build · stable",
  },
};

const LangContext = createContext<LangContextType>({
  lang: "fr",
  setLang: () => {},
  t: (k) => k,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang_v3") as Lang | null;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved === "fr" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    try {
      localStorage.setItem("lang_v3", l);
    } catch {}
  }

  function t(key: string): string {
    return DICT[lang][key] ?? key;
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
