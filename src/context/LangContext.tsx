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
    op: "OPÉRATEUR",
    frame: "FRAME",
    online: "EN LIGNE",
    "h1-1": "Développeur",
    "h1-2": "Full-Stack",
    "h1-3": "& builder.",
    "hero-sub1": "Je conçois et développe des applications web modernes avec React, Next.js et Node.js — du prototype au produit final.",
    "cta-1": "voir les missions",
    "cta-2": "établir un contact",
    "tel-title": "télémétrie",
    "tel-lede": "<b>Christophe Winkel</b> — développeur web full-stack basé en France. Je transforme des spécifications en produits qui tournent, et des idées vagues en architectures claires.",
    "kv-loc": "localisation",
    "kv-stat": "statut",
    "kv-stat-v": "disponible",
    "kv-focus": "focus",
    "kv-form": "formation",
    "kv-resp": "réponse",
    "kv-mode": "mode",
    "kpi-1": "missions livrées",
    "kpi-1-d": "production · ship",
    "kpi-2": "stack core",
    "kpi-2-d": "React · Next · Node · Docker",
    "kpi-3": "disponibilité",
    "kpi-3-d": "ouvert aux opportunités",
    "kpi-4": "délai réponse",
    "kpi-4-d": "email · github",
    "stack-title": "stack · instrumentation",
    "cat-front": "frontend",
    "cat-back": "backend",
    "cat-data": "données",
    "cat-infra": "infra · devops",
    "cat-lang": "langages",
  },
  en: {
    op: "OPERATOR",
    frame: "FRAME",
    online: "ONLINE",
    "h1-1": "Full-Stack",
    "h1-2": "developer",
    "h1-3": "& maker.",
    "hero-sub1": "I design and ship modern web applications with React, Next.js and Node.js — from prototype to product.",
    "cta-1": "view missions",
    "cta-2": "open channel",
    "tel-title": "telemetry",
    "tel-lede": "<b>Christophe Winkel</b> — full-stack web developer based in France. I turn specs into products that run, and vague ideas into clear architectures.",
    "kv-loc": "location",
    "kv-stat": "status",
    "kv-stat-v": "available",
    "kv-focus": "focus",
    "kv-form": "training",
    "kv-resp": "response",
    "kv-mode": "mode",
    "kpi-1": "missions shipped",
    "kpi-1-d": "production · live",
    "kpi-2": "core stack",
    "kpi-2-d": "React · Next · Node · Docker",
    "kpi-3": "availability",
    "kpi-3-d": "open to opportunities",
    "kpi-4": "response time",
    "kpi-4-d": "email · github",
    "stack-title": "stack · instrumentation",
    "cat-front": "frontend",
    "cat-back": "backend",
    "cat-data": "data",
    "cat-infra": "infra · devops",
    "cat-lang": "languages",
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
