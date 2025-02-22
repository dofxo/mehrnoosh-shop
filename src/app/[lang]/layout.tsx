import "../globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { langType } from "./langs";
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

  return (
    <html lang={lang} dir={lang === "fa" ? "rtl" : "ltr"}>
      <body className={`${yekanbakh.className} antialiased`}>{children}</body>
    </html>
  );
}
