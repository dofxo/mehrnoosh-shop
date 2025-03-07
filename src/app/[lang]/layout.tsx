import StoreProvider from "../StoreProvider";
import "../globals.scss";
import { langType } from "./langs";
import { Provider } from "@/components/ui/provider";
import yekanbakh from "@/fonts/yekanBakh";
import { getLanguage } from "@/utils/langs";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
    <html
      lang={lang}
      dir={lang === "fa" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body className={`${yekanbakh.className} antialiased`}>
        <StoreProvider language={language} currentLanguage={lang}>
          <Provider>{children}</Provider>
        </StoreProvider>
        <Toaster />
      </body>
    </html>
  );
}
