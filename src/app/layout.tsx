import yekanbakh from "@/fonts/yekanBakh";
import { ReactNode } from "react";
import { cookies } from "next/headers";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookie = await cookies();
   const lang = cookie.get('language')?.value

  return (
    <html  lang={lang} dir={lang === "fa" ? "rtl" : "ltr"}>
      <body className={`${yekanbakh.className} py-7 antialiased`}>
        {children}
      </body>
    </html>
  );
}
