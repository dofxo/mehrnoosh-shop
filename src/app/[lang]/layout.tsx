import StoreProvider from "../StoreProvider";
import "../globals.scss";
import { langType } from "./langs";
import DesktopHeader from "@/components/ui/header/desktop/DesktopHeader";
import MobileHeader from "@/components/ui/header/mobile/MobileHeader";
import yekanbakh from "@/fonts/yekanBakh";
import { getLanguage } from "@/utils/langs";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang: langType };
}): Promise<Metadata> {
  const { lang } = await params;
  const language = await getLanguage(lang);

  // Dynamically set metadata based on language
  return {
    title: language.general.websiteTitle,
    description: language.general.websiteTitle,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: langType };
}) {
  const { lang } = await params;
  const language = await getLanguage(lang);

  return (
    <html lang={lang} dir={lang === "fa" ? "rtl" : "ltr"}>
      <body className={`${yekanbakh.className} antialiased`}>
        <StoreProvider language={language} currentLanguage={lang}>
          <DesktopHeader />
          <MobileHeader />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
