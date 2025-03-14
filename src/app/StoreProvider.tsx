"use client";

import {
  initializeLanguage,
  languageDataType,
} from "@/lib/features/language/languageSlice";
import { makeStore, AppStore } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  language,
  currentLanguage,
  children,
}: {
  language: languageDataType;
  currentLanguage: string;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(
      initializeLanguage({
        languageData: language,
        currentLanguage,
      }),
    );
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
