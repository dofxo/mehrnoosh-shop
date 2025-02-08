import type { Metadata } from "next";
import yekanbakh from "@/app/fonts/yekanBakh";
import "../globals.scss";
import { getDictionary } from "@/utils/langs";
import { langType } from "./langs";

export async function generateMetadata({
  params,
}: {
  params: { lang: langType };
}): Promise<Metadata> {
  const { lang } = params;
  const language = await getDictionary(lang);

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
  const { lang } = params;

  return (
    <html lang={lang} dir={lang === "fa" ? "rtl" : "ltr"}>
      <body className={`${yekanbakh.className} antialiased`}>{children}</body>
    </html>
  );
}
