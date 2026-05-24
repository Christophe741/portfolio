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
