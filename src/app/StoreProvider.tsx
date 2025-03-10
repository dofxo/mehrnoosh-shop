'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { initializeLanguage } from '../lib/features/language/languageSlice'


export default function StoreProvider({
  language,
  currentLanguage,
  children,
}: {
  language: Record<string, string>;
  currentLanguage: string;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(
      initializeLanguage({
        languageData: language,
        currentLanguage,
      }),
    );
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

