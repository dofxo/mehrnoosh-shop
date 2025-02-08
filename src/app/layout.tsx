import type { Metadata } from "next";
import yekanBakh from "@/fonts/yekanBakh";
import "./globals.scss";

export const metadata: Metadata = {
  //TODO: replace with lang object text
  title: "سایت فروشگاهی مهرنوش",
  description: "سایت فروشگاهی مهرنوش",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} antialiased`}>{children}</body>
    </html>
  );
}
