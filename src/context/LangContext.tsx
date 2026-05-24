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
  },
  en: {
    op: "OPERATOR",
    frame: "FRAME",
    online: "ONLINE",
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
