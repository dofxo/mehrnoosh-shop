import StoreProvider from "../StoreProvider";
import "../globals.scss";
import { langType } from "@/app/[lang]/langs";
import InitProducts from "@/components/InitProducts";
import RemoveDarkClass from "@/components/RemoveDarkClass";
import Footer from "@/components/ui/footer/Footer";
import DesktopHeader from "@/components/ui/header/desktop/DesktopHeader";
import MobileHeader from "@/components/ui/header/mobile/MobileHeader";
import MegaMenuWrapper from "@/components/ui/mega-menu/MegaMenuWrapper";
import MobileNav from "@/components/ui/mobile-nav/MobileNav";
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
  const language = await getLanguage(params.lang);
  const isFa = params.lang === "fa";

  return {
    title: language.general.website_title,
    description: language.general.website_description,
    keywords: language.general.keywords,
    authors: [
      { name: "Majid Kargar", url: "https://github.com/fulcain" },
      { name: "Mohammad Kargar", url: "https://github.com/dofxo" },
    ],
    openGraph: {
      title: language.general.website_title,
      description: language.general.website_description,
      url: "https://mehrnoosh.com",
      siteName: "Mehrnoosh",
      images: [
        {
          // TODO: add a image in database and replace here
          url: "https://mehrnoosh.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Mehrnoosh Online Shopping",
        },
      ],
      locale: isFa ? "fa_IR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: language.general.website_title,
      description: language.general.website_description,
      site: "@mehrnooshshop",
      // TODO: add a image in database and replace here
      images: ["https://mehrnoosh.com/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    themeColor: "#ffffff",
    viewport: "width=device-width, initial-scale=1.0",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
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
  const language = await getLanguage(lang);

  return (
    <html lang={lang} dir={lang === "fa" ? "rtl" : "ltr"}>
      <body className={`${yekanbakh.className} py-7 antialiased`}>
        <StoreProvider language={language} currentLanguage={lang}>
          <Provider>
            <InitProducts />
            <DesktopHeader />
            <MobileHeader />
            <MobileNav />
            <MegaMenuWrapper />
            <Toaster />
            <RemoveDarkClass />
            {children}
            <Footer />
          </Provider>
        </StoreProvider>
      </body>
    </html>
  );
}
